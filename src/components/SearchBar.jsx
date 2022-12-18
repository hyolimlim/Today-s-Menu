import React from "react";
import "../styles/Design.scss";

function SearchBar() {
  return (
    <div className="searchbar">
      <div className="searchbar__input">
        <input className="input" placeholder="레시피를 검색해보세요"></input>
      </div>
      <div className="searchbar__icon"></div>
    </div>
  );
}

export default SearchBar;
