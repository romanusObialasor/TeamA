import React, { useState } from "react";
import { app } from "./base";
import firebase from "firebase";
import { useHistory } from "react-router-dom";

const SignIn = () => {
  const [image, setImage] = useState(image);
  const [email, setEmail] = useState("");
  const [comkey, setComkey] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const signIn = async () => {
    await app.auth().signInWithEmailAndPassword(email, password);
    setEmail("");
    setPassword("");
    setComkey("");
    localStorage.setItem("comkey", comkey);
    history.push("/user");
  };

  return (
    <div>
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
      <button onClick={signIn}>Sign In</button>
    </div>
  );
};

export default SignIn;
