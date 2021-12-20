import React from "react";
import styled from "styled-components";
import {
  AiOutlineHome,
  AiOutlineFolderOpen,
  AiOutlineMessage,
  AiOutlineCalendar,
  AiOutlineSetting,
  AiOutlineLogout,
} from "react-icons/ai";
import { BsBarChart } from "react-icons/bs";
import { Link } from "react-router-dom";

const AdminNav = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Header>
            <Logo src="/images/2.png" />
            <CName>Comany's Name</CName>
          </Header>
          <Top>
            <MyLink to="/admin">
              <Holder>
                <AiOutlineHome />
                <span>Projects</span>
              </Holder>
            </MyLink>
            <MyLink to="/create">
              <Holder>
                <AiOutlineFolderOpen />
                <span>Create project</span>
              </Holder>
            </MyLink>
            <MyLink to="/create">
              <Holder>
                <BsBarChart />
                <span> Stats</span>
              </Holder>
            </MyLink>
            <MyLink to="/members">
              <Holder>
                <AiOutlineMessage />
                <span>Members</span>
              </Holder>
            </MyLink>
          </Top>
          <Bottom>
            <Holder>
              <AiOutlineSetting />
              <span>Settings</span>
            </Holder>
            <Holder>
              <AiOutlineLogout />
              <span>Log out</span>
            </Holder>
          </Bottom>
        </Wrapper>
      </Container>
    </>
  );
};

export default AdminNav;

const Logo = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 70px;
  object-fit: contain;
`;

const CName = styled.div`
  font-weight: 400;
`;

const MyLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

const Container = styled.div`
  width: 300px;
  height: 100vh;
  background-color: #1c253c;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  /* z-index: 1;
  position: absolute; */
`;

const Wrapper = styled.div`
  width: 85%;
  height: 85%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: #1c253c;
`;

const Header = styled.div`
  font-weight: bold;
  margin-bottom: 20px;
  font-size: 17px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  width: 100%;
  flex-direction: column;
  height: 80px;
  margin-bottom: 30px;
`;

const Top = styled.div`
  width: 100%;
  height: 60%;
  /* margin-bottom: 10px; */
  margin-top: 20px;
`;

const Holder = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  height: 40px;
  padding-left: 5px;
  padding-right: 5px;
  border-radius: 5px;
  transition: 350ms;
  color: white;
  cursor: pointer;
  /* border-bottom: 1px solid rgba(0, 0, 0, 0.1); */
  :hover {
    background: rgba(252, 252, 252, 0.2);
  }
  span {
    margin-left: 20px;
    font-weight: 500;
    color: white;
    /* font-size: 17px; */
  }
`;

const Bottom = styled.div`
  /* flex: 1; */
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
