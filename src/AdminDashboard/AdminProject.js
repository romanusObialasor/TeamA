import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FiSearch } from "react-icons/fi";
import { BiHelpCircle } from "react-icons/bi";
import { BsBell } from "react-icons/bs";
import { RiArrowDropDownLine } from "react-icons/ri";
import TaskCard from "./TaskCard";
import AddTaskToProject from "./joe/AddTaskToProject";
import { useParams } from "react-router-dom";
import AdminNav from "./AdminNav";
import HeaderTop from "./HeaderTop";
import MobileNav from "./MobileNav";
import Fade from "react-reveal/Fade";
import { app } from "../base";
import { AiOutlineMenu } from "react-icons/ai";

const ProjectComponent = () => {
  const { id } = useParams();
  const [toggle, setToggle] = useState(false);
  const [moda, setModa] = useState(false);

  const onToggle = () => {
    setToggle(!toggle);
  };
  const onModa = () => {
    setModa(!moda);
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
    console.log(data);
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
        <div
          style={{
            width: "100%",
          }}
        >
          <HeaderTop />
        </div>
        <Wrapper>
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
                    <TitleHolder>Task</TitleHolder>
                    <span>3</span>
                  </TopHolder>
                  <Add onClick={onModa}>+</Add>
                  {moda ? (
                    <AddTaskToProject onModa={onModa} moda={moda} />
                  ) : null}
                  <CardHolder>
                    {data?.map((props) => (
                      <TaskCard
                        key={props.id}
                        title={props.title}
                        description={props.desciption}
                        deadline={props.deadline.seconds}
                        // image={props.members[0].image}
                        members={props.members}
                      />
                    ))}
                  </CardHolder>
                </WrapperHolder>
              </Holder>
              <Holder>
                <WrapperHolder>
                  <TopHolder>
                    <TitleHolder>onGoing</TitleHolder>
                    <span>2</span>
                  </TopHolder>
                  <CardHolder>
                    <TaskCard />
                  </CardHolder>
                </WrapperHolder>
              </Holder>
              <Holder>
                <WrapperHolder>
                  <TopHolder>
                    <TitleHolder>Completed</TitleHolder>
                    <span>1</span>
                  </TopHolder>
                  <CardHolder>
                    <TaskCard />
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

export default ProjectComponent;

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

const CardHolder = styled.div`
  width: 100%;
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  /* min-height: 100vh; */
  background: #fafafa;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* z-index: -1; */
  overflow-y: scroll;
  padding-top: 20px;
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

const Add = styled.div`
  width: 90%;
  height: 30px;
  background: rgba(0, 252, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  border-radius: 5px;
  cursor: pointer;
  color: green;
  transition: 350ms;

  :hover {
    background: rgba(0, 150, 0, 0.2);
  }
`;

// const Wrapper = styled.div``;

// const Wrapper = styled.div``;

// const Wrapper = styled.div``;

// const Wrapper = styled.div``;

// const Wrapper = styled.div``;

// const Wrapper = styled.div``;
