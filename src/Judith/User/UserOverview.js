import React from "react";
import styled from "styled-components";
import HeaderNav from "../Header/Header";

import { Link } from "react-router-dom";
// import { GiHamburgerMenu } from "react-icons/gi";
import MobileNav from "./MobileNav";

const UserOverview = () => {
  return (
    <Container>
      <HeaderNav />
      <div>
        <MobileNav />
      </div>
      <Wrapper>
        <Top>
          <CompanyLogo />
          <Name>Judith Ugonna</Name>
        </Top>
        <Header>My Projects</Header>
        <Bottom>
          <MyLink to="/adminproject">
            <Card>
              <TextTop>
                <div>.</div>
                Building center
              </TextTop>
              <TextArea>jhdfhdj</TextArea>
              <Date>
                Deadline:
                <span>dhdh</span>
              </Date>
            </Card>
          </MyLink>
          <MyLink to="/adminproject">
            <Card>
              <TextTop>
                <div>.</div>
                Building center
              </TextTop>
              <TextArea>jhdfhdj</TextArea>
              <Date>
                Deadline:
                <span>dhdh</span>
              </Date>
            </Card>
          </MyLink>
          <MyLink to="/adminproject">
            <Card>
              <TextTop>
                <div>.</div>
                Building center
              </TextTop>
              <TextArea>jhdfhdj</TextArea>
              <Date>
                Deadline:
                <span>dhdh</span>
              </Date>
            </Card>
          </MyLink>
          <MyLink to="/adminproject">
            <Card>
              <TextTop>
                <div>.</div>
                Building center
              </TextTop>
              <TextArea>jhdfhdj</TextArea>
              <Date>
                Deadline:
                <span>dhdh</span>
              </Date>
            </Card>
          </MyLink>
          <MyLink to="/adminproject">
            <Card>
              <TextTop>
                <div>.</div>
                Building center
              </TextTop>
              <TextArea>jhdfhdj</TextArea>
              <Date>
                Deadline:
                <span>dhdh</span>
              </Date>
            </Card>
          </MyLink>
        </Bottom>
      </Wrapper>
    </Container>
  );
};

export default UserOverview;

// const Nav = styled.div`
//   width: 300px;
//   height: 100%;
//   height: 350px;
//   background-color: red;
//   /* position: absolute;
//   top: 20px; */
// `;

// const Icon = styled(GiHamburgerMenu)`
//   display: none;
//   @media screen and (max-width: 768px) {
//     //width: 100%;
//     display: flex;
//     font-weight: bold;
//     font-size: 25px;
//     position: fixed;
//     z-index: 9;
//     padding: 15px;
//   }
// `;

// const IconHolder = styled.div`
//   display: none;
//   @media screen and (max-width: 768px) {
//     height: 50px;
//     position: absolute;
//     z-index: 9;
//     display: flex;
//     //background-color: red;
//     width: 100%;
//     //margin-left: 30px;
//     //padding: 10px;
//     cursor: pointer;
//   }
// `;

const MyLink = styled(Link)`
  text-decoration: none;
`;

const Date = styled.div`
  margin-left: 10px;
  margin-bottom: 10px;
  color: red;
  font-weight: bold;
  span {
    color: blue;
    margin-left: 10px;
    font-weight: normal;
  }
`;

const TextArea = styled.div`
  width: 100%;
  display: flex;
  margin: 0 10px;
  flex: 1;
  color: black;
  //justify-content: center;
`;

const TextTop = styled.div`
  width: 100%;
  margin-top: 10px;
  height: 40px;
  display: flex;
  align-items: center;
  color: blue;
  // justify-content: center;
  // background-color: red;

  div {
    height: 100%;
    width: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: red;
    font-size: 40px;
    margin-top: -25px;
  }
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 30px;
  font-weight: bold;
  font-size: 25px;
  color: black;
`;

const Card = styled.div`
  width: 250px;
  height: 200px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 2px 1px 5px rgba(0, 0, 0, 0.3);
  display: flex;
  font-size: 14px;
  flex-direction: column;
  margin: 7px;
  cursor: pointer;
  transition: 350ms;
  transform: scale(1);
  :hover {
    transform: scale(1.03);
  }
`;

const Bottom = styled.div`
  width: 97%;
  margin: 16px;
  display: flex;
  //background-color: red;
  margin-left: 15px;
  //justify-content: center;
  flex-wrap: wrap;
  @media screen and (max-width: 768px) {
    //width: 100%;
    display: flex;
    margin-left: 40px;
    justify-content: center;
  }
`;

const Name = styled.div`
  //font-weight: bold;
  color: black;
  margin-top: 5px;
`;

const CompanyLogo = styled.img`
  width: 80px;
  height: 60px;
  border-radius: 5px;
  border: 1px solid lavender;
`;

const Top = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 20px;
`;

const Container = styled.div`
  min-height: 100vh;
  height: 100%;
  width: 100%;
  display: flex;
  background-color: #e2f0f3;
  justify-content: center;
  @media screen abd (max-width: 768px) {
    position: relative;
  }
  //padding-top: 50px;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding-top: 20px;
  //align-items: center;
  flex-direction: column;
`;
