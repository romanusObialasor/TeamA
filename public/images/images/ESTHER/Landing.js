import React from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components"

// #1098FF

const Landing = () => {



    return (
        <>
       
      <Container>
          <Wrapper>
              <Write>
                  <Headers>Build Projects Anywhere, Anytime with Simple</Headers>
                  <Texts> Simple allows Organization to Build projects, delegate task,
                       track project and smash objectives seamlessly. </Texts>
                  <Start to="userSignUp">Get Started </Start>
              </Write>
              <Picture>
            <Vect src="/images/land.png"/>
              </Picture>

          </Wrapper>

      </Container>
      </>
    )
}

export default Landing
const Start = styled(Link)`
text-decoration: none;
margin-top: 20px;

font-size:18px;
  height: 60px;
  width: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background-color: #1098FF;
  font-weight: 500;
  color: white;
  opacity: 0.9;
  transition: all 350ms;
  cursor: pointer;
  :hover {
    transform: scale(1.062);
    opacity: 1;
    cursor: pointer;
    border: 1px solid #1098FF;
    color: #1098FF;
    background-color: white;
  }

`
const Vect = styled.img`
height: 100%;
width: 100%;
display: unset;
@media screen and (max-width: 800px) {
    display: none;
  }



`
const Headers = styled.div`
font-size: 50px;
font-weight: bold;
font-family: red hat display;
@media screen and (max-width: 800px) {
    font-size: 40px;
  }

`
const Texts = styled.div`
 padding-top: 30px;
  font-size: 20px;
  font-weight: 450;
  padding-bottom: 30px;
  text-align: justify;
`
const Write = styled.div`
width: 45%;
height: 100%;
display: flex;
/* justify-content: center; */
justify-content: center;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    justify-content: center;
    align-items: center;
    width: 100%;
    text-align: center;
  }

`;
const Picture = styled.div`
 width: 45%;
  height: 100%;
  object-fit: contain;
  @media screen and (max-width: 800px) {
    display: none;
  }
`;
const Wrapper = styled.div`

width: 89%;
  height: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    justify-content: center;
    text-align: center;
  }

`;


const Container = styled.div`

padding-top: 70px; 
  height: 92vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f7fc;
  flex-wrap: wrap;
  @media screen and (max-width: 800px) {
/* height: 98vh; */
  }

`
