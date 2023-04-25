import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
//import jwt_decode from "jwt-decode";
import './signup-login.css'
const Login = (props) => {
  const url = props.url;
  const message = props.message;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    let headersList = {
      Accept: "*/*",
      Authorization: `Basic ${btoa(`${email}:${password}`)}`,
    };
    fetch("/login", {
      method: "GET",
      headers: headersList,
    }).then((res) => res.json())
      .then((data) => {
        const token = data.token;
        const name = data.name;
        console.log(name);
        //Get the user out of the decoded token to display wellcome message
        //const user = jwt_decode(token).user;
        localStorage.setItem("token", token);
        localStorage.setItem("name", name);

        window.location.href = `/${url}`;
      });

  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className="login-wrapper">
      <h1>Hello RJP</h1>
      <h2>Login</h2>
      <h3>{message}</h3>
      <Form onSubmit={handleSubmit} className='login-form'>
        <Form.Group controlId="formBasicEmail">
          <div className="label">
            <Form.Label>Email address</Form.Label>
          </div>
          <Form.Control type="email" placeholder="Enter email" value={email} onChange={handleEmailChange} />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <div className="label">
            <Form.Label>Password</Form.Label>
          </div>
          <Form.Control type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
        </Form.Group>

        <Button variant="primary" type="submit" className='login-btn'>
          Login
        </Button>
        <div >
          <a href='signup' className='signup-link'>Sign up here</a>
        </div>
      </Form>
    </div>
  );
};

export default Login;
