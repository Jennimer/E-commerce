import React from 'react'
import styled from 'styled-components';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const Container = styled.div`  
    min-height: 60px;
    max-height: 100px;
    width: 100%;
    display: flex;
    padding: 10px;
    color: #2b3333;

    @media only screen and (max-width: 600px) {
        padding: 30px 10px 30px 20px;
      }
`;

const Wrapper = styled.div
  ` 
padding: 10px 10px 10px 30px;
display: flex;
width: 100%;
justify-content: space-between;
align-items: center;

@media only screen and (max-width: 600px) {
    padding: 5px;
    
  }
}
`

const Left = styled.div`  
flex: 1;
display: flex;
align-items: center;

@media only screen and (max-width: 600px) {
    margin-left: 5px;
  }
}
`

const Center = styled.div`  
flex: 1;
display: flex;
align-items: center;
margin-left: 20px;
justify-content: space-between;
@media only screen and (max-width: 400px) {
    margin-left: 0px;
   font-size: 12px;
   margin-left: 5px;
  }

`



const Right = styled.div`  
display: flex;
align-items: center;
justify-content: center;
flex: 1;

`

const Logo = styled.h1` 

font-size: 32px;
font-weight: bold;
color: #2b3333;
letter-spacing: 0.5px;
@media only screen and (max-width: 800px) {
    
      font-size: 30px;
    }
    @media only screen and (max-width: 400px) {
    
        font-size: 22px;
      }
`
const DropdownContent = styled.div`
position: absolute;
display: none;
background-color: white;
min-width: 160px;
box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
z-index: 1;
 a:hover {
    background-color: #ddd;
 }
 @media only screen and (max-width: 400px) {
    
    min-width: 130px;
  }
 
`;
const DropdownContainer = styled.div`
float: left;
overflow: hidden;

&:hover {
    ${DropdownContent} {
        display: block;
    }
  }
`;



const FilterText = styled.button`
font-size: 16px;
border: none;
outline: none;
color: #2b3333;
padding: 14px 16px;
background-color:white;
margin: 0;
@media only screen and (max-width: 400px) {
    
    font-size: 12px;
  }
`;




const LinkOption = styled.ul`
color: black;
padding: 12px 16px;
text-decoration: none;
display: block;
a:hover {
    background-color: #ddd;
  }
`;



const MenuItem = styled.div`
  font-size: 12px;
  cursor: pointer;
  margin-left: 15px;
  @media only screen and (max-width: 400px) {
    font-size: small;
    transform: scale(0.8);
    margin-left: 0px;
  }
`;
const linkStyle = {
  textDecoration: "none",
  color: 'black'
};


const Navbar = () =>
{
  const products = useSelector((state) => state.cart.products);

  const totalQuantity = () =>
  {
    let quantity = 0;
    products.forEach((product) =>
    {
      quantity += product.quantity
    });
    return quantity;
  };


  return (
    < Container>
      <Wrapper>
        <Left>
          <Link to="/" style={{ textDecoration: 'none' }}><Logo>MY POSTER STORE</Logo></Link>
        </Left>
        <Center>

          <DropdownContainer>
            <FilterText>POSTERS<ArrowDropDownIcon /></FilterText>
            <DropdownContent >

              <LinkOption><Link to="/products/Flowers" style={linkStyle}>Flowers</Link></LinkOption>
              <LinkOption><Link to="/products/Kids" style={linkStyle}>Kids</Link></LinkOption>
              <LinkOption><Link to="/products/Graphic" style={linkStyle}>Graphic</Link></LinkOption>
              <LinkOption><Link to="/products/Abstract" style={linkStyle}>Abstract</Link></LinkOption>
              <LinkOption><Link to="/products/Nature" style={linkStyle}>Nature</Link></LinkOption>
              <LinkOption><Link to="/products" style={linkStyle}>All Posters</Link></LinkOption>
            </DropdownContent>

          </DropdownContainer>




          <DropdownContainer>
            <FilterText>ROOM<ArrowDropDownIcon /></FilterText>
            <DropdownContent>

              <LinkOption> <Link to="/products/Livingroom" style={linkStyle}>Livingroom</Link></LinkOption>
              <LinkOption> <Link to="/products/Kitchen" style={linkStyle}>Kitchen</Link></LinkOption>
              <LinkOption> <Link to="/products/Kids" style={linkStyle}>Kids</Link></LinkOption>
              <LinkOption> <Link to="/products/Bedroom" style={linkStyle}>Bedroom</Link></LinkOption>

            </DropdownContent>

          </DropdownContainer>
        </Center>
        <Right>
          <MenuItem> <Link to="/cart">
            <Badge badgeContent={totalQuantity()} color="primary">
              <ShoppingCartIcon color="action" />
            </Badge></Link></MenuItem>
        </Right>
      </Wrapper></Container>
  )
};

export default Navbar;