import React from "react";

function RecipeList({ data }) {
  return (
    <div className="recipe">
      <img src={data.ATT_FILE_NO_MAIN} alt="대표 이미지" />
      <h1>{data.RCP_NM}</h1>
      <span>{data.RCP_PAT2}</span>
    </div>
  );
}

export default RecipeList;
