import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import HeaderComponent from "./HeaderComponent";
import MobileNav from "./MobileNav";
import Fade from "react-reveal/Fade";

const Landing = () => {
  const [toggle, setToggle] = useState(false);
  const onChange = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <HeaderComponent onChange={onChange} toggle={toggle} />
      <Fade when={toggle} right>
        <Div>
          <MobileNav onChange={onChange} />
        </Div>
      </Fade>
      {toggle ? (
        <Container p z>
          <Wrapper>
            <Write>
              <Headers>Build Projects Anywhere, Anytime with Simple</Headers>
              <Texts>
                {" "}
                Simple allows Organization to Build projects, delegate task,
                track project and smash objectives seamlessly.{" "}
              </Texts>
              <Start to="userSignUp">Get Started </Start>
            </Write>
            <Picture>
              <Vect src="/images/land.png" />
            </Picture>
          </Wrapper>
        </Container>
      ) : (
        <Container>
          <Wrapper>
            <Write>
              <Headers>Build Projects Anywhere, Anytime with Simple</Headers>
              <Texts>
                {" "}
                Simple allows Organization to Build projects, delegate task,
                track project and smash objectives seamlessly.{" "}
              </Texts>
              <Start to="userSignUp">Get Started </Start>
            </Write>
            <Picture>
              <Vect src="/images/land.png" />
            </Picture>
          </Wrapper>
        </Container>
      )}
    </>
  );
};

export default Landing;

const Div = styled.div``;

const Start = styled(Link)`
  text-decoration: none;
  margin-top: 20px;
  font-size: 18px;
  height: 60px;
  width: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background-color: #1098ff;
  font-weight: 500;
  color: white;
  opacity: 0.9;
  transition: all 350ms;
  cursor: pointer;
  :hover {
    transform: scale(1.062);
    opacity: 1;
    border: 1px solid #1098ff;
    color: #1098ff;
    background-color: white;
  }
  @media screen and (max-width: 768px) {
    /* position: absolute; */
    /* z-index: -1; */
  }
`;
const Vect = styled.img`
  height: 100%;
  width: 100%;
  display: unset;
  @media screen and (max-width: 800px) {
    display: none;
  }
`;
const Headers = styled.div`
  font-size: 50px;
  font-weight: bold;
  font-family: red hat display;
  @media screen and (max-width: 800px) {
    font-size: 40px;
  }
`;
const Texts = styled.div`
  padding-top: 30px;
  font-size: 20px;
  font-weight: 450;
  padding-bottom: 30px;
  text-align: justify;
`;
const Write = styled.div`
  width: 45%;
  height: 100%;
  display: flex;
  /* justify-content: center; */
  justify-content: center;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    justify-content: center;
    align-items: center;
    width: 100%;
    text-align: center;
  }
`;
const Picture = styled.div`
  width: 45%;
  height: 100%;
  object-fit: contain;
  @media screen and (max-width: 800px) {
    display: none;
  }
`;
const Wrapper = styled.div`
  width: 89%;
  height: 90%;
  display: flex;
  align-items: center;

  justify-content: space-between;
  @media screen and (max-width: 768px) {
    justify-content: center;
    text-align: center;
  }
`;

const Container = styled.div`
  padding-top: 70px;
  height: 92vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f7fc;
  flex-wrap: wrap;
  position: ${({ p }) => (p ? "relative" : null)};
  z-index: ${({ z }) => (z ? "-1" : null)};
  @media screen and (max-width: 800px) {
    background: rgba(0, 0, 0, 0.3);
  }
`;
