import React from "react";
import "../styles/Design.scss";
import Logo from "../assets/Logo.png";

function Header() {
  return (
    <header className="header">
      <div className="logo" onClick={() => window.location.reload()}>
        <img src={Logo} alt="logo" width="150px" height="45px" />
      </div>
    </header>
  );
}

export default Header;
