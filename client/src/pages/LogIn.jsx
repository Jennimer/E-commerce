import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { styled } from 'styled-components';
import { login } from '../redux/reduxCalls';

const Container = styled.div`
width: 100vw;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
background-color: #e6f5ea;
`
const Wrapper = styled.div`
width: 45%;
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
flex-direction: column;
border: 0,5px solid
margin: 20px 0;
`
const Input = styled.input`
 flex: 1;
 min-width: 40%;
 margin: 10px 0px;
 padding: 8px
`

const Button = styled.button`
border: none;
background-color: #53a68b;
color: white;
padding: 8px;
font-size: 12px;
margin-bottom: 10px;
&:disabled {
    color: grey;
    cursor: not-allowed;
  }
`
const Link = styled.a`
margin: 5px 0px;
font-size: 12px;
cursor: pointer;
`
const Error = styled.span`
color: red;
font-size: 14px;
`

export const LogIn = () =>
{
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();
    const { isFetching, error } = useSelector((state) => state.user);

    const handleLogin = (e) =>
    {
        e.preventDefault() //not refresh page
        login(dispatch, { username, password });
    };
    return (
        <Container>
            <Wrapper>
                <Title>SIGN IN</Title>

                <Form>

                    <Input placeholder="username" onChange={(e) => setUsername(e.target.value)} />
                    <Input placeholder="password" type="password" onChange={(e) => setPassword(e.target.value)} />
                    {error && <Error>Something went wrong!</Error>}
                    <Button onClick={handleLogin} disabled={isFetching} >LOGIN</Button>
                    <Link>FORGOT YOUR PASSWORD?</Link>
                    <Link>CREATE ACCOUNT</Link>
                </Form>

            </Wrapper>
        </Container >
    )
}
