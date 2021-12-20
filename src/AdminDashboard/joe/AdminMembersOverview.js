import React, { useState, useEffect } from "react";
import { AiFillDelete } from "react-icons/ai";
import styled from "styled-components";
// import AdminNav from "./AdminNav";
import AdminNav from "../AdminNav";
import HeaderTop from "../HeaderTop";
import MobileNav from "../MobileNav";
import Fade from "react-reveal/Fade";
import { AiOutlineMenu } from "react-icons/ai";
import { app } from "../../base";

const AdminMembers = () => {
  const [data, setData] = useState([]);
  const [toggle, setToggle] = useState(false);

  const onToggle = () => {
    setToggle(!toggle);
  };

  const fetchData = async () => {
    const authUser = await app.auth().currentUser;

    if (authUser) {
      await app
        .firestore()
        .collection("Register")
        .doc(authUser.uid)
        .collection("user")
        .onSnapshot((snapshot) => {
          const item = [];
          snapshot.forEach((doc) => {
            item.push({ ...doc.data(), id: doc.id });
          });
          setData(item);
        });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div style={{ display: "flex" }}>
      {/* <AdminNav /> */}
      <Div>
        <AdminNav />
      </Div>
      {toggle ? null : (
        <Icon>
          <AiOutlineMenu onClick={onToggle} />
        </Icon>
      )}
      <Fade when={toggle} left>
        <Mobile>
          <MobileNav toggle={toggle} onToggle={onToggle} />
        </Mobile>
      </Fade>
      <Container>
        {" "}
        <div
          style={{
            width: "100%",
          }}
        >
          <HeaderTop />
        </div>
        <Wrapper>
          {" "}
          {data?.map((props) => (
            <Holder>
              <Image src="/images/10.png" />
              <Name>Name</Name>
              <Delete />
            </Holder>
          ))}
        </Wrapper>
      </Container>
    </div>
  );
};

export default AdminMembers;
const Icon = styled.div`
  top: 20px;
  position: absolute;
  left: 10px;
  font-size: 30px;
  cursor: pointer;
  z-index: 1000;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const Mobile = styled.div``;

const Div = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  flex-direction: column;
`;
const Wrapper = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Holder = styled.div`
  width: 400px;
  height: 60px;
  margin: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(0, 0, 0, 0.2);
  padding: 10px;
  border-radius: 5px;
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  object-fit: cover;
`;

const Name = styled.div`
  width: 300px;
  font-size: 16px;
  font-weight: 600;
`;

const Delete = styled(AiFillDelete)`
  color: red;
  opacity: 0.7;
  cursor: pointer;
  :hover {
    opacity: 1;
  }
`;
