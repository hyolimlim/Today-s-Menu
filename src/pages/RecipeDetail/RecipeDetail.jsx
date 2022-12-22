import React from "react";
import { useLocation } from "react-router-dom";
import useManual from "../../hooks/useManual";
import RecipeDetailManual from "./RecipeDetailManual";
import RecipeDetailTitle from "./RecipeDetailTitle";

function RecipeDetail() {
  const location = useLocation();
  const data = location.state.data;
  const result = useManual(data);

  return (
    <div className="recipedetail">
      <div className="recipedetail__container">
        <RecipeDetailTitle data={data} />
        <RecipeDetailManual data={data} result={result} />
      </div>
    </div>
  );
}

export default RecipeDetail;
