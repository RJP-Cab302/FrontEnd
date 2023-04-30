import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./signup-styles.scss";
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    let headersList = {
      Accept: "*/*",
      "Content-Type": "application/json",
    };

    let bodyContent = JSON.stringify({
      username: email,
      password: password,
      name: name
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
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicEmail">
        <div className="label">
          <Form.Label>Name</Form.Label>
        </div>
        <Form.Control
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={handleNameChange}
        />
        <div className="label">
          <Form.Label>Email address</Form.Label>
        </div>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={handleEmailChange}
        />
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
      <Form.Text className="text-muted">
        We'll never share your information with anyone else.
      </Form.Text>
      <Button variant="primary" type="submit" className="btn">
        Sign up
      </Button>
    </Form>
  );
};

export default SignUp;
