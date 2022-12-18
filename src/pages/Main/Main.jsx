import React from "react";
import SearchBar from "../../components/SearchBar";
import RecipeList from "./RecipeList";
import "../../styles/Design.scss";

function Main() {
  return (
    <main className="main">
      <SearchBar />
      <RecipeList />
    </main>
  );
}

export default Main;
