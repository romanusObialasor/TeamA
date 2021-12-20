import React from "react";
import styled from "styled-components";

const MembersCard = ({ name, image, onClick }) => {
  return (
    <Container>
      <Img src={image} />
      <Name>
        <i
          style={{
            fontWeight: "400",
            color: "blue",
          }}
        >
          Name:
        </i>
        {name}
      </Name>
      <Plus onClick={onClick}>+</Plus>
    </Container>
  );
};

export default MembersCard;

const Plus = styled.div`
  color: green;
  font-size: 25px;
  position: absolute;
  transition: 350ms;
  right: 5px;
  cursor: pointer;
  opacity: 0.5;
  :hover {
    opacity: 1;
  }
`;

const Container = styled.div`
  width: 200px;
  height: 150px;
  box-shadow: 2px 5px 5px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
  margin: 20px;
  position: relative;
`;

const Img = styled.img`
  height: 70px;
  width: 70px;
  border-radius: 35px;
  object-fit: cover;
`;

const Name = styled.div`
  font-weight: 600;
  width: 90%;
  margin-top: 30px;
`;
// const Name = styled.div``
// const Name = styled.div``
