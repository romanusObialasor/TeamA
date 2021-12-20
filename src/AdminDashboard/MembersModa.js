import React from "react";
import styled from "styled-components";
import { addMember } from "../Global/Reducer";
import MembersCard from "./MembersCard";
import { app } from "../base";
import { useDispatch, useSelector } from "react-redux";
const MembersModa = ({ onToggle }) => {
  const [data, setData] = React.useState([]);

  const file = useSelector((state) => state.myReducer.members);

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

  const empty = () => {
    file.length = 0;
  };

  React.useEffect(() => {
    fetchData();
  }, []);
  const dispatch = useDispatch();

  return (
    <Container>
      <Main>
        <div>
          Numbers of members added: <span>{file.length}</span>
        </div>
        <Top>All Members</Top>

        <Holder>
          <MembersCard
            image="/images/10.png"
            name="Romanus"
            onClick={() => {
              dispatch(addMember());
            }}
          />
        </Holder>
        <Done onClick={onToggle}>Done</Done>
      </Main>
      <Plus />
    </Container>
  );
};

export default MembersModa;

const Done = styled.div`
  /* font-size: 40px; */
  position: absolute;
  transition: 350ms;
  left: 20px;
  bottom: 10px;
  cursor: pointer;
  color: black;
  width: 80px;
  height: 35px;
  background: green;
  color: white;
  border-radius: 5px;
  opacity: 0.8;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    opacity: 1;
  }
`;
const Plus = styled.div`
  position: absolute;
  right: 20px;
  top: 10px;
  opacity: 0.7;
  width: 50px;
  height: 50px;
  background: black;
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  z-index: 1;
  align-items: center;
`;

const Main = styled.div`
  color: white;
  z-index: 1;
  width: 70%;
  height: 80%;
  background: white;
  color: black;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  flex-direction: column;
`;

const Top = styled.div`
  flex: 0.1;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 20px;
`;

const Holder = styled.div`
  flex: 0.8;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  overflow-y: scroll;
`;
// const Container = styled.div``;
// const Container = styled.div``;
