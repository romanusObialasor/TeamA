import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FiSearch } from "react-icons/fi";
import { BiHelpCircle } from "react-icons/bi";
import { BsBell } from "react-icons/bs";
import OverViewCard from "../AdminDashboard/ProjectCard";
import UserNav from "./UserNav";
import { app } from "../base";

const UserOverView = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const authUser = await app.auth().currentUser;
    const comkey = localStorage.getItem("comkey");
    console.log(comkey);

    if (authUser) {
      await app
        .firestore()
        .collection("Register")
        .doc(`${comkey}`)
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
      <UserNav />
      <Container>
        <Wrapper>
          <Top>
            <Left>
              <FiSearch />
              <Input placeholder="Search" />
            </Left>
            <Right>
              <BiHelpCircle
                style={{
                  marginRight: "10px",
                }}
              />
              <BsBell
                style={{
                  marginRight: "10px",
                }}
              />
              <Name>Romanus Obialasor</Name>
              <Image src="/images/4.jpg" />
            </Right>
          </Top>
          <span>Projects Worked On</span>
          <Rest>
            {data?.map((props) => (
              <OverViewCard
                to={`/userProject/${props.id}`}
                title={props.title}
                description={props.desciption}
                deadline={props.deadline.seconds}
              />
            ))}
          </Rest>
        </Wrapper>
      </Container>
    </div>
  );
};

export default UserOverView;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: #fafafa;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  /* z-index: -1; */
  overflow-y: scroll;
  @media screen and (max-width: 768px) {
    position: absolute;
    background-color: red;
    z-index: -1;
    width: 100%;
    height: 100vh;
  }
`;

const Wrapper = styled.div`
  width: 90%;
  height: 95%;
  /* background: red; */
  display: flex;
  align-items: center;
  flex-direction: column;
  span {
    font-size: 30px;
  }
`;

const Rest = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  /* align-items: center; */
  padding-top: 20px;
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
