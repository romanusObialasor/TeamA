import React, { useState } from "react";
import { app } from "./base";
import firebase from "firebase";
import { useHistory } from "react-router";

const Register = () => {
  const history = useHistory();
  const [cName, setCName] = useState("");
  const [cEmail, setCEmail] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [err, setErr] = useState("");
  const [cLogo, setCLogo] = useState();

  const displayLog = (e) => {
    const file = e.target.files[0];
    const fileUrl = URL.createObjectURL(file);
    console.log(fileUrl);
    setCLogo(fileUrl);
  };

  const RegisterCom = async () => {
    try {
      const authUser = await app
        .auth("Romanus")
        .createUserWithEmailAndPassword(cEmail, cPassword);
      console.log(authUser);

      if (authUser) {
        await app
          .firestore()
          .collection("Register")
          .doc(authUser.user.uid)
          .set({
            cName: cName,
            cLogo: cLogo,
            cKey: authUser.user.uid,
            cEmail: cEmail,
            time: firebase.firestore.FieldValue.serverTimestamp(),
          });
      }
    } catch (error) {
      setErr(error.message);
    }
    // history.push("/admin");
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Enter Name"
        value={cName}
        onChange={(e) => {
          setCName(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Enter Email"
        value={cEmail}
        onChange={(e) => {
          setCEmail(e.target.value);
        }}
      />
      <input
        type="password"
        placeholder="Enter Password"
        value={cPassword}
        onChange={(e) => {
          setCPassword(e.target.value);
        }}
      />
      <button onClick={RegisterCom}>Register</button>
    </div>
  );
};

export default Register;
