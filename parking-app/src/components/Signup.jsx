import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./signup-login.css";
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    let headersList = {
      Accept: "*/*",
      "Content-Type": "application/json",
    };

    let bodyContent = JSON.stringify({
      username: email,
      password: password,
    });

    fetch("/signup", {
      method: "POST",
      body: bodyContent,
      headers: headersList,
    });
    
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicEmail">
        <div className="label">
          <Form.Label>Email address</Form.Label>
        </div>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={handleEmailChange}
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <div className="label">
          <Form.Label>Password</Form.Label>
        </div>
        <Form.Control
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
      </Form.Group>

      <Button variant="primary" type="submit" className="btn">
        Sign up
      </Button>
    </Form>
  );
};

export default SignUp;
