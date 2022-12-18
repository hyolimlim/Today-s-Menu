import React from "react";
import "../styles/Design.scss";

function SearchBar() {
  return (
    <div className="searchbar">
      <input
        className="searchbar__input"
        placeholder="먹고싶은 요리를 검색해보세요"
      ></input>
      <div className="searchbar__icon"></div>
    </div>
  );
}

export default SearchBar;
