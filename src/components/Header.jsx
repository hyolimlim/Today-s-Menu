import React from "react";
import "../styles/Design.scss";
import { CookIcon } from "../assets/Index";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <a href="/" className="logo__link">
          <CookIcon width="25px" height="25px" />
          <h1>매일 요리</h1>
        </a>
      </div>
    </header>
  );
}

export default Header;
