import React from "react";
import styled from "styled-components";

const TaskCard = ({ title, description, deadline }) => {
  return (
    <Container>
      <Wrapper>
        <Top>
          <span>{title}</span>
        </Top>
        <Main>
          <span>{description}</span>
        </Main>
        <Images>
          <Img />
          <Img1 />
          <Img2 />
        </Images>
        <Bottom>
          <span>Deadline:</span>
          <div>{deadline}</div>
        </Bottom>
      </Wrapper>
    </Container>
  );
};

export default TaskCard;

const Container = styled.div`
  /* margin: auto; */
  background: white;
  width: 270px;
  height: 270px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

const Wrapper = styled.div`
  width: 90%;
  height: 85%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Top = styled.div`
  color: #0221cf;
  font-size: 17px;
  font-weight: 500;
`;

const Main = styled.div`
  flex: 0.7;
  opacity: 0.7;
`;

const Bottom = styled.div`
  display: flex;
  span {
    color: red;
    margin-right: 5px;
  }
`;

const Images = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 50px;
`;

const Img = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background: green;
  position: absolute;
`;
const Img1 = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background: red;
  position: absolute;
  left: 25px;
`;
const Img2 = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background: blue;
  position: absolute;
  left: 50px;
`;
