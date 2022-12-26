import React from "react";
import "../styles/Design.scss";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/Logo.png";

function Header() {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div
        className="logo"
        onClick={() => {
          navigate(-1);
        }}
      >
        <img src={Logo} alt="logo" />
      </div>
    </header>
  );
}

export default Header;
