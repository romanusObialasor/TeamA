import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FiSearch } from "react-icons/fi";
import { BiHelpCircle } from "react-icons/bi";
import { BsBell } from "react-icons/bs";
import { RiArrowDropDownLine } from "react-icons/ri";
import TodoCard from "./TodoCard";
import UserNav from "./UserNav";
import { app } from "../base";
import { useParams } from "react-router-dom";

const UserProject = () => {
  const { id } = useParams();

  const [data, setData] = useState([]);

  const fetchData = async () => {
    const authUser = await app.auth().currentUser;
    const comkey = localStorage.getItem("comkey");

    if (authUser) {
      await app
        .firestore()
        .collection("Register")
        .doc(comkey)
        .collection("adminTodo")
        .doc(id)
        .collection("Todo")
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
          <Project>
            <ProjectTop>
              <span>Projects</span>
              <Time>
                This Week <RiArrowDropDownLine />
              </Time>
            </ProjectTop>
            <Rest>
              <Holder>
                <WrapperHolder>
                  <TopHolder>
                    <TitleHolder>Todo</TitleHolder>
                    <span>3</span>
                  </TopHolder>
                  <CardHolder>
                    {data?.map((props) => (
                      <TodoCard
                        status="Doing >>"
                        key={props.id}
                        title={props.title}
                        description={props.desciption}
                        deadline={props.deadline.seconds}
                        member={props.members}
                      />
                    ))}
                  </CardHolder>
                </WrapperHolder>
              </Holder>
              <Holder>
                <WrapperHolder>
                  <TopHolder>
                    <TitleHolder>Doing</TitleHolder>
                    <span>2</span>
                  </TopHolder>
                  <CardHolder>
                    <TodoCard status="Doing >>" />
                  </CardHolder>
                </WrapperHolder>
              </Holder>
              <Holder>
                <WrapperHolder>
                  <TopHolder>
                    <TitleHolder>Done</TitleHolder>
                    <span>1</span>
                  </TopHolder>
                  <CardHolder>
                    <TodoCard status="Delete" clr />
                  </CardHolder>
                </WrapperHolder>
              </Holder>
            </Rest>
          </Project>
        </Wrapper>
      </Container>
    </div>
  );
};

export default UserProject;

const CardHolder = styled.div`
  width: 100%;
`;

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
    z-index: -1;
  }
`;

const Wrapper = styled.div`
  width: 90%;
  height: 95%;
  display: flex;
  flex-direction: column;
`;

const Top = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Project = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
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

const ProjectTop = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    font-weight: 600;
    font-size: 20px;
    opacity: 0.8;
  }
`;

const Time = styled.div`
  font-size: 14px;
  display: flex;
  align-items: center;
  font-weight: 500;
  cursor: pointer;
`;

const Rest = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
`;

const Holder = styled.div`
  width: 300px;
  /* height: 100%; */
  height: auto;
  background: rgba(4, 0, 255, 0.1);
  border-radius: 10px 10px 0px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
`;

const TopHolder = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    font-weight: 600;
    font-size: 14px;
  }
`;

const WrapperHolder = styled.div`
  width: 90%;
  height: auto;
  min-height: 95%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-bottom: 10px;
`;

const TitleHolder = styled.div`
  font-size: 18px;
  font-weight: 600;
`;
