import React from "react";
import styled from "styled-components";
import { GrStackOverflow } from "react-icons/gr";
import { FaProjectDiagram } from "react-icons/fa";
import { IoStatsChartSharp } from "react-icons/io5";
import { MdCardMembership } from "react-icons/md";
import { GoSettings } from "react-icons/go";
import { BiLogInCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
import { FaKey } from "react-icons/fa";
const HeaderNav = () => {
  return (
    <Container>
      <LogoHolder1>
        <Logo />
        <span>Simple.Co</span>
      </LogoHolder1>
      <Wrapper>
        <TopNav>
          <TextIconHolder to="/adminover">
            <Hold>
              <GrStackOverflow />
            </Hold>
            <span>Overview</span>
          </TextIconHolder>

          <TextIconHolder to="/admincreate">
            <Hold>
              <FaProjectDiagram />
            </Hold>
            <span>Create Projects</span>
          </TextIconHolder>
          <TextIconHolder>
            <Hold>
              <IoStatsChartSharp />
            </Hold>
            <span>Charts</span>
          </TextIconHolder>
          <TextIconHolder to="/member">
            <Hold>
              <MdCardMembership />
            </Hold>
            <span>Members</span>
          </TextIconHolder>
          <TextIconHolder>
            <Hold>
              <FaKey />
            </Hold>
            <span>Copy Company's Key</span>
          </TextIconHolder>
        </TopNav>

        <BottomNav>
          <TextIconHolder to="/adminsetting">
            <Hold>
              <GoSettings />
            </Hold>
            <span>Settings</span>
          </TextIconHolder>
          <TextIconHolder>
            <Hold>
              <BiLogInCircle />
            </Hold>
            <span>Log Out</span>
          </TextIconHolder>
        </BottomNav>
      </Wrapper>
    </Container>
  );
};

export default HeaderNav;

const Hold = styled.div`
  height: 25px;
  width: 25px;
  /* border: 4px solid whitesmoke;
  background-color: white; */
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  margin-left: 10px;
  opacity: 0.7;
  :hover {
    color: black;
    opacity: 1;
  }
`;

const TextIconHolder = styled(Link)`
  width: 100%;
  height: 40px;
  display: flex;
  text-decoration: none;
  align-items: center;
  margin-top: 20px;
  color: white;
  opacity: 0.7;

  border-radius: 4px;
  span {
    color: white;
    margin-left: 10px;
    font-size: 14px;
    font-weight: 500;
  }
  :hover {
    transition: 350ms;
    background-color: rgba(252, 252, 252, 0.3);
  }
  //border-bottom: 1px solid black;
`;

const LogoHolder1 = styled.div`
  width: 85%;
  height: 150px;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  span {
    color: white;
  }
  // height: 60px;
`;

const Logo = styled.img`
  width: 40px;
  height: 40px;
  border: 1px solid grey;
`;

const TopNav = styled.div`
  width: 100%;
  //height: 100%;
  display: flex;
  flex-direction: column;
`;

const BottomNav = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

const Wrapper = styled.div`
  width: 85%;
  height: 100%;

  //margin-top: 30px;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
`;

const Container = styled.div`
  width: 300px;
  min-height: 100vh;
  height: 100%;
  //border-right: 1px solid grey;
  box-shadow: 2px 1px 5px rgba(0, 0, 0, 0.1);
  background-color: #1c253c;
  display: flex;
  align-items: center;
  flex-direction: column;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
