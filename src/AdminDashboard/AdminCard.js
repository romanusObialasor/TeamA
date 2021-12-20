import React from "react";
import styled from "styled-components";
import { AiOutlinePaperClip } from "react-icons/ai";
import { Link } from "react-router-dom";
import moment from "moment";

const AdminCard = ({ to, title, description, deadline }) => {
  return (
    <Container to={to}>
      <Wrapper>
        <Top>
          <Title>
            <div>.</div>
            {title}
          </Title>
          <AiOutlinePaperClip cursor="pointer" />
        </Top>
        <Desciption>{description} </Desciption>
        <Dead>
          <Inner>Deadline:</Inner> {deadline}
        </Dead>
      </Wrapper>
    </Container>
  );
};

export default AdminCard;

const Inner = styled.div`
  color: red;
  font-size: 14px;
  margin-right: 5px;
`;

const Dead = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: -20px;
  align-items: center;
  color: blue;
`;

const Container = styled(Link)`
  background: white;
  width: 270px;
  margin: 20px;
  height: 200px;
  min-height: 200px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  cursor: pointer;
  align-items: center;
  transform: scale(1);
  box-shadow: 2px 5px 5px rgba(0, 0, 0, 0.2);
  transition: 350ms;
  text-decoration: none;
  :hover {
    transform: scale(1.05);
  }
  /* padding-top: 10px;
  padding-bottom: 10px; */
`;

const Wrapper = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  /* justify-content: space-between; */
  flex-direction: column;
  cursor: pointer;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  color: blue;
  div {
    margin-top: -20px;
    font-size: 30px;
    margin-right: 3px;
    color: green;
  }
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Desciption = styled.div`
  height: auto;
  min-height: 100px;
  font-size: 14px;
  color: grey;
  margin-top: 20px;
`;
