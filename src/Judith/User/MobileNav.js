import React, { useState } from "react";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import Fade from "react-reveal/Fade";
import { GiCancel } from "react-icons/gi";
import { GrStackOverflow } from "react-icons/gr";
import { FaProjectDiagram } from "react-icons/fa";
import { IoStatsChartSharp } from "react-icons/io5";
import { MdCardMembership } from "react-icons/md";
import { GoSettings } from "react-icons/go";
import { BiLogInCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
import { FaKey } from "react-icons/fa";

const MobileNav = () => {
  const [toggle, setToggle] = useState(false);

  const onToggle = () => {
    setToggle(!toggle);
  };
  return (
    <Container>
      <IconHolder>
        {toggle ? <Icon2 onClick={onToggle} /> : <Icon onClick={onToggle} />}
        <Fade left when={toggle}>
          <Nav>
            <TopNav>
              <TextIconHolder to="/">
                <GrStackOverflow />

                <span>Overview</span>
              </TextIconHolder>

              <TextIconHolder>
                <FaProjectDiagram />

                <span>Create Projects</span>
              </TextIconHolder>
              <TextIconHolder>
                <IoStatsChartSharp />

                <span>Charts</span>
              </TextIconHolder>
              <TextIconHolder>
                <MdCardMembership />

                <span>Members</span>
              </TextIconHolder>
              <TextIconHolder>
                <FaKey />

                <span>Copy Company's Key</span>
              </TextIconHolder>
            </TopNav>

            <BottomNav>
              <TextIconHolder>
                <GoSettings />

                <span>Settings</span>
              </TextIconHolder>
              <TextIconHolder>
                <BiLogInCircle />

                <span>Log Out</span>
              </TextIconHolder>
            </BottomNav>
          </Nav>
        </Fade>
      </IconHolder>
    </Container>
  );
};

export default MobileNav;

const Small = styled.div`
  // border: 2px solid #be01ff;
  width: 70%;
  height: 70%;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextIconHolder = styled(Link)`
  width: 200px;
  height: 40px;
  display: flex;
  //flex-direction: column;
  text-decoration: none;
  align-items: center;
  margin-top: 20px;
  padding-left: 15px;
  border-radius: 4px;
  // justify-content: center;
  color: white;
  opacity: 0.7;
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

const Logo = styled.img`
  width: 150px;
  height: 60px;
  background-color: white;
  margin-top: 50px;
  border: 1px solid #be01ff;
`;

const TopNav = styled.div`
  width: 80%;
  //height: 100%;
  display: flex;
  flex-direction: column;

  margin-top: 30px;
  //align-items: center;
  flex: 1;
  // justify-content: center;
`;

const BottomNav = styled.div`
  width: 80%;
  //height: 100%;
  display: flex;
  flex-direction: column;

  padding-bottom: 100px;
`;

const Nav = styled.div`
  width: 350px;
  height: 100vh;
  min-height: 450px;
  background-color: #1c253c;
  display: flex;
  flex-direction: column;
  padding-top: 50px;
  //justify-content: center;
  align-items: center;
  flex: 1;
`;

const Icon2 = styled(GiCancel)`
  display: none;
  @media screen and (max-width: 768px) {
    //width: 100%;
    display: flex;
    font-weight: bold;
    font-size: 30px;
    position: fixed;
    z-index: 9;
    padding: 15px;
    color: white;
  }
`;

const Icon = styled(GiHamburgerMenu)`
  display: none;
  @media screen and (max-width: 768px) {
    //width: 100%;
    display: flex;
    font-weight: bold;
    font-size: 25px;
    position: fixed;
    z-index: 9;
    padding: 15px;
  }
`;

const IconHolder = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    height: 50px;
    position: absolute;
    z-index: 9;
    display: flex;
    //background-color: red;
    width: 100%;
    //margin-left: 30px;
    //padding: 10px;
    cursor: pointer;
  }
`;

const Container = styled.div`
  /* min-height: 100vh;
  height: 100%;
  width: 100%; */
  display: flex;
`;
