import React,{useState} from 'react'
import styled from 'styled-components'
import logo from "./10.png"
import background from "./11.jpg"
import {app} from "../base"
import firebase from 'firebase'
import { useHistory } from 'react-router'




const UserSignin = () => {
const history = useHistory()
    const [image, setImage] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [comkey, setComkey] = useState("");
    const [percent, setPercent] = useState(0.001);


    const signIn = async () => {
        await app.auth().signInWithEmailAndPassword(email, password);
        setEmail("");
        setPassword("");
        setComkey("");
        localStorage.setItem("comkey", comkey);
        history.push("/");
        console.log("signedin")
      };

      



    const displayImage = async (e) => {
        const file = e.target.files[0];
        const fileRef = app.storage().ref();
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
              setImage(URL);
            });
          }
        );
      };
      const postData = async () => {
        const authUser = await app
          .auth()
          .createUserWithEmailAndPassword(email, password);
        if (authUser) {
          await app
            .firestore()
            .collection("Register")
            .doc(comkey)
            .collection("user")
            .doc(authUser.user.uid)
            .set({
              name: name,
              email: email,
              image: image,
              createdBy: authUser.user.uid,
              createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            });
          localStorage.setItem("comkey", comkey);
          setName("");
          setPassword("");
          setEmail("");
          setImage("");
          setComkey("");
          history.push("/");
          console.log("signedup")
        }
      };
        

const [changes, setChanges] = useState(false)

const [show,setShow]= useState()
const OnToggle = () => {
    setShow(!show);
  };

const onChanges = () => {
    setChanges(!changes)
}

    return (
        <Container>
            {
                changes ? (
                    <Wrapper>
            <Card1 >
                   
                            <InnerCard1>
                        <Logo src={logo}/>
                        <Line></Line>
                        <Text>Welcome<span>Sign in to your 
                            company's platform</span>
                        </Text>
                        <Text2>Don't have an account?<span onClick={onChanges}>Sign up</span>
                        </Text2>
                    </InnerCard1>
                   
                         
                      
              
                </Card1>

                
                <Card2>
                    <Head>
                    <Sign>Sign in</Sign>
                    <Pics />
                    </Head>
                    <Label>
                        <LabelText>Enter your email:</LabelText>
                        <Inputs placeholder="name@gmail.com"
                        
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                        />
                    </Label>
                    <Label>
                        <LabelText>Enter your password:</LabelText>
                            <Passwords>
                            <Inputs2 placeholder="6+ characters" type="password"
                               
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                            />
                            </Passwords>
                    </Label>
                    <Label>
                        <LabelText>Enter company's key:</LabelText>
                        <Inputs placeholder="12345678"
                          value={comkey}
                          onChange={(e) => {
                            setComkey(e.target.value);}}
                        />
                    </Label>
                    <Submit onClick={signIn}>Sign in</Submit>
                    <Text3>
                        Don't have an account?<span onClick={onChanges}>Sign up.</span>
                    </Text3>
                </Card2>
            </Wrapper>
                ):(
                    <Wrapper2>
                    <Card1 >
                     {
                         image === "" ?(
                            <InnerCard1>
                            <Logo src={logo}/>
                            <Line></Line>
                            <Text>Welcome<span>Sign in to your 
                                company's platform</span>
                            </Text>
                            <Text2>Already have an account?<span onClick={onChanges}>Sign in</span>
                            </Text2>
                        </InnerCard1>
                         ):(
                             <Display src={image}/>
                         )
                     }
                    </Card1>
                    <Card2>
                        <Head2>
                        <Sign>Sign Up</Sign>
                        <Pics2 src={logo}/>
                        </Head2>
                        <UploadHead>
                        <Uploads htmlFor="img"> Upload Image</Uploads>
                        <Inputer
                 id="img"
                  type="file"
                  style={{
                    display: "none",
                  }}
                  onChange={displayImage}
                />
                        </UploadHead>
                        <Label>
                            <LabelText>Enter name:</LabelText>
                            <Inputs placeholder="Samuel..."
                               value={name}
                               onChange={(e) => {
                                 setName(e.target.value);
                               }}
                            />
                        </Label>
                        <Label>
                            <LabelText>Enter your email:</LabelText>
                            <Inputs placeholder="name@gmail.com"
                            
                value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
                            />
                        </Label>
                        <Label>
                            <LabelText>Enter your password:</LabelText>
                         
                             
                                <Passwords>
                                <Inputs2 placeholder="6+ characters" type="password"
                                 value={password}
                                 onChange={(e) => {
                                   setPassword(e.target.value);
                                 }}
                                />
                                </Passwords>
                             
                        </Label>
                        <Label>
                            <LabelText>Enter company's key:</LabelText>
                            <Inputs placeholder="12345678"
                             value={comkey}
                             onChange={(e) => {
                               setComkey(e.target.value);
                             }}
                            />
                        </Label>
                        <Submit2 onClick={postData}>Sign up</Submit2>
                        <Text3>
                            Already have an account?<span onClick={onChanges}>Sign in.</span>
                        </Text3>
                    </Card2>
                </Wrapper2>
                )
            }
        </Container>
    )
}

export default UserSignin

const Display = styled.img`
width: 300px;
height: 70%;
object-fit: cover;
`
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

const Wrapper = styled.div `
width: 750px;
height: 75%;
background-color: white;
border-radius: 5px;
box-shadow: 1px 0px 10px rgba(0, 0, 0, 0.2);
display: flex;
@media screen and (max-width: 1024px) and (min-width: 768px){
width: 410px;
height: 500px;
background-color: white;
border-radius: 5px;
box-shadow: 1px 0px 10px rgba(0, 0, 0, 0.2);
display: flex;
align-items: center;
justify-content: center;
}
@media screen and (max-width: 766px) and (min-width: 300px){
width: 350px;
height: 500px;
background-color: grey;
border-radius: 5px;
box-shadow: 1px 0px 10px rgba(0, 0, 0, 0.2);
display: flex;
align-items: center;
justify-content: center;
}

`
const Container = styled.div `
width: 100%;
height: 100vh;
min-height: auto;
background-color: lightgray;
display: flex;
align-items: center;
justify-content: center;
`

const Text3 = styled.div `
display: none;
@media screen and (max-width: 1024px) and (min-width: 300px){
width: 70%;
display: flex;
font-weight: 400;
color: black;
font-size: 13px;
margin-top: 20px;
align-items: center;
justify-content: center;
/* text-align: center; */
margin-left: 15%;
/* background-color: blue; */
margin-bottom: 10px;
/* margin: 20px 0px 0px 30px; */
span{
    font-size: 13px;
    font-weight: 500;
    margin-left: 2px;
    cursor: pointer;
}
}
`
const Text2 = styled.div `
width: 180px;
display: flex;
font-weight: 250;
flex-direction: column;
color: white;
font-size: 13px;
margin: 80px 0px 0px 20px;
span{
    font-size: 14px;
    font-weight: 500;
    cursor: pointer
}
`

const Text = styled.div `
width: 180px;
display: flex;
font-weight: 400;
flex-direction: column;
color: white;
font-size: 30px;
margin: 15px 0px 0px 20px;
span{
    font-size: 15px;
    font-weight: 350;
}
`

const Line = styled.div `
width: 60px;
height: 1.500px;
background-color: white;
margin: 5px 0px 0px 20px;
`

const Logo = styled.img `
width: 100px;
height: 80px;
object-fit: contain;
margin: 20px 0px 0px 20px;
border-radius: 3px;
`

const InnerCard1 = styled.div `
width: 300px;
height: 70%;
background-color: white;
border-radius: 15px;
background: rgba( 255, 255, 255, 0.2 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 8px );
-webkit-backdrop-filter: blur( 8px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );
`

const Card1 = styled.div `
background-image: url(${background});
background-repeat: no-repeat;
background-position: center;
background-size: cover;
background-color: black;
width: 375px;
height: 100%;
border-radius: 5px 0px 0px 5px;
display: flex;
align-items: center;
justify-content: center;
@media screen and (max-width: 1024px) and (min-width: 300px){
    display: none;
}
`

const Wrapper2 = styled.div `
width: 750px;
height: 80%;
background-color: white;
border-radius: 5px;
box-shadow: 1px 0px 10px rgba(0, 0, 0, 0.2);
display: flex;
@media screen and (max-width: 1024px) and (min-width: 768px){
width: 410px;
height: 500px;
background-color: white;
border-radius: 5px;
box-shadow: 1px 0px 10px rgba(0, 0, 0, 0.2);
display: flex;
align-items: center;
justify-content: center;
}
@media screen and (max-width: 766px) and (min-width: 300px){
width: 350px;
height: 500px;
background-color: grey;
border-radius: 5px;
box-shadow: 1px 0px 10px rgba(0, 0, 0, 0.2);
display: flex;
align-items: center;
justify-content: center;
}

`

const UploadHead = styled.div `
width: 80%;
height: 40px;
background-color: #397EF6;
border-radius: 3px;
color: white;
margin: 5px 0px 0px 30px;
display: flex;
align-items: center;
justify-content: center;
opacity: 0.9;
transition: all 350ms;
transform: scale(1);
:hover{
    transform: scale(0.968);
    cursor: pointer;
    opacity: 1;
}
`

const Uploads = styled.label`
width: 80%;
height: 40px;
/* background-color: #397EF6; */
color: white;
font-size: 15px;
display: flex;
align-items: center;
justify-content: center;
`
const Submit2 = styled.div`
width: 80%;
height: 40px;
background-color: #397EF6;
border-radius: 3px;
color: white;
margin: 20px 0px 20px 30px;
font-size: 15px;
display: flex;
align-items: center;
justify-content: center;
opacity: 0.9;
transition: all 350ms;
transform: scale(1);
:hover{
    transform: scale(0.968);
    cursor: pointer;
    opacity: 1;
}
`
const Submit = styled.div`
width: 80%;
height: 40px;
background-color: #397EF6;
border-radius: 3px;
color: white;
margin: 50px 0px 0px 30px;
font-size: 15px;
display: flex;
align-items: center;
justify-content: center;
opacity: 0.9;
transition: all 350ms;
transform: scale(1);
:hover{
    transform: scale(0.968);
    cursor: pointer;
    opacity: 1;
}
`

const Inputs = styled.input `
width: 290px;
height: 55%;
outline: none;
border-radius: 3px;
padding-left: 5px;
border: 1px solid lightgray;

::placeholder{
    opacity: 0.6;
    font-size: 12px;
};
:focus{
    outline: 2px solid rgb(76, 216, 250);
    border: none;
};
`
const Inputs2 = styled.input`
width: 290px;
height: 28px;
outline: none;
padding-left: 5px;
/* background: red; */
border: none;

::placeholder{
    opacity: 0.6;
    font-size: 12px;
};

@media screen and (max-width: 2000px) and (min-width: 300px){
    height: 24px;
}

`

const PasswordIcon = styled.label `
width: 30px;
height: 30px;
font-size: 20px;
display: flex;
color: gray;
align-items: center;
justify-content: center;
/* background-color: lightgray; */
:hover{
    cursor: pointer;
}
`
const Passwords = styled.div`
width: 295px;
height: 55%;
outline: none;
border-radius: 3px;
border: 1px solid lightgray;
display: flex;
align-items: center;
:hover{
    outline: 2px solid rgb(76, 216, 250);
    border: none;
};
`
const LabelText = styled.label `
font-size: 12px;
color: gray;
`

const Label = styled.div `
width: 80%;
height: 60px;
margin: 20px 0px 0px 30px;
display: flex;
flex-direction: column;
justify-content: space-between;
`

const Pics2 = styled.img `
display: none;
@media screen and (max-width: 768px) and (min-width: 300px){
    display: unset;
width: 35%;
height: 80%;
/* background-color: lightgreen; */
margin-left: 30%;
border-radius: 4px;
object-fit: cover;
}
`
const Pics = styled.img `
width: 40%;
height: 100%;
/* background-color: lightgreen; */
margin-left: 30%;
border-radius: 4px;
object-fit: cover;
@media screen and (max-width: 2000px) and (min-width: 300px){
    display: none;
}
`
const Sign = styled.div `
/* margin: 50px 0px 20px 50px; */
font-size: 22px;
`
const Head2 = styled.div `
width: 70%;
height: 80px;
/* background-color: lightgray; */
margin-top: 10px;
margin-left: 15%;
display: flex;
align-items: center;
`

const Head = styled.div `
width: 70%;
height: 80px;
/* background-color: lightgray; */
margin-top: 30px;
margin-left: 15%;
display: flex;
align-items: center;

`

const Card2 = styled.div `
width: 375px;
height: 100%;
background-color: white;
border-radius: 0px 5px 5px 0px;
display: flex;
flex-direction: column;
@media screen and (max-width: 1024px) and (min-width: 300px){
width: 360px;
height: 100%;
background-color: white;
border-radius: 5px;
display: flex;
flex-direction: column;
}
`