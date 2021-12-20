import React, { useState, useEffect } from "react";
import firebase from "firebase";
import { app } from "../base";

const AdminMember = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const authUser = await app.auth().currentUser;
    if (authUser) {
      await app
        .firestore()
        .collection("Register")
        .doc(authUser.uid)
        .collection("user")
        .onSnapshot((snapshot) => {
          const item = [];
          snapshot.forEach((doc) => {
            item.push({ ...doc.data(), id: doc.id });
          });
          setData(item);
          console.log(data);
        });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return <div>Admin member</div>;
};

export default AdminMember;
