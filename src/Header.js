import React from "react";
import "./styles/header.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
export default function Header({ setLogin }) {
  const token = localStorage.getItem("Token");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("Token");
    setLogin((previous) => !previous);
    navigate("/");
  };
  return (
    <div className="header">
      <div>
        <h1>3D Models</h1>
      </div>
      <div className="logout">
        {token && (
          <Button
            className="align-button"
            variant="primary"
            size="lg"
            onClick={handleLogout}
          >
            Logout
          </Button>
        )}
      </div>
    </div>
  );
}
