import React from 'react'
import { styled } from 'styled-components'
import SendIcon from '@mui/icons-material/Send';

const Container = styled.div`
height: 80%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
padding: 30px;

@media only screen and (max-width: 400px) {
  margin-left: 20px;
  
}
`
const Title = styled.h1`
font-size: 30px;
margin: 10px;
font-weight: 300;
@media only screen and (max-width: 400px) {
  font-size: 22px;
  margin-left: 20px;
  
}
`
const Description = styled.div`
font-size: 14px;
font-weight: 300;
margin: 3px;
@media only screen and (max-width: 400px) {
  font-size: 12px;
  margin-left: 20px;
  
}
`
const InputContainer = styled.div`

  width: 50%;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid gray;
  margin: 20px 0 0 0;
  @media only screen and (max-width: 400px) {
    margin-left: 0px;
    width: 80%;
  }
`;


const Input = styled.input`
border: none;
flex: 8;
padding: 10px 10px 10px 20px;

`
const Button = styled.button`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: #59baac;
  color: white;
`
const Newsletter = () =>
{
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>Get 20% of your first order</Description>
      <Description>Get timely updates from our new designs and offers</Description>
      <InputContainer>
        <Input placeholder='Your Email' />
        <Button><SendIcon /></Button>
      </InputContainer>
    </Container>
  )
}
export default Newsletter