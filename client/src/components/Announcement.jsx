import { styled } from "styled-components"


const Container = styled.div`
height: 30px;
width: 100%;
background-color: #59baac;
padding: 10px 10px 10px 30px;
display: flex;
align-items: center;
color: white;
margin-bottom: 10px;
@media only screen and (max-width: 400px) {
  padding: 5px 5px 5px 20px;
  font-size: 14px;
}
`


const Announcements = () =>
{
  return (
    <Container>GET 20% OF YOUR FIRST ORDER!</Container>
  )
}

export default Announcements