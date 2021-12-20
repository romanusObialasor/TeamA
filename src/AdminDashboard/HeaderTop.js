import React from "react";
import styled from "styled-components";

const HeaderTop = () => {
  return (
    <div>
      <Top>
        <TopNav>
          <Details>
            <Image />
            <span>Welcome back, Admin!</span>
          </Details>
          <Button>Log Out</Button>
        </TopNav>
      </Top>
    </div>
  );
};

export default HeaderTop;

const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  border: 1px solid grey;
  margin-right: 10px;
`;

const Button = styled.button`
  padding: 10px 15px;
  border-radius: 5px;
  background-color: #1c253c;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  font-weight: bold;
  cursor: pointer;
  transition: all 350ms;
  :hover {
    color: black;
    background-color: white;
    outline: 2px solid #1c253c;
  }
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  span {
    margin-left: 10px;
    color: black;
    font-weight: bold;
    font-size: 20px;
    @media screen and (max-width: 768px) {
      display: none;
    }
  }
`;

const TopNav = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  /* @media screen and (max-width: 768px) {
    width: unset;
  } */
`;

const Top = styled.div`
  width: 100%;
  display: flex;
  background-color: white;
  margin-top: 0;
  height: 100px;
  justify-content: center;
  z-index: 1;
`;
