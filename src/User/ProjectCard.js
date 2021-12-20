import React from "react";
import styled from "styled-components";
import { AiOutlinePaperClip } from "react-icons/ai";

const ProjectCard = ({ title, description }) => {
  return (
    <Container>
      <Wrapper>
        <Top>
          <Title>
            <div>.</div>
            {title}
          </Title>
          <AiOutlinePaperClip cursor="pointer" />
        </Top>
        <Desciption>{description}</Desciption>
      </Wrapper>
    </Container>
  );
};

export default ProjectCard;

const Container = styled.div`
  background: white;
  width: 270px;
  margin-top: 10px;
  height: auto;
  min-height: 200px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 2px 5px 5px rgba(0, 0, 0, 0.2);
  /* padding-top: 10px;
  padding-bottom: 10px; */
`;

const Wrapper = styled.div`
  width: 90%;
  height: 170px;
  min-height: auto;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
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
  min-height: 130px;
  font-size: 14px;
  color: grey;
`;
