import React from "react";
import "./styles/header.css";
import { Button } from "react-bootstrap";
export default function Header({ setLogin }) {

  return (
    <div className="header">
      <div>
        <h1>3D Models</h1>
      </div>
      <div className="logout">
          <Button
            className="align-button"
            variant="primary"
            size="lg"
          >
            Logout
          </Button>
      </div>
    </div>
  );
}
