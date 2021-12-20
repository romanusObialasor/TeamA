import React, { useContext } from "react";
import styled from "styled-components";
import { AiFillHome } from "react-icons/ai";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
// import { GoGraph } from "react-icons/go";
import { BsNewspaper } from "react-icons/bs";
// import { CloseOutlined } from "@ant-design/icons";
const Sly = ({ isOpen, toggle }) => {
  return (
    <>
      <Container isOpen={isOpen}>
        <Warpper>
          <Close>
            {" "}
            {/* <CloseOutlined onClick={toggle} /> */}
            {/* <div onClick={toggle}>hello</div> */}
          </Close>
          <a>
            <span>Register</span>
          </a>
          <a style={{ marginLeft: "39px" }}>
            <span>Admin Signup</span>
          </a>
          <a style={{ marginLeft: "28px" }}>
            <span>User Signup</span>
          </a>
        </Warpper>
      </Container>
    </>
  );
};

export default Sly;
const Container = styled.div`
  @media screen and (min-width: 768px) {
    /* color: red;
    display: flex;
    justify-content: center; */
    display: none;
    height: 100vh;
  }
  margin-top: 72px;
  position: fixed;
  align-items: center;
  background-color: #302e2ed9;
  z-index: 9999;
  display: flex;
  justify-content: flex-end;
  transition: 0.4s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;
const Warpper = styled.div`
  height: 100vh;
  /* width: 250px; */
  width:210px;
  background-color: #1c253c;
  border-radius: 0px 0px 0px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: -20px;
  a {
    font-size: 20px;
    margin: 40px;
    margin-left: 7px;
    color: white;
    text-transform: uppercase;
    display:flex;
    justify-content: center;
    align-items: center;
    &:hover {
      color: gray;
    }
    span {
      font-weight: bold;
      text-transform: uppercase;
      font-size: 11px;
      letter-spacing: 1.1px;
      position: relative;
      &:after {
        height: 3px;
        background-color:white;
        content: "";
        position: absolute;
       
        right: 0;
        left: 20px;
        bottom: 20px;
        opacity: 0;
        transform:scaleX(1)
        transform-origin: center left;
      transition: all 350ms cubic-bezier(0.34, 0.44, 0.96, 0.47) 0s;
      }
    }
    &:hover{
      span{
        opacity:1;
       
      }
      span:after{
        opacity: 1;
      transform: scaleX(1.06)
    
      }
    }
  }
`;
const Close = styled.div`
  color: white;
  font-size: 20px;

  margin-left: 170px;
  &:hover {
    color: purple;
  }
`;
