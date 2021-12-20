import React, { useState } from "react";
import { app } from "./base";
import firebase from "firebase";

const AdminLogin = () => {
  const [image, setImage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async () => {
    await app.auth().signInWithEmailAndPassword(email, password);
    setEmail("");
    setPassword("");
    setImage(image);
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
      <button onClick={signIn}>Admin login</button>
    </div>
  );
};

export default AdminLogin;
