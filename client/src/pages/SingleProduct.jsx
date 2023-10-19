import React from 'react'
import { styled } from 'styled-components'
import Navbar from '../components/Navbar'
import Announcements from '../components/Announcement'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useLocation } from "react-router-dom"
import { useState, useEffect } from "react"
import { publicRequest } from "../Request";

import { addProduct } from '../redux/reduxCart';
import { useDispatch } from "react-redux";

const Container = styled.div`

`
const Wrapper = styled.div`
padding: 40px;
display: flex;
aling-items: center;
@media only screen and (max-width: 600px) {
    padding: 20px;
    flex-direction: column;
  }
`

const ImgContainer = styled.div`
display: flex;
aling-items: center;
justify-content: center;
min-height: 30vh;
max-height: 60vh;
display: flex;


`
const Image = styled.img`
display: flex;
min-height: 40vh;
max-height: 60vh;
border: 1px solid grey;

`
const InfoContainer = styled.div`
display: flex;
align-items center;
justify-content center;

flex-direction:column;
max-height: 70vh;
padding: 20px 30px 0 100px;
@media only screen and (max-width: 1000px) {
    padding: 20px 30px 0 30px; 
    
  }
@media only screen and (max-width: 600px) {
    padding: 10px;
   
  }
`
const Title = styled.h2`
margin-bottom: 30px;
`
const AlertText = styled.div`
color: red;
margin-bottom: 20px;
`
const Desc = styled.p`

`
const Price = styled.span`
margin-top: 40px;
`
const FilterContainer = styled.div`
    display: flex;
   
    justify-content: space-between;
    margin: 200px 5px;
    @media only screen and (max-width: 800px) {
   
            flex-direction: column;
            align-items: start;
            justify-content: flex-start;
            margin: 100px 5px;
      }
      @media only screen and (max-width: 600px) {
        align-items: center;
        justify-content: center;
        flex-direction: row;
        margin: 200px 5px;

  }

`
const FilterSizeContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
@media only screen and (max-width: 800px) {
   
    margin-bottom: 30px;
}
@media only screen and (max-width: 800px) {
   

    margin-bottom: 20px;
}
`
const FilterTitle = styled.span`
 margin-right: 10px;
`
const FilterSize = styled.select`
border: 0.5px solid lightgray;
padding: 3px;
`
const Option = styled.option`

`
const FilterSizeOption = styled.option`

`

const AddContainer = styled.div`
margin-left: 60px;
display: flex;
align-items: center;
justify-content: space-between;
@media only screen and (max-width: 1000px) {
    margin-left: 0px;
    
    
  }
  @media only screen and (max-width: 600px) {
    margin-left: 0px;
  }
`
const AmountContainer = styled.div`
display: flex;
align-items: center;
font-weight: 700;

align-items: center;
justify-content: center;

`

const Amount = styled.span`
width: 25px;
height: 25px;
border-radius: 5px;
border: 0.5px solid lightgray;
display: flex;
align-items: center;
justify-content: center;
margin: 5px;

`
const Button = styled.button`
§
cursor: pointer;
border: none;
border-radius: 1px;
color: white;
background-color: #59baac;
margin-left: 20px;
padding: 10px;
&:hover { background-color: #e4edf2}
`
export const SingleProduct = () =>
{
    const location = useLocation();
    const id = location.pathname.split("/")[2];


    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    const [size, setSize] = useState("");
    const [price, setPrice] = useState();
    const [alertText, setAlertText] = useState("")
    const dispatch = useDispatch();

    useEffect(() =>
    {
        const getProduct = async () => 
        {
            try
            {
                const responce = await publicRequest.get("/products/find/" + id)
                setProduct(responce.data);
            } catch {

            }
        };
        getProduct();
    },
        [id]
    );



    const handleQuantity = (type) =>
    {
        if (type === "dec")
        {
            quantity > 1 && setQuantity(quantity - 1);
        } else
        {
            setQuantity(quantity + 1);
        }
    };

    const handleChange = (e) =>
    {
        const selectedSize = product.size?.find((p) => p.productSize === e.target.value)


        setSize(selectedSize.productSize);
        setPrice(selectedSize.productPrice);
    };

    const handleClick = () =>
    {
        if (size && price)

        //update cart, dispacth because redux
        {
            setAlertText("");
            dispatch(addProduct({ img: product.img, title: product.title, id: product._id + size, quantity, size, price }));
        }
        else
        {
            setAlertText("Please select the size!");
        }

    };
    return (
        <Container>
            <Navbar />
            <Announcements />
            <Wrapper>

                <ImgContainer>
                    <Image src={product.img} />
                </ImgContainer>
                <InfoContainer>
                    <AlertText>{alertText}</AlertText>
                    <Title>{product.title}</Title>
                    <Desc>{product.desc}</Desc>

                    {price ? <Price>€ {price}</Price> : <Price> Select size </Price>}
                    <FilterContainer>
                        <FilterSizeContainer>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize onChange={handleChange}>
                                <Option>Select Size</Option>
                                {product.size?.map((s) => (
                                    <FilterSizeOption key={s.productSize} value={s.productSize}>{s.productSize}</FilterSizeOption>
                                ))};
                            </FilterSize>
                        </FilterSizeContainer>

                        <AddContainer>
                            <AmountContainer>
                                <RemoveIcon onClick={() => handleQuantity("dec")} fontSize="small" />
                                <Amount>{quantity}</Amount>
                                <AddIcon onClick={() => handleQuantity("inc")} fontSize="small" />
                            </AmountContainer>
                            <Button onClick={handleClick}>ADD</Button>
                        </AddContainer>

                    </FilterContainer>

                </InfoContainer>

            </Wrapper>
            <Newsletter />
            <Footer />
        </Container>
    )
}
