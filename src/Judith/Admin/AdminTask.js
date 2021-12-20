import React from "react";
import styled from "styled-components";
import HeaderNav from "./Header/Header";
import HeaderTop from "./Overview/HeaderTop";
import MobileNav from "./Overview/MobileNav";

const AdminTask = ({ tog }) => {
  return (
    <Container>
      <HeaderNav />
      <div>
        <MobileNav />
      </div>
      <Wrapper tog={tog}>
        <HeaderTop />
        <Main>
          <Head>Head</Head>
          <Task>
            <Wrap>
              <Top>
                <div>task</div>
                <span>4</span>
              </Top>
              <Add>+</Add>
            </Wrap>
          </Task>
        </Main>
      </Wrapper>
    </Container>
  );
};

export default AdminTask;

const Add = styled.div`
  width: 85%;
  background: #1c253c;
  height: 35px;
  margin-top: 15px;
  border-radius: 5px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 20px;
  /* cursor: pointer; */
  transition: 350ms;
  /* pointer-events: ${({ tog }) => (tog ? "none" : "auto")}; */
  opacity: 0.5;
  :hover {
    opacity: 1;
  }
  @media screen and (max-width: 768px) {
    /* pointer-events: ${({ tog }) => (tog ? "none" : "auto")}; */
  }
`;

const Top = styled.div`
  display: flex;
  width: 85%;
  margin-top: 10px;
  justify-content: space-between;
  font-weight: 500;
  font-size: 20px;
  opacity: 0.8;
`;

const Avatar = styled.img``;

const Details = styled.div``;

const Holder = styled.div``;

const TopHeader = styled.div`
  width: 100%;
  background-color: white;
  height: 100px;
`;

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow-y: scroll;
  /* z-index: 900000 !important; */
  pointer-events: ${({ toggle }) => (toggle ? "none" : "auto")};
`;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #f3f4f6;
  display: flex;
  height: auto;
`;

const Main = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Head = styled.div`
  font-size: 30px;
  height: 100px;
  display: flex;
  align-items: center;
  font-weight: 500;
`;

const Task = styled.div`
  /* height: 80%; */
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Wrap = styled.div`
  width: 310px;
  height: 500px;
  margin-left: 10px;
  margin-bottom: 10px;
  margin-right: 10px;
  background: white;
  border-radius: 5px;
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  flex-direction: column;
`;
