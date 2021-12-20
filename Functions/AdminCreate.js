import React, { useState, useEffect } from "react";
import { app } from "../base";
import firebase from "firebase";

const AdminCreate = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");

  const postData = async () => {
    const authUser = await app.auth().currentUser;
    if (authUser) {
      await app
        .firestore()
        .collection("Register")
        .doc(authUser.uid)
        .collection("adminTodo")
        .doc()
        .set({
          title: title,
          description: description,
          deadline: deadline,
          createdBy: authUser.uid,
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        });
      setTitle("");
      setDescription("");
      setDeadline("");
    }
  };
  return <div>Admin create</div>;
};

export default AdminCreate;
