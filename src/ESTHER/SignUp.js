import React, { useState } from "react";
import styled from "styled-components";
import firebase from "firebase";
import { app } from "../base";

const SignUp = () => {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [comkey, setComkey] = useState("");
  const [percent, setPercent] = useState(0.001);

  const displayImage = async (e) => {
    const file = e.target.files[0];
    const fileRef = app.storage().ref();
    const storageRef = fileRef.child("userAvatar/" + file.name).put(file);

    storageRef.on(
      firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) => {
        const counted = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setPercent(Math.floor(counted));
      },
      (err) => console.log(err.message),
      () => {
        storageRef.snapshot.ref.getDownloadURL().then((URL) => {
          setImage(URL);
        });
      }
    );
  };

  const postData = async () => {
    const authUser = await app
      .auth()
      .createUserWithEmailAndPassword(email, password);
    if (authUser) {
      await app
        .firestore()
        .collection("Register")
        .doc(comkey)
        .collection("user")
        .doc(authUser.user.uid)
        .set({
          name: name,
          email: email,
          image: image,
          createdBy: authUser.user.uid,
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        });
      localStorage.setItem("comkey", comkey);
      setName("");
      setPassword("");
      setEmail("");
      setImage("");
      setComkey("");
    }
  };

  return (
    <Container>
      <input type="file" onChange={displayImage} />
      <input
        placeholder="name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        placeholder="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        placeholder="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <input
        placeholder="company's Key"
        value={comkey}
        onChange={(e) => {
          setComkey(e.target.value);
        }}
      />
      <button onClick={postData}>submit</button>
      <ImageDis src={image} />
    </Container>
  );
};

export default SignUp;

const ImageDis = styled.img`
  width: 300px;
  height: 300px;
  background: red;
  object-fit: cover;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
`;
