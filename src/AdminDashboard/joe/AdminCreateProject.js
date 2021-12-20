import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import AdminNav from "../AdminNav";
import HeaderTop from "../HeaderTop";
import MobileNav from "../MobileNav";
import Fade from "react-reveal/Fade";
import { AiOutlineMenu } from "react-icons/ai";
import { app } from "../../base";
import firebase from "firebase";
import Calendar from "react-calendar";
// import moment from 'mooment'

const AdminCreateProject = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState(new Date());
  const [toggle, setToggle] = useState(false);
  console.log(deadline);
  const history = useHistory();
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
      history.push("/admin");
    }
  };

  const onToggle = () => {
    setToggle(!toggle);
  };
  return (
    <>
      {toggle ? null : (
        <Icon>
          <AiOutlineMenu onClick={onToggle} />
        </Icon>
      )}

      <Fade when={toggle} left>
        <Mobile>
          <MobileNav toggle={toggle} onToggle={onToggle} />
        </Mobile>
      </Fade>
      <Container>
        <Div>
          <AdminNav />
        </Div>
        <Hold>
          <HeaderTop />
          <Wrapper>
            <Card>
              <Header>Create Project</Header>
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
              <Button onClick={postData}>Create</Button>
            </Card>
            <InputWrap>
              <DeadLine>Set a deadLine</DeadLine>
              {/* <Input
                    value={deadline}
                    onChange={(e) => {
                      setDeadline(e.target.value);
                    }}
                  /> */}
              <Calendar onChange={setDeadline} value={deadline} />
            </InputWrap>
          </Wrapper>
        </Hold>
      </Container>
    </>
  );
};

export default AdminCreateProject;
const Hold = styled.div`
  width: 100%;
`;

const Icon = styled.div`
  top: 20px;
  position: absolute;
  left: 10px;
  font-size: 30px;
  cursor: pointer;
  z-index: 1000;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const Mobile = styled.div``;

const Div = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;
const Card = styled.div`
  width: 380px;
  height: 320px;
  box-shadow: -1px -1px 6px rgba(0, 0, 0, 0.16), 1px 1px 6px rgba(0, 0, 0, 0.16);
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: none;
  margin-right: 10px;
`;
const Header = styled.div`
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 50px;
  color: grey;
`;
const Holder = styled.div`
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  color: #0221fc;
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
  width: 100px;
  height: 40px;
  font-size: 16px;
  border-radius: 5px;
  border: none;
  background-color: #1c253c;
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
