import React from 'react'
import { styled } from 'styled-components'

const Container = styled.div`
width: 100vw;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
background-color: #e6f5ea;
`
const Wrapper = styled.div`
width: 50%;
padding: 20px;
background-color: white;
@media only screen and (max-width: 600px) {
    width: 75%;
  }
`
const Title = styled.h1`
font-size: 25px;
font-weight: 300;
`
const Form = styled.form`
display: flex;
flex-wrap: wrap;
border: 0,5px solid
margin: 20px 0;
`
const Input = styled.input`
 flex: 1;
 min-width: 40%;
 margin: 20px 10px 0px 0px;
 padding: 8px
`
const Agreement = styled.span`
font-size: 12px;
margin: 20px 0;

`
const Button = styled.button`
border: none;
background-color: #53a68b;
color: white;
padding: 8px;
font-size: 12px;
`
export const Register = () =>
{
    return (
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form>
                    <Input placeholder="firstname" />
                    <Input placeholder="lastname" />
                    <Input placeholder="email" />
                    <Input placeholder="username" />
                    <Input placeholder="password" />
                    <Input placeholder="confirm password" />
                    <Agreement>By creating an account, I consent  to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b></Agreement>
                    <Button>CREATE</Button>
                </Form>

            </Wrapper>
        </Container >
    )
}