import React from "react";
import styled from "styled-components";
import HeaderNav from "../Header/Header";
import HeaderTop from "./HeaderTop";
import { Link } from "react-router-dom";
// import { GiHamburgerMenu } from "react-icons/gi";
import MobileNav from "./MobileNav";

const AdminOverview = () => {
  return (
    <Container>
      <HeaderNav />
      <div>
        <MobileNav />
      </div>
      <Wrapper>
        <Head>
          <HeaderTop />
        </Head>
        <Bottom>
          <MyLink to="/admintask">
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
          <MyLink to="/admintask">
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
          <MyLink to="/admintask">
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
          <MyLink to="/admintask">
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
          <MyLink to="/admintask">
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

export default AdminOverview;

const Head = styled.div`
  /* background: pink; */
  width: 100%;
`;

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

const Card = styled.div`
  width: 250px;
  height: 200px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 2px 1px 5px rgba(0, 0, 0, 0.3);
  display: flex;
  font-size: 14px;
  flex-direction: column;
  margin-top: 20px;
  margin-right: 50px;
  cursor: pointer;
  transition: 350ms;
  transform: scale(1);
  :hover {
    transform: scale(1.03);
  }
`;

const Bottom = styled.div`
  width: 97%;
  //margin: 16px;
  display: flex;
  //background-color: red;
  margin-right: -28px;
  //justify-content: center;
  flex-wrap: wrap;
  padding-top: 50px;
  @media screen and (max-width: 768px) {
    //width: 100%;
    display: flex;
    margin-right: 0px;
    justify-content: center;
  }
`;

const Container = styled.div`
  min-height: 100vh;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 768px) {
    position: relative;
  }
  //padding-top: 50px;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  //padding-top: 20px;
  //align-items: center;
  flex-direction: column;
`;
