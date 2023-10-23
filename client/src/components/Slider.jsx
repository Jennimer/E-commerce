

import { styled } from 'styled-components'
import ArrowLeftOutlined from '@mui/icons-material/ArrowLeft';
import ArrowRightOutlined from '@mui/icons-material/ArrowRight';
import { sliderItems } from '../data';
import { useState } from 'react';
import { Link } from "react-router-dom";


const Container = styled.div`
width: 100vw;
max-height: 70vh;
min-height: 30vh;
display: flex;
position: relative;
overflow: hidden;
margin-top: 50px;

color: #2b3333;

`
const Arrow = styled.div`
width: 30px;
height: 30px;
background-color: none;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
top: 0;
bottom: 0;
left: ${props => props.direction === 'left' && '20px'};
right: ${props => props.direction === 'right' && '20px'};
margin: auto;
cursor: pointer;
opacity: 0,5;
z-index: 2;
@media only screen and (max-width: 400px) {
    margin-bottom: 10px;
  }
`
const Wrapper = styled.div`
display: flex;
transition: all 1.5s ease;
transform: translateX(${(props) => props.slideIndex * -100}vw);
`
const Slide = styled.div`
width: 100vw;
max-height: 70vh;
min-height: 30vh;
display: flex;
align-items: center;

background-color: #${props => props.bg};

`

const ImgContainer = styled.div`
max-height: 70vh;
min-height: 20vh;
display: flex;
`

const InfoContainer = styled.div`
padding-left: 50px;

display: flex;
flex-direction: column;
@media only screen and (max-width: 800px) {
   
    padding: 30px;
  }
@media only screen and (max-width: 400px) {
   
    margin-left: 20px;
  }
`

const Image = styled.img`
width: 100%;
height: 100%;
max-height: 70vh;
min-height: 20vh;
diplay: flex;
opacity: 0.8;
`

const Title = styled.h1`
margin: 20px;
font-weight: 300;
@media only screen and (max-width: 800px) {
    font-size: 20px;
    margin: 0px 10px 0px 10px;
  }
@media only screen and (max-width: 400px) {
    font-size: 18px;
    margin: 0px 10px 0px 10px;
  }
`
const Desc = styled.p`
margin: 20px;
@media only screen and (max-width: 800px) {
    font-size: 12px;
  
  }
@media only screen and (max-width: 400px) {
    font-size: 10px;
   
  }
`
const Button = styled.button`
padding: 6px;
margin: 40px 20px 20px 20px;
font-size: 18px;
width: 300px;
color: white;
background-color: #59baac;
border: none;
cursor: pointer;
@media only screen and (max-width: 800px) {
    width: 100px;
    font-size: 12px; 
    margin: 10px;
  }
@media only screen and (max-width: 400px) {
    width: 80px;
    font-size: 10px; 
    margin: 8px;
  }
`
const Slider = () =>
{
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) =>
  {
    if (direction === "left")
    {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
    } else
    {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };
  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map(item => (
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Link to="/products" ><Button>SHOP NOW</Button></Link>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  )
}
export default Slider