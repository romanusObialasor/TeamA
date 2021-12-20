import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { AiOutlineStop } from "react-icons/ai";

const MobileNav = ({ onChange }) => {
  return (
    <Container>
      <Wrapp>
        <Cancel onClick={onChange}>
          <AiOutlineStop />
        </Cancel>
        <Hold>
          <Button to="/register">Register Your Company</Button>
          <Button to="/adminSign">Admin SignIn</Button>
          <Button to="/userSignup">Sign up</Button>
          <Button to="/userSignup">Sign In</Button>
        </Hold>
        <LogoHolder>
          <Logo src="/images/10.png" />
        </LogoHolder>
      </Wrapp>
    </Container>
  );
};

export default MobileNav;

const Cancel = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 30px;
  color: red;
`;

const LogoHolder = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Hold = styled.div`
  margin-left: 10px;
`;

const Logo = styled.img`
  height: 70px;
`;

const Button = styled(Link)`
  text-decoration: none;
  font-size: 18px;
  margin-top: 30px;
  width: 90%;
  background: rgba(0, 0, 0, 0.1);
  height: 40px;
  display: flex;
  align-items: center;
  color: #1098ff;
  padding-left: 5px;
  border-radius: 5px;
`;

const Wrapp = styled.div`
  width: 300px;
  height: 100%;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  /* padding-left: 10px; */
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  z-index: 10000;
  display: flex;
  justify-content: flex-end;
`;
