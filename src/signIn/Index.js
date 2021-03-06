import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "../styles/common.css";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

import axios from "axios";
export default function Index({ setLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault();

    const url = `${process.env.REACT_APP_API_BASE_URL}/api/login`;
    axios
      .post(url, {
        email: email,
        password: password,
      })
      .then((response) => {
        localStorage.setItem("Token", response.data.token);
        localStorage.setItem("UserId", response.data.user_id);

        setLogin((previous) => !previous);
        navigate("/models");
      })
      .catch((error) => {
        toast(error.response.data.detail, {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          type:"error",
          progress: undefined,
          theme: 'colored',
        });
      });
  };

  return (
    <div>
      <Form onSubmit={login}>
        <Form.Group
          className="mb-3 mt-5 align-center field-width"
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
          controlId="formBasicPassword"
        >
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <Form.Control.Feedback type="invalid">
            Please provide password.
          </Form.Control.Feedback>
        </Form.Group>
        <Button className="align-button" variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
}
