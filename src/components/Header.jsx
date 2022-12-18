import React from "react";
import "../styles/Design.scss";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <a href="/" className="logo__link">
          <h1>매일 요리</h1>
        </a>
      </div>
    </header>
  );
}

export default Header;
