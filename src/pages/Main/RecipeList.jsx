import React, { Suspense } from "react";
import Recipes from "./Recipes";

function RecipeList({ flatRecipeArr }) {
  return (
    <div className="recipelist">
      {flatRecipeArr?.map((recipe, index) => (
        <Recipes key={index} data={recipe} index={index} />
      ))}
    </div>
  );
}

export default RecipeList;
