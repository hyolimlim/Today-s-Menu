import React from "react";
import "../styles/Design.scss";
import { CookIcon } from "../assets/Index";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link to={"/"} className="logo__link">
          <CookIcon width="25px" height="25px" />
          <h1>매일 요리</h1>
        </Link>
      </div>
    </header>
  );
}

export default Header;
