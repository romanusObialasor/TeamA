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
    <Fade left when={toggle}>
      <Container>
        <IconHolder>
          {toggle ? <Icon2 onClick={onToggle} /> : <Icon onClick={onToggle} />}
          <Nav>
            <TopNav tog>
              <TextIconHolder to="/">
                <Hold>
                  <GrStackOverflow />
                </Hold>
                <span>Overview</span>
              </TextIconHolder>

              <TextIconHolder>
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
              <TextIconHolder>
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
              <TextIconHolder>
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
          </Nav>
        </IconHolder>
      </Container>
    </Fade>
  );
};

export default MobileNav;

const Hold = styled.div`
  height: 25px;
  width: 25px;
  border: 4px solid whitesmoke;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  margin-left: 10px;
  :hover {
    color: black;
  }
`;

const TextIconHolder = styled(Link)`
  width: 200px;
  height: 40px;
  display: flex;
  //flex-direction: column;
  text-decoration: none;
  align-items: center;
  margin-top: 20px;
  // justify-content: center;
  color: black;
  span {
    color: white;
    margin-left: 10px;
    font-size: 14px;
    font-weight: 500;
  }
  :hover {
    outline: 1px solid #0221fc;
  }
  //border-bottom: 1px solid black;
`;

const TopNav = styled.div`
  width: 100%;
  //height: 100%;
  display: flex;
  flex-direction: column;

  margin-top: 30px;
  align-items: center;
  flex: 1;
  // justify-content: center;
`;

const BottomNav = styled.div`
  width: 100%;
  //height: 100%;
  display: flex;
  flex-direction: column;

  padding-bottom: 100px;
  align-items: center;
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
  position: relative;
  z-index: -9000 !important;
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
    width: 80%;
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
  z-index: 100;
`;
