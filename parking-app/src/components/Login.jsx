import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import jwt_decode from "jwt-decode";
import './signup-login.css'
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
     let headersList = {
       Accept: "*/*",
       Authorization: "Basic SmltQHRlc3QuY29tOlN1cGVy",
     };

      fetch("/login", {
        method: "GET",
        headers: headersList,
      }).then((res) => res.json())
        .then((data) => {
          const token = data.token;
          // Do something with the token
          console.log(token);
          const user = jwt_decode(token);
          console.log(user.user);
          localStorage.setItem("token", token);
          //window.location.href = "/";
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
        <a href='#' className='signup-link'>Sign up here</a>
      </div>
    </Form>
    </div>
  );
};

export default Login;
