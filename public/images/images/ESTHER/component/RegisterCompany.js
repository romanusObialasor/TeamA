import React,{useState,useEffect} from "react";
import styled from "styled-components";
import img from "./login.png";
import img2 from "./mobile.png";
// import HeaderComponent from "../Landing/HeaderComponent";
import { Link } from "react-router-dom";
import {app} from "../../base"
import firebase from "firebase";
import { useHistory } from "react-router";

const Setting = () => {

  const history = useHistory();
  const [cName, setCName] = useState("");
  const [cEmail, setCEmail] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [err, setErr] = useState("");
  const [cLogo, setCLogo] = useState("/images/10.png");
  const [percent, setPercent]  = useState("")
  const [image, setImage] = useState("")
  const displayImage = async (e) => {
    const file = e.target.files[0];
    const save = URL.createObjectURL(file)
    const fileRef = app.storage().ref();
    setImage(save)
  
    const storageRef = fileRef.child("userAvatar/" + file.name).put(file);

    storageRef.on(
      firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) => {
        const counted = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setPercent(Math.floor(counted));
      },
      (err) => console.log(err.message),
      () => {
        storageRef.snapshot.ref.getDownloadURL().then((URL) => {
          setCLogo(URL);
        });
      }
    );
  };
  const RegisterCom = async () => {
    try {
      const authUser = await app
        .auth("Romanus")
        .createUserWithEmailAndPassword(cEmail, cPassword);
      console.log(authUser);

      if (authUser) {
        await app
          .firestore()
          .collection("Register")
          .doc(authUser.user.uid)
          .set({
            cName: cName,
            cLogo: cLogo,
            cKey: authUser.user.uid,
            cEmail: cEmail,
            time: firebase.firestore.FieldValue.serverTimestamp(),
          });
      }
    } catch (error) {
      setErr(error.message);
    }
    // history.push("/admin");
    console.log("company registered")
  }; 
  return (
    <>
      {/* <HeaderComponent /> */}
      <Content>
        <Image src={img2} />
        <Main>
          <Logo>
            <LogoUpload src={image} />
          </Logo>
          <Card>
            <Head>Register Your Company</Head>
            <Clicks>
              <Buttone   onChange={ displayImage} htmlFor="img">upload company's logo</Buttone>
              <Inputer
                 id="img"
                 type="file"
                 style={{
                   display: "none",
                 }}
               
                />
                
            </Clicks>
            <Types>
              <Type>
                <span>Company's name</span>
                <Input placeholder="Simple Co" 
                 type="text"
                 placeholder="Enter Name"
                 value={cName}
                 onChange={(e) => {
                   setCName(e.target.value);
                 }}
                
                />
              </Type>
              <Type>
                <span>Company's email</span>
                <Input placeholder="Simple@gmail.com"
                type="text"
               
                value={cEmail}
                onChange={(e) => {
                  setCEmail(e.target.value);
                }}
                />
              </Type>
              <Type>
                <span>Set Password</span>
                <Input placeholder="6+ characters" 
                 type="password"
             
                 value={cPassword}
                 onChange={(e) => {
                   setCPassword(e.target.value);
                 }}
                />
              </Type>
              <Buttons onClick={RegisterCom}>Register</Buttons>
            </Types>
            <Auth>
              Already registered your company?{" "}
              <MyLink to="/adminSign">
                <span>Sign In</span>
              </MyLink>
            </Auth>
          </Card>
        </Main>
        <Image1 src={img} />
      </Content>
    </>
  );
};

export default Setting;


const Inputer = styled.input`
  width: 250px;
  height: 30px;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  outline: none;
  padding-left: 5px;
  ::placeholder {
    font-family: sans-serif;
    font-size: 11px;
    opacity: 0.7;
  }`

const Buttone = styled.label`
    width: 50%;
    height: 40px;
    background-color:rgba(74,97,255);
    border-radius:44px;
    margin-top:5px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    transition: all 950ms;
    :hover{
        cursor: pointer;
        background-color:blue;
    }

    @media screen and (min-width: 250px) and (max-width:375px){
      width: 50%;
      height: 35px;
      font-size: 11px;
  }
  @media screen and (min-width: 360px) and (max-width:395px){
    width: 50%;
    height: 35px;
    font-size: 11px;
  }
  @media screen and (min-width:412px) and (max-width:768px){
    width: 50%;
    height: 35px;
    font-size: 11px;
  }
`

const Clicks = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const MyLink = styled(Link)`
  text-decoration: none;
`;

const LogoUpload = styled.img`
  width: 85%;
`;

const Logo = styled.div`
  position: absolute;
  top: 30px;
  background-color: white;
  width: 150px;
  height: 150px;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

  @media screen and (min-width: 250px) and (max-width:375px){
    position: absolute;
    top: 10px;
  }
  @media screen and (min-width: 360px) and (max-width:395px){
    position: absolute;
    top: 40px;
  }
  @media screen and (min-width:412px) and (max-width:768px){
    position: absolute;
    top: 89px;
  }
`;

const Auth = styled.div`
  margin-top: 15px;
  color: rgba(0, 0, 0, 0.8);
  @media screen and (min-width: 250px) and (max-width:768px){
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
  margin-top: 10px;

  @media screen and (min-width: 250px) and (max-width:375px){
    height: 40px;
    margin-top: 90px;
  }
  @media screen and (min-width: 360px) and (max-width:395px){
    height: 40px;
  }
  @media screen and (min-width:412px) and (max-width:768px){
    height: 40px;
    margin-top: 90px;
  }
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
  @media screen and (min-width: 250px) and (max-width:768px){
    width: 270px;
  }
`;

const Type = styled.div`
  height: 20%;
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
  /* height: 70%; */
  flex-direction: column;
  align-items: center;
  align-items: center;

  /* @media screen and (min-width: 250px) and (max-width:375px){
    margin-top:20px ;
  }
  @media screen and (min-width: 360px) and (max-width:395px){
    width: 90%;
  }
  @media screen and (min-width:412px) and (max-width:768px){
    width: 90%;
  } */
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
  flex-direction: column;
  /* position: relative; */

  @media screen and (min-width: 250px) and (max-width:375px){
    width: 90%;
    display: flex;
    justify-content: center;
    justify-content:space-between;
  }
  @media screen and (min-width: 360px) and (max-width:395px){
    width: 90%;
  }
  @media screen and (min-width:412px) and (max-width:768px){
    width: 90%;
  }
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
  /* position: relative; */
  /* z-index: -1; */
`;

const Image = styled.img`
  position: absolute;
  left: 0;
  height: 50%;
  z-index: -1;
  @media screen and (min-width: 250px) and (max-width:768px){
    display: none;
  }
`;

const Image1 = styled.img`
  position: absolute;
  right: 0;
  height: 50%;
  z-index: -1;
  @media screen and (min-width: 250px) and (max-width:768px){
    display: none;
  }
`;
