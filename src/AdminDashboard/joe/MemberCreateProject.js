import React from 'react'
import styled from "styled-components"

const MemberCreateProject = () => {
    return (
        <>
            <Container>
                <Wrapper>
                <Card>                        
                        <Left>
                            <InputWrap>
                                <Title>Title of your project</Title>
                                <Input/>
                            </InputWrap>
                            <InputWrap>
                                <Title>Description</Title>
                                <Textarea/>
                            </InputWrap>
                            <InputWrap>
                                <Title>Set a deadline</Title>
                                <Input/>
                            </InputWrap>
                            <Button>Create</Button>
                        </Left>
                        <Right>
                            <Header>
                                Create a personal projects
                            </Header>
                            <Desc>
                                Create a project to help mange your
                                task, the project created can
                                not be viewed by anyone
                                even the admin
                            </Desc>
                            <Help>
                                Need Help?
                            </Help>
                        </Right>
                    </Card>
                </Wrapper>
            </Container>
        </>
    )
}

export default MemberCreateProject

const Container = styled.div`
    width: 100%;
    height: 100vh;
`
const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

`
const Card = styled.div`
    width: 800px;
    height: 450px;
    box-shadow: -1px -1px 6px rgba(0, 0, 0, 0.19),
    1px 1px 6px rgba(0, 0, 0, 0.19);
    border-radius: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 21px;
    flex-wrap: wrap;

    @media screen and (max-width: 760px) {
        flex-direction: row-reverse;
    }
   
`
const Left = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const InputWrap = styled.div`
    margin: 5px 0px;
    display: flex;
    flex-direction: column;
`
const Title = styled.label`
    font-size: 18px;
    font-weight: normal;
`

const Input = styled.input`
    width: 270px;
    height: 35px;
    border-radius: 3px;
    padding-left: 10px;
    border: 2px solid lightgrey;
    margin: 5px 0px;

    :focus{
        outline: 2px solid lightblue;
        border: none;
    }
`
const Textarea = styled.textarea`
    width: 270px;
    height: 35px;
    border-radius: 3px;
    padding-left: 10px;
    border: 2px solid lightgrey;
    margin: 5px 0px;

    :focus{
        outline: 2px solid lightblue;
        border: none;
    }
`

const Button = styled.button`
    width: 120px;
    height: 60px;
    font-size: 16px;
    border-radius: 5px;
    border: none;
    background-color: #1C253C;
    color: lightcyan;
    font-weight: 700;
    margin-top: 20px;
    transform: scale(1);
    transition: all 350ms;

    :hover{
        cursor: pointer;
        transform: scale(0.958);
       
    }
`

const Right = styled.div`
    flex: 1;
    background-image: url("../createbg.png");
    display: flex;
    /* justify-content: center; */
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    border-radius: 0 21px 21px 0;
    position: relative;
`
     
const Header = styled.div`
    font-size: 30px;
    font-weight: 700;
    margin-top: 100px;
    color: white;
    width: 70%;
    
`
const Desc = styled.div`
    font-size: 17px;
    color: grey;
    width: 70%;
    letter-spacing: 1px;
    margin-top: 50px;
`
const Help = styled.div`
    font-size: 16px;
    color: lightcyan;
    width: 70%;
    position: absolute;
    bottom: 35px;
    right: -120px;
    
    :hover{
        cursor: pointer;
        color: red;
    }
`