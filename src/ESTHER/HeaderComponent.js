import React from "react";
import styled from "styled-components";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

const HeaderComponent = ({ onChange, toggle }) => {
  return (
    <>
      {toggle ? (
        <Container>
          <Wrapper>
            <Logos>
              <MyLink to="/">
                <Logo src="/images/10.png" />
              </MyLink>
            </Logos>
            <ButtonHold>
              <MyLink to="/register">
                <Button> Register Your Company</Button>
              </MyLink>
              <MyLink to="/adminSign">
                <Button> Admin SignIn</Button>
              </MyLink>
              <MyLink>
                <Button> User SignUp</Button>
              </MyLink>
            </ButtonHold>
            <Icons>
              <AiOutlineMenu onClick={onChange} />
            </Icons>
          </Wrapper>
        </Container>
      ) : (
        <Container z>
          <Wrapper>
            <Logos>
              <MyLink to="/">
                <Logo src="/images/10.png" />
              </MyLink>
            </Logos>
            <ButtonHold>
              <MyLink to="/register">
                <Button> Register Your Company</Button>
              </MyLink>
              <MyLink to="/adminSign">
                <Button> Admin SignIn</Button>
              </MyLink>
              <MyLink to="/userSignup">
                <Button> User SignUp</Button>
              </MyLink>
            </ButtonHold>
            <Icons>
              <AiOutlineMenu onClick={onChange} />
            </Icons>
          </Wrapper>
        </Container>
      )}
    </>
  );
};

export default HeaderComponent;

const Nav = styled.div`
  z-index: 1000;
  position: relative;
  color: white;
`;

const Holder = styled.div`
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  right: 0;
  /* top: 0; */
`;

const MyLink = styled(Link)`
  text-decoration: none;
`;
const Icons = styled.div`
  display: none;
  @media screen and (max-width: 800px) {
    display: unset;
    height: 100%;
    display: flex;
    align-items: center;
    font-size: 30px;
    color: #1098ff;
    cursor: pointer;
  }
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1098ff;
  font-weight: 500;
  color: white;
  margin: 0 15px 0 15px;
  opacity: 0.9;
  transition: all 350ms;
  padding: 10px 7px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 13px;

  :hover {
    opacity: 1;
    outline: 1px solid #1098ff;
    color: #1098ff;
    background-color: white;
  }
`;
const ButtonHold = styled.div`
  display: flex;
  @media screen and (max-width: 800px) {
    display: none;
  }
`;
const Logos = styled.div`
  flex: 1;
  /* margin-left: 20px; */
  height: 45px;
  object-fit: contain;
`;
const Logo = styled.img`
  margin-left: 20px;
  height: 45px;
  object-fit: contain;
`;
const Wrapper = styled.div`
  height: 100%;
  width: 89%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* background-color: blue; */
`;
const Container = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  height: 70px;
  width: 100%;
  position: absolute;
  z-index: ${({ z }) => (z ? "1" : null)};
  top: 5px;
  /* background-color: #f5f7fc; */
`;
