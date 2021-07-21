/*
 * LoginPage
 *
 * User Login
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LoginBox = styled.div `

`;

const Form = styled.form `
    text-align: left;
    margin: 0 auto;
    border-radius: 20em;
    size: 5em;
`;

const Input = styled.input `
    color: ${({ theme }) => theme.text};
    border-radius: 20em;
    border: none;
    background-color: ${({ theme }) => theme.input};
    margin: 10px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size:25px;
    padding-left: 20px;
    padding-right: 10em;
    padding-top: 5px;
    padding-bottom: 5px;
 `;

 const Button = styled.button`
    background-color: #B5BBC2;
    border: none;
    size: 50px;
    margin: 10px;
    border-radius: 20em;
    padding-right: 50px;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 50px;
    color: black;
    &:hover{
        background-color: #868c91;
        cursor: pointer
    }
 `;

 const SignUpLink = styled(Link) `
    text-decoration: none;
    color: ${({ theme }) => theme.text};
    &:hover {
        color: #e6e6e6;
    }
 `;

 

export default function LoginPage() {
  return (
    <LoginBox>
      <Helmet>
        <title> Login Page </title>
        <meta
          name="description"
          content="Login Page"
        />
      </Helmet>

        <Form>
            <h1>LOGIN</h1>
            <label>
                <Input type="text" name ="name" placeholder="Username"/>
             </label>
        </Form>
        
        <Form>
        <label>
            <Input type="text" name ="password" placeholder="Password"/>
        </label>
        </Form>
        <Button>
            Login
        </Button>


        <div>
            <p>Dont have an account? 
                {/* <A href="/"> &nbsp;Sign up</A> */}
                <SignUpLink to = "/register"> &nbsp;Sign Up</SignUpLink>
            </p>
        </div>





    </LoginBox>
  );
}
