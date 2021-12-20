import React from 'react'
import styled from "styled-components"

const UserCreateProject = () => {
    return (
        <>
           <Container>
                <Wrapper>
                    <Card>
                        <Header>Create Project</Header>
                        <Holder>
                        <InputWrap>
                            <Title>Title</Title>
                            <Input/>
                        </InputWrap>
                        <InputWrap>
                            <Description>Description</Description>
                            <Input/>
                        </InputWrap>
                        <InputWrap>
                            <DeadLine>DeadLine</DeadLine>
                            <Input/>
                        </InputWrap>       
                        </Holder>                                      
                        
                        <Button>Create</Button>

                    </Card>
                </Wrapper>   
            </Container> 
        </>
    )
}

export default UserCreateProject

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
    width: 400px;
    height: 65%;
    box-shadow: -1px -1px 1px rgba(0, 0, 0, 0.2),
    1px 1px 1px rgba(0, 0, 0, 0.2),
    0px 7px 7px rgba(0, 0, 0, 0.5);
    border-radius: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: none;
`
const Header = styled.div`
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 20px;
`
const Holder = styled.div`
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`
const InputWrap = styled.div`
    margin: 5px 0px;
    display: flex;
    flex-direction: column;
`
const Title = styled.label`
    font-size: 18px;
    font-weight: 600;
`
const Description = styled.label`
    font-size: 18px;
    font-weight: 600;
`
const DeadLine = styled.label`
    font-size: 18px;
    font-weight: 600;
`
const Input = styled.input`
    width: 300px;
    height: 28px;
    border-radius: 3px;
    padding-left: 10px;
    border: 2px solid lightgrey;
    margin: 5px 0px;

    :focus{
        outline: 2px solid rgb(76, 216, 250);
        border: none;
    }
`
const Button = styled.button`
    width: 130px;
    height: 40px;
    font-size: 16px;
    border-radius: 3px;
    border: none;
    background-color: rgb(0, 204, 254);
    color: white;
    font-weight: 700;
    margin-top: 20px;
    transform: scale(1);
    transition: all 350ms;

    :hover{
        cursor: pointer;
        transform: scale(0.958);
       
    }
`