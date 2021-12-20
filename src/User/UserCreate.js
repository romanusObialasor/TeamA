import React, { useState } from "react";
import styled from "styled-components";
import UserNav from "./UserNav";
import { app } from "../../base";
import firebase from "firebase";
import { useHistory } from "react-router-dom";

const UserCreate = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");

  const history = useHistory("");

  const postData = async () => {
    const authUser = await app.auth().currentUser;
    const cKey = localStorage.getItem("cKey");
    if (authUser) {
      await app
        .firestore()
        .collection("Register")
        .doc(cKey)
        .collection("user")
        .doc(authUser.uid)
        .collection("myTodo")
        .doc()
        .set({
          title: title,
          description: description,
          deadline: deadline,
          time: firebase.firestore.FieldValue.serverTimestamp(),
          craetedBy: authUser.uid,
        });
      setTitle("");
      setDescription("");
      setDeadline("");
    }
    history.push("/myProject");
  };
  return (
    <div style={{ display: "flex" }}>
      <UserNav />
      <Container>
        <Wrapper>
          <Top>Create Projects</Top>
          <Inputs>
            <InputHolder>
              <Label>Title:</Label>
              <Input
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </InputHolder>
            <InputHolder>
              <Label>Description:</Label>
              <TextArea
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              />
            </InputHolder>
            <InputHolder>
              <Label>Deadline:</Label>
              <Input
                value={deadline}
                onChange={(e) => {
                  setDeadline(e.target.value);
                }}
              />
            </InputHolder>
          </Inputs>
          <ButttonHolder>
            <Submit onClick={postData}>Create</Submit>
          </ButttonHolder>
        </Wrapper>
      </Container>
    </div>
  );
};

export default UserCreate;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  background: white;
  height: 80%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 29%) 0px 26px 30px -10px,
    rgb(0 0 0 / 43%) 0px 16px 10px -10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const InputHolder = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  color: blue;
`;

const Input = styled.input`
  width: 300px;
  height: 40px;
`;

const Top = styled.div`
  font-size: 30px;
`;

const Inputs = styled.div`
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TextArea = styled.textarea``;

const Submit = styled.div`
  width: 100px;
  height: 35px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  transition: 250ms;
  background: blue;
  cursor: pointer;
  border: 1px solid blue;
  opacity: 0.7;
  :hover {
    opacity: 1;
  }
`;

const ButttonHolder = styled.div``;
