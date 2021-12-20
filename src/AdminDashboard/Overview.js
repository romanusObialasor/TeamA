import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FiSearch } from "react-icons/fi";
import { BiHelpCircle } from "react-icons/bi";
import { BsBell } from "react-icons/bs";
import ProjectCard from "./ProjectCard";
import AdminNav from "./AdminNav";
import HeaderTop from "./HeaderTop";
import MobileNav from "./MobileNav";
import Fade from "react-reveal/Fade";
import { AiOutlineMenu } from "react-icons/ai";
import { app } from "../base";
import firebase from "firebase";
import AdminCard from "./AdminCard";

const OverView = () => {
  const [toggle, setToggle] = useState(false);

  const onToggle = () => {
    setToggle(!toggle);
  };
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const authUser = await app.auth().currentUser;
    if (authUser) {
      await app
        .firestore()
        .collection("Register")
        .doc(authUser.uid)
        .collection("adminTodo")
        .onSnapshot((snapshot) => {
          const item = [];
          snapshot.forEach((doc) => {
            item.push({ ...doc.data(), id: doc.id });
          });
          setData(item);
        });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div style={{ display: "flex" }}>
      <Div>
        <AdminNav />
      </Div>
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
        <Head>
          <HeaderTop />
        </Head>
        <Wrapper>
          <span>Projects</span>
          <Rest>
            {data?.map((props) => (
              <AdminCard
                title={props.title}
                description={props.description}
                deadline={props.deadline.seconds}
                key={props.id}
                to={`/project/${props.id}`}
              />
            ))}
          </Rest>
        </Wrapper>
      </Container>
    </div>
  );
};

export default OverView;

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

const Head = styled.div`
  width: 100%;
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: #fafafa;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-direction: column;
  /* z-index: -1; */
  overflow-y: scroll;
  @media screen and (max-width: 768px) {
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100vh;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  align-items: center;
  flex-direction: column;
  span {
    font-size: 35px;
    margin-top: 20px;
    font-weight: 500;
  }
  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;

const Rest = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  /* align-items: center; */
  padding-top: 20px;
  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;

const Top = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  color: rgba(0, 0, 0, 0.5);
`;

const Input = styled.input`
  width: 300px;
  height: 30px;
  margin-left: 5px;
  border: none;
  outline: none;
  background: transparent;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.5);
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Right = styled.div`
  display: flex;
  align-items: center;
`;

const Name = styled.div`
  margin-right: 10px;
  margin-left: 10px;
  font-weight: 600;
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
  background: greenyellow;
  border-radius: 25px;
  margin-right: 5px;
  object-fit: cover;
`;
