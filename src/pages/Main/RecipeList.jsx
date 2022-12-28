import React from "react";
import Recipes from "./Recipes";

function RecipeList({ flatRecipeArr }) {
  return (
    <div className="recipelist">
      {flatRecipeArr?.map((recipe, index) => (
        <Recipes key={index} data={recipe} />
      ))}
    </div>
  );
}

export default RecipeList;
