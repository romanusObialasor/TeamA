import React, { useState } from "react";
import firebase from "firebase";
import { app } from "./base";
import { useHistory } from "react-router-dom";

const SignUp = () => {
  const [image, setImage] = useState("/images/1.png");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [comkey, setComkey] = useState("");
  const [percent, setPercent] = useState(0);
  const history = useHistory();

  const displayImg = async (e) => {
    const file = e.target.files[0];
    const fileRef = app.storage().ref();
    const storageRef = fileRef.child("avatarPMA/" + file.name).put(file);

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
          console.log(URL);
        });
      }
    );
  };

  const signUp = async () => {
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
          password: password,
          comkey: password,
          time: firebase.firestore.FieldValue.serverTimestamp(),
          createdBy: authUser.user.uid,
        });
      localStorage.setItem("comkey", comkey);
      setImage(image);
      setEmail("");
      setName("");
      setPassword("");
    }
    // history.push("/user");
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <input
          placeholder="Enter Company's key"
          value={comkey}
          onChange={(e) => {
            setComkey(e.target.value);
          }}
        />
        <button onClick={signUp}> Sign up</button>
      </div>
    </div>
  );
};

export default SignUp;
