import React from "react";
import styled from "styled-components";
import { AiOutlinePlus } from "react-icons/ai";
import img from "./mypix.jpg";
const AddMemberToProject = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Card>
            <Add>
              <AiOutlinePlus />
            </Add>
            <Image src={img} />
            <Name>Hackerthon Member</Name>
          </Card>
          <Card>
            <Add>
              <AiOutlinePlus />
            </Add>
            <Image src={img} />
            <Name>Hackerthon Member</Name>
          </Card>
          <Card>
            <Add>
              <AiOutlinePlus />
            </Add>
            <Image src={img} />
            <Name>Hackerthon Member</Name>
          </Card>
          <Card>
            <Add>
              <AiOutlinePlus />
            </Add>
            <Image src={img} />
            <Name>Hackerthon Member</Name>
          </Card>
          <Card>
            <Add>
              <AiOutlinePlus />
            </Add>
            <Image src={img} />
            <Name>Hackerthon Member</Name>
          </Card>
          <Card>
            <Add>
              <AiOutlinePlus />
            </Add>
            <Image src={img} />
            <Name>Hackerthon Member</Name>
          </Card>
          <Card>
            <Add>
              <AiOutlinePlus />
            </Add>
            <Image src={img} />
            <Name>Hackerthon Member</Name>
          </Card>
          <Card>
            <Add>
              <AiOutlinePlus />
            </Add>
            <Image src={img} />
            <Name>Hackerthon Member</Name>
          </Card>
        </Wrapper>
        <Button>Done</Button>
      </Container>
    </>
  );
};

export default AddMemberToProject;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  background-color: #f3f4f6;
  position: relative;
`;
const Wrapper = styled.div`
  width: 72%;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 100px 0px;

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

const Card = styled.div`
  margin: 10px;
  width: 250px;
  height: 275px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 21px;
  box-shadow: -1px -1px 1px rgba(0, 0, 0, 0.09), 1px 1px 1px rgba(0, 0, 0, 0.09);
  background-color: white;
  flex-direction: column;
  position: relative;
  transition: all 350ms;

  :hover {
    box-shadow: -1px -1px 1px grey, 1px 1px 1px grey;
    cursor: pointer;
  }
`;
const Add = styled.div`
  color: blue;
  font-size: 20px;
  position: absolute;
  top: 15px;
  right: 12px;
`;
const Image = styled.img`
  width: 144px;
  height: 144px;
  object-fit: cover;
  border-radius: 50%;
  border: 5px solid #f3f4f6;
  margin-top: 10px;
`;
const Name = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 10px;
  opacity: 0.6;
`;
const Button = styled.button`
  width: 120px;
  height: 60px;
  background-color: #0221fc;
  border: none;
  border-radius: 5px;
  transform: scale(1);
  transition: all 350ms;
  font-size: 18px;
  font-weight: 700;
  color: white;
  position: absolute;
  bottom: 30px;
  right: 40px;
  @media screen and (max-width: 480px) {
    right: 140px;
  }
  :hover {
    cursor: pointer;
    transform: scale(0.958);
  }
`;
