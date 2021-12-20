import React from "react";
import styled from "styled-components";
import { AiOutlinePaperClip } from "react-icons/ai";

const TodoCard = ({ status, clr, title, description, deadline, member }) => {
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
        <Desciption>{description} </Desciption>
        <Dead>
          <Inner>Deadline:</Inner> {deadline}
        </Dead>
        {member?.map((props) => (
          <Images>
            <Image src={props.image} />
            <Imager src="/images/3.jpg" />
          </Images>
        ))}
      </Wrapper>
      <Status clr={clr}>{status}</Status>
    </Container>
  );
};

export default TodoCard;

const Inner = styled.div`
  color: red;
  font-size: 14px;
  margin-right: 5px;
`;

const Dead = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 30px;
`;

const Status = styled.div`
  position: absolute;
  right: 10px;
  bottom: 10px;
  color: ${({ clr }) => (clr ? "red" : "green")};
  cursor: pointer;
  opacity: 0.8;
  transition: 350ms;
  :hover {
    opacity: 1;
  }
`;

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
  padding-top: 10px;
  padding-bottom: 10px;
  position: relative;
`;

const Wrapper = styled.div`
  width: 90%;
  height: auto;
  min-height: 100%;
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
  min-height: 100px;
  font-size: 14px;
  color: grey;
`;
const Images = styled.div`
  width: 100%;
  height: 40px;
  position: relative;
`;

const Image = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 20px;
  position: absolute;
  object-fit: cover;
`;

const Imager = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 20px;
  position: absolute;
  left: 25px;
  object-fit: cover;
`;
