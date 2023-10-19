import React from 'react'
import Navbar from '../components/Navbar'
import Announcements from '../components/Announcement'
import Footer from '../components/Footer';
import { styled } from 'styled-components';
import { Link } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";

import { incrementQuantity } from '../redux/reduxCart';
import { decrementQuantity } from '../redux/reduxCart';
import { resetCart } from '../redux/reduxCart';

const Container = styled.div`

`
const Wrapper = styled.div`
padding: 30px;
@media only screen and (max-width: 600px) {
    padding: 0px;
    
  }
`
const Title = styled.h1`
font-size: 20px;
font-weight: 300;
text-align: center;

margin-bottom: 20px;
`
const Top = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 20px 20px 40px 20px;
`

const TopButton = styled.button`
color: white;
background-color: #59baac;
border: none;
padding: 8px;
font-size: 12px;
margin-bottom: 10px
cursor: pointer;
`


const Bottom = styled.div`
display: flex;
justify-content: space-between;
margin: 50px;
@media only screen and (max-width: 1000px) {
    flex-direction: column;
   
  }
@media only screen and (max-width: 600px) {
    flex-direction: column;
    margin: 0px;
  }
`
const Info = styled.div`
display-flex;
@media only screen and (max-width: 1200px) {
margin-left: 10px;

  }
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    margin-left: 5px;
      }
`
const Product = styled.div`
display: flex;
justify-content: space-between;
@media only screen and (max-width: 600px) {
    justify-content: center;
      }
`
const ProductDetails = styled.div`
display: flex;


`
const Image = styled.img`
max-height: 300px;
min-height: 50px;
margin: 10px;
border: 1px solid grey;
@media only screen and (max-width: 600px) {
margin: 0 0 10px 0;
max-height: 130px;
  }
`
const Details = styled.div`
padding: 20px;
font-size: 14px;
display: flex;
flex-direction: column;
justify-content: space-around;
@media only screen and (max-width: 600px) {
    font-size: 10px;
    padding: 10px;
      }
`

const ProductName = styled.span`


`
const ProductId = styled.span`


`
const ProductSize = styled.span`

`
const PriceDetail = styled.div`
display: flex;
flex-direction: column;
align-items: center;

`
const AmountTitle = styled.h1`
font-size: 16px;
margin: 20px;
@media only screen and (max-width: 1200px) {
    font-size: 14px;
  }
  @media only screen and (max-width: 600px) {
    font-size: 10px;
    margin: 10px;
  }
`
const ProductAmountContainer = styled.div`
padding: 1px;
display: flex;
border: grey 0.5px solid;
justify-content: space-around;
align-items: center;
margin-bottom:20px;
transform: scale(0.9);
@media only screen and (max-width: 600px) {
    transform: scale(0.6);
    margin-bottom:10px;
  }
`


const ProductAmount = styled.span`
font-size: 14px;
margin: 5px;


`
const ProductPrice = styled.span`
font-size: 14px;
font-weight: 200;

margin-top: 20px;
@media only screen and (max-width: 600px) {
    margin-top: 33px;
    
    font-size: 10px; 
       
      
  }
`


const Summary = styled.div`

flex: 2;
margin:30px;
align-items: center;
height: 50vh;

@media only screen and (max-width: 600px) {
    margin: 40px;
    
  }
`
const SummaryTitle = styled.h1`
font-size: 16px;

@media only screen and (max-width: 1200px) {
    font-size: 14px;
    
  }
  @media only screen and (max-width: 600px) {
    font-size: 12px;
    
  }
`
const SummaryItem = styled.span`
font-size: 14px;
display: flex;
justify-content: space-between;
margin: 30px 5px;
`
const SummaryText = styled.span`
`
const SummaryPrice = styled.div`
`
const ButtonContainer = styled.div`
display: flex;
justify-content: space-between;
`
const SummaryButton = styled.button`
color: white;
background-color: #59baac;
border: none;
padding: 8px;
font-size: 12px;
margin-top: 30px;
@media only screen and (max-width: 1200px) {

    font-size: 12px;
  }
@media only screen and (max-width: 600px) {
    margin: 30px;
    
  }
`



export const Cart = () =>
{
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <Container>
      <Navbar />
      <Announcements />
      <Wrapper>
        <Title>YOUR SHOPPING BAG</Title>
        <Top>
          <Link to="/products"><TopButton>CONTINUE SHOPPING</TopButton></Link>

        </Top>
        <Bottom>
          <Info>
            {cart.products.map((product) => (
              <Product>
                <ProductDetails key={product.id}>
                  <Image src={product.img} />
                  <Details>
                    <ProductName><b>Product Name:</b> {product.title}</ProductName>
                    <ProductId><b>ID:</b> {product.id}</ProductId>
                    <ProductSize><b>Size:</b> {product.size}</ProductSize>
                  </Details>
                </ProductDetails>
                <PriceDetail>
                  <AmountTitle>AMOUNT</AmountTitle>
                  <ProductAmountContainer>

                    <AddIcon onClick={() => dispatch(incrementQuantity(product.id))} fontSize="small" />
                    <ProductAmount> {product.quantity} </ProductAmount>
                    <RemoveIcon onClick={() => dispatch(decrementQuantity(product.id))} fontSize="small" />
                  </ProductAmountContainer>

                  <ProductPrice>€ {product.price * product.quantity} </ProductPrice>
                </PriceDetail>
              </Product>

            ))}


          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryText>Order Total</SummaryText>
              <SummaryPrice>€ {cart.total} </SummaryPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryText>Shipping</SummaryText>
              <SummaryPrice>€ 0</SummaryPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryText type="total">Total</SummaryText>
              <SummaryPrice>€ {cart.total}</SummaryPrice>
            </SummaryItem>
            <ButtonContainer><SummaryButton onClick={() => dispatch(resetCart())}>
              RESET CART
            </SummaryButton>
              <SummaryButton>CHECKOUT</SummaryButton>
            </ButtonContainer>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};
