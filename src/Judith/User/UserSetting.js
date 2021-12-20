import React, { useState } from "react";
import styled from "styled-components";

const UserSetting = () => {
  const [text, settext] = useState("");

  const add = (e) => {
    settext(e);
    console.log(e);
  };
  return (
    <Content>
      <Card>
        <Avatar />
        <Mother>
          <Button>Change Logo</Button>
          <Lab>
            <Input onClick={add} placeholder="Change Company's Name" />
          </Lab>
          <Buttons>Change</Buttons>
        </Mother>
      </Card>
    </Content>
  );
};

export default UserSetting;

const Lab = styled.label`
  width: 80%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 10px;
  border: #707070 solid 1px;
  padding-left: 20px;
`;

const Button = styled.button`
  width: 40%;
  height: 50px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 17px;
  font-weight: bolder;
  color: #928e8e;
  border-radius: 14px;
  border: #707070 solid 1px;
  transition: all 500ms;
  :hover {
    cursor: pointer;
    box-shadow: 0px 3px 10px;
  }

  @media screen and (min-width: 220px) and (max-width: 428px) {
    font-size: 15px;
    border-radius: 9px;
  }
`;

const Buttons = styled.button`
  width: 30%;
  height: 50px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 17px;
  font-weight: bolder;
  color: #928e8e;
  border-radius: 9px;
  border: #707070 solid 1px;
  background-color: lightgrey;
  color: black;
  transition: all 900ms;
  :hover {
    cursor: pointer;
    box-shadow: 0px 3px 10px;
    background-color: red;
    color: white;
  }

  @media screen and (min-width: 220px) and (max-width: 428px) {
    font-size: 15px;
    border-radius: 5px;
  }
`;

const Mother = styled.div`
  width: 100%;
  height: auto;
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;

  @media screen and (min-width: 220px) and (max-width: 428px) {
    height: 120px;
  }
`;

const Avatar = styled.div`
  width: 200px;
  height: 200px;
  background-color: #ffffff;
  box-shadow: 0px 3px 10px;
  border-radius: 100%;
  margin-top: 20px;

  @media screen and (min-width: 220px) and (max-width: 428px) {
    width: 150px;
    height: 150px;
    background-color: #ffffff;
    box-shadow: 0px 3px 10px;
    border-radius: 100%;
    margin-top: 20px;
  }
`;

const Card = styled.div`
  width: 400px;
  height: auto;
  background-color: #d4d1d1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 14px;
  box-shadow: 10px 10px 20px white;
  border: none;
  @media screen and (min-width: 220px) and (max-width: 428px) {
    width: 300px;
    height: auto;
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-shadow: 4px 4px 10px;
    border: none;
  }
`;

const Content = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #d8d8d8;
  display: flex;
  justify-content: center;
  align-items: center;
`;
