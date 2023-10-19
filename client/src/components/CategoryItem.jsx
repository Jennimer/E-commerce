
import styled from 'styled-components'
import { Link } from "react-router-dom";


const Container = styled.div`

margin: 3px;
justify-content: center;
align-items: center;
flex-direction: column;
position: relative;
`
const Info = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`
const Title = styled.h1`
color: #5a5e5d;

margin-bottom: 20px;
@media only screen and (max-width: 600px) {
   
    font-size: 20px;
  }
`

const Image = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
border: 0.5px solid lightgrey;
opacity: 0.9;
`
const Button = styled.div`
display: flex;
justify-content: center;
border: none;
padding: 12px;
width: 70px;
background-color: white;
color: #2b3333;
cursor: pointer;
`

const CategoryItem = ({ item }) =>
{
    return (
        <Container>
            <Link to={`/products/${item.cat}`}>
                <Image src={item.img} />
                <Info>
                    <Title>
                        {item.title}
                    </Title>
                    <Button>SHOP</Button>

                </Info>
            </Link>
        </Container>
    )
}
export default CategoryItem