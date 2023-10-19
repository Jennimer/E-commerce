
import React from 'react';
import { styled } from 'styled-components';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Container = styled.div`
  display: flex;
  padding: 30px;
  margin-top: 50px;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    padding: 0 30px 30px 30px;
  }
`;

const Left = styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 20px;
`
const Desc = styled.p`
margin: 20px Opx;
font-size: 14px;
`
const Logo = styled.h1`
margin-bottom: 20px;
font-weight: 300;
@media only screen and (max-width: 600px) {
  font-size: 26px;
 }
`
const SosContainer = styled.div`
display: flex;
`
const SosIcon = styled.div`
width: 40px;
height: 40px;
`
const Center = styled.div`
Flex: 1;
padding: 20px;
`
const Right = styled.div`
Flex: 1;
padding: 20px;
font-size: 14px;
`
const Title = styled.h3`
margin-bottom: 20px;
@media only screen and (max-width: 600px) {
 font-size: 20px;
}
`
const List = styled.ul`
margin: 0;
padding: 0;
list-style: none;
font-size: 14px;
`
const ListItem = styled.li`

margin-bottom: 3px;
`
const Footer = () =>
{
  return (
    <Container>
      <Left>
        <Logo>
          MY POSTER STORE
        </Logo>
        <Desc>
          <SosContainer>
            <SosIcon><FacebookIcon /></SosIcon>
            <SosIcon><InstagramIcon /></SosIcon>
          </SosContainer>
        </Desc>
      </Left>
      <Center>
        <Title>Information</Title>
        <List>
          <ListItem>Contact Us</ListItem>
          <ListItem>Shipping & return</ListItem>
          <ListItem>About Us</ListItem>
          <ListItem>Terms and conditions</ListItem>
          <ListItem>Privacy setting & policy</ListItem>
        </List>
      </Center>
      <Right>© Copyright 2023. All Rights Reserved</Right>
    </Container>

  )
}

export default Footer