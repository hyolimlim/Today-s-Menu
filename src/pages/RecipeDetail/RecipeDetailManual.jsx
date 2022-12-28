import React from "react";

function RecipeDetailManual({ data, result }) {
  return (
    <div className="recipedetail-manual">
      <div className="recipedetail-manual__intro">
        <h1>재료</h1>
        <p>{data.RCP_PARTS_DTLS}</p>
      </div>
      <div className="recipedetail-manual__steps">
        <h1>조리 과정</h1>
        {Object.entries(result).map(([key, value], index) => (
          <div className="recipedetail-manual__img" key={index}>
            <img src={value} alt="이미지" />
            <p>{key}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecipeDetailManual;
