import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "../styles/signUp.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";


export default function Index({setLogin}) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate()

  const handleSubmit = (event) => {
    const url = `${process.env.REACT_APP_API_BASE_URL}/api/register`;
    event.preventDefault();

    axios.post(url, {
        email: email,
        username: name,
        password: password,
        password1: confirmPassword,
      })
      .then((response) => {
        localStorage.setItem("Token", response.data.token);
        localStorage.setItem("UserId", response.data.user_id);
        setLogin(previous=> !previous)
        navigate('/models');
      })
      .catch((error) => {});
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group
          className="mb-3  mt-5 field-width align-center"
          controlId="formBasicEmail"
        >
          <Form.Label>Email address</Form.Label>
          <Form.Control
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            required
            placeholder="Enter email"
          />

          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group
          className="mb-3 field-width align-center"
          controlId="formBasicUsername"
        >
          <Form.Label>Username</Form.Label>
          <Form.Control
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
            placeholder="Username"
          />
        </Form.Group>
        <Form.Group
          className="mb-3 field-width align-center"
          controlId="formBasicPassword"
        >
          <Form.Label>Password</Form.Label>
          <Form.Control
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group
          className="mb-3 field-width align-center"
          controlId="formBasicConfirmPassword"
        >
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            value={confirmPassword}
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
            type="password"
            placeholder="Confirm Password"
          />
        </Form.Group>
        <Button variant="primary align-button" type="submit">
          Create Account
        </Button>
        
        <Link className="link" to="/login">Already have a account?</Link>
      </Form>
    </div>
  );
}
