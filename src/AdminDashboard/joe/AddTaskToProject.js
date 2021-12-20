import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
import Calendar from "react-calendar";
import MembersModa from "../MembersModa";
import { app } from "../../base";
import { useParams } from "react-router-dom";
import firebase from "firebase";
import { useSelector, useDispatch } from "react-redux";

const AddTaskToProject = ({ onModa }) => {
  const file = useSelector((state) => state.myReducer.members);

  const [deadline, setDeadline] = useState(new Date());
  const [toggle, setToggle] = useState(false);
  const onToggle = () => {
    setToggle(!toggle);
  };
  const { id } = useParams();
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const postData = async () => {
    const authUser = await app.auth().currentUser;

    await app
      .firestore()
      .collection("Register")
      .doc(authUser.uid)
      .collection("adminTodo")
      .doc(id)
      .collection("Todo")
      .doc()
      .set({
        title: title,
        desciption: description,
        deadline: deadline,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        createdBy: authUser.uid,
      });

    setTitle("");
    setDescription("");
    setDeadline("");
  };

  return (
    <>
      <Container>
        <Wrapper>
          <Card>
            <Header>Add task to Project</Header>
            <Holder>
              <InputWrap>
                <Title>Title of your project</Title>
                <Input
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                />
              </InputWrap>
              <InputWrap>
                <Description>Description</Description>
                <Textarea
                  value={description}
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                />
              </InputWrap>
            </Holder>
            <AddTag>
              <div>
                Numbers of members added: <span>{file.length}</span>
              </div>
              <AddMember onClick={onToggle}>Add Member</AddMember>
              {toggle ? <MembersModa onToggle={onToggle} /> : null}
            </AddTag>
            <Button onClick={postData}>Create</Button>
          </Card>
          <Inputer>
            <DeadLine>Set a deadLine</DeadLine>
            <Calendar onChange={setDeadline} value={deadline} />
          </Inputer>
        </Wrapper>
        <Close onClick={onModa}>
          <AiOutlineClose />
        </Close>
      </Container>
    </>
  );
};

export default AddTaskToProject;

const Inputer = styled.div`
  margin: 5px 0px;
  display: flex;
  flex-direction: column;
`;

const DeadText = styled.label`
  font-size: 18px;
  font-weight: normal;
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  min-height: auto;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  @media screen and (max-width: 768px) {
    height: auto;
  }
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
  flex-wrap: wrap;
`;

const Card = styled.div`
  width: 380px;
  height: 500px;
  box-shadow: -1px -1px 6px rgba(0, 0, 0, 0.16), 1px 1px 6px rgba(0, 0, 0, 0.16);
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: none;
  border-radius: 5px;
  border: 1px solid blue;
  background-color: #fff;
  margin: 10px;
`;
const Header = styled.div`
  font-size: 27px;
  font-weight: 400;
  margin-bottom: 20px;
  color: grey;
`;
const Holder = styled.div`
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  color: #0221fc;
  /* margin-bottom: 50px; */
`;
const InputWrap = styled.div`
  margin: 5px 0px;
  display: flex;
  flex-direction: column;
`;
const Title = styled.label`
  font-size: 18px;
  font-weight: normal;
`;
const Description = styled.label`
  font-size: 18px;
  font-weight: normal;
`;
const DeadLine = styled.label`
  font-size: 18px;
  font-weight: normal;
`;
const Input = styled.input`
  width: 300px;
  height: 35px;
  border-radius: 3px;
  padding-left: 10px;
  border: 2px solid lightgrey;
  margin: 5px 0px;

  :focus {
    outline: 2px solid lightblue;
    border: none;
  }
`;
const Textarea = styled.textarea`
  width: 300px;
  height: 35px;
  border-radius: 3px;
  padding-left: 10px;
  border: 2px solid lightgrey;
  margin: 5px 0px;

  :focus {
    outline: 2px solid lightblue;
    border: none;
  }
`;

const Button = styled.button`
  width: 120px;
  height: 50px;
  font-size: 16px;
  border-radius: 5px;
  border: none;
  background-color: #0221fc;
  color: lightcyan;
  font-weight: 700;
  margin-top: 20px;
  transform: scale(1);
  transition: all 350ms;

  :hover {
    cursor: pointer;
    transform: scale(0.958);
  }
`;

const AddTag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const AddMember = styled.button`
  width: 320px;
  height: 45px;
  font-size: 16px;
  border-radius: 5px;
  border: none;
  background-color: #0221fc;
  color: lightcyan;
  font-weight: 500;
  margin-top: 20px;
  transform: scale(1);
  transition: all 350ms;

  :hover {
    cursor: pointer;
    transform: scale(0.958);
  }
`;
const Close = styled.div`
  position: absolute;
  top: 10px;
  right: 20px;
  width: 45px;
  height: 45px;
  background-color: blue;
  color: white;
  font-size: 22px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: center;
`;
