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
  @media screen and (max-width: 768px) {
    margin-left: 10px;
    width: 35px;
    height: 35px;
    border-radius: 100%;
  }
`;

const Button = styled.button`
  width: 78px;
  height: 28px;
  border-radius: 20px;
  background-color: #1c253c;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  font-weight: bold;
  cursor: pointer;
  :hover {
    color: red;
    background-color: white;
    border: 2px solid #1c253c;
  }
`;

const Details = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex: 1;
  span {
    margin-left: 5px;
    color: black;
    font-weight: bold;
    font-size: 20px;
  }
`;

const TopNav = styled.div`
  width: 80%;
  //background-color: red;
  display: flex;
  align-items: center;
`;

const Top = styled.div`
  width: 100%;
  display: flex;
  background-color: white;
  margin-top: 0;
  height: 100px;
  justify-content: center;
`;
