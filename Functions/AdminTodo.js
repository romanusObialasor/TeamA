import React, { useState } from "react";
import { app } from "../base";
import firebase from "firebase";
import { useParams } from "react-router";

const AdminTodo = () => {
  // const { id } = useParams();
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");

  const reveal = () => {
    setShow(!show);
  };

  // const postData = async () => {
  //   const authUser = await app.auth().currentUser;

  //   await app
  //     .firestore()
  //     .collection("Register")
  //     .doc(authUser.uid)
  //     .collection("adminTodo")
  //     .doc(id)
  //     .collection("Todo")
  //     .doc()
  //     .set({
  //       title: title,
  //       desciption: description,
  //       deadline: deadline,
  //       createdAt: firebase.firestore.FieldValue.serverTimestamp(),
  //       createdBy: authUser.uid,
  //     });

  //   setTitle("");
  //   setDescription("");
  //   setDeadline("");
  // };

  return <div>adminTodo</div>;
};

export default AdminTodo;
