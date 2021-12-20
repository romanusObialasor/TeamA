import React, { useState } from "react";
import styled from "styled-components";
import img from "./login.png";
import img2 from "./mobile.png";
import HeaderComponent from "../HeaderComponent";
import MobileNav from "../MobileNav";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import { app } from "../../base";
import firebase from "firebase";
import { useHistory } from "react-router-dom";

const AdminSign = () => {
  const [image, setImage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const history = useHistory();

  const signIn = async () => {
    try {
      await app.auth().signInWithEmailAndPassword(email, password);
      setEmail("");
      setPassword("");
      setImage(image);
    } catch (err) {
      setError(err.message);
    }
    history.push("/admin");
  };
  const [toggle, setToggle] = useState(false);
  const onChange = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <HeaderComponent onChange={onChange} toggle={toggle} />

      <Fade when={toggle} right>
        <Div>
          <MobileNav onChange={onChange} />
        </Div>
      </Fade>
      <Content>
        <Image src={img2} />
        <Main>
          {toggle ? (
            <Card z>
              <Head>Sign In as an admin</Head>
              <Types>
                <Type>
                  <span>Company's email</span>
                  <Input
                    placeholder="Simple@gmail.com"
                    type="text"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </Type>
                <Type>
                  <span>Enter password</span>
                  <Input
                    placeholder="6+ characters"
                    type="password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </Type>

                <Buttons onClick={signIn}>Sign In</Buttons>
              </Types>
              <Auth>
                Don't have a registered company?{" "}
                <MyLink to="/register">
                  <span>Register</span>
                </MyLink>
              </Auth>
            </Card>
          ) : (
            <Card>
              <Head>Sign In as an admin</Head>
              <Types>
                <Type>
                  <span>Company's email</span>
                  <Input
                    placeholder="Simple@gmail.com"
                    type="text"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </Type>
                <Type>
                  <span>Enter password</span>
                  <Input
                    placeholder="6+ characters"
                    type="password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </Type>
                {error === "" ? null : (
                  <div
                    style={{
                      marginBottom: "-20px",
                      marginTop: "10px",
                      color: "red",
                      textAlign: "center",
                    }}
                  >
                    {error}
                  </div>
                )}
                <Buttons onClick={signIn}>Sign In</Buttons>
              </Types>
              <Auth>
                Don't have a registered company?{" "}
                <MyLink to="/register">
                  <span>Register</span>
                </MyLink>
              </Auth>
            </Card>
          )}
        </Main>
        <Image1 src={img} />
      </Content>
    </>
  );
};

export default AdminSign;

const Div = styled.div``;

const MyLink = styled(Link)`
  text-decoration: none;
`;

const Auth = styled.div`
  margin-top: 15px;
  color: rgba(0, 0, 0, 0.8);
  @media screen and (min-width: 250px) and (max-width: 428px) {
    max-width: 270px;
    text-align: center;
  }
  span {
    cursor: pointer;
    color: #28a2ff;
  }
`;

const Head = styled.div`
  /* margin-top: -20px; */
  width: 100%;
  display: flex;
  justify-content: center;
  height: 60px;
  font-size: 20px;
  font-weight: 600;
`;

const Input = styled.input`
  width: 300px;
  height: 40px;
  padding-left: 10px;
  border-radius: 5px;
  outline: none;
  border: none;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.3);

  ::placeholder {
    color: rgba(0, 0, 0, 0.3);
  }
  @media screen and (min-width: 250px) and (max-width: 428px) {
    width: 270px;
  }
`;

const Type = styled.div`
  /* height: 20%; */
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-top: 20px;
  color: rgba(0, 0, 0, 0.5);
  span {
    margin-bottom: 5px;
  }
`;

const Types = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-items: center;
`;

const Buttons = styled.div`
  background-color: #28a2ff;
  border-radius: 5px;
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  transition: all 350ms;
  cursor: pointer;
  padding: 10px 20px;

  :hover {
    background-color: transparent;
    outline: 1px solid #28a2ff;
    color: #28a2ff;
  }
`;

const Card = styled.div`
  /* margin-top: 70px; */
  width: 80%;
  height: 100%;
  background-color: white;
  border-radius: 20px 20px 0 0;
  border: none;
  box-shadow: 0px 0px 10px lightgray;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  flex-direction: column;
  z-index: ${({ z }) => (z ? "-1" : null)};
`;

const Main = styled.div`
  width: 500px;
  min-width: 300px;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const Content = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const Image = styled.img`
  position: absolute;
  left: 0;
  height: 50%;
  z-index: -1;
  @media screen and (min-width: 250px) and (max-width: 428px) {
    display: none;
  }
`;

const Image1 = styled.img`
  position: absolute;
  right: 0;
  height: 50%;
  z-index: -1;
  @media screen and (min-width: 250px) and (max-width: 428px) {
    display: none;
  }
`;
