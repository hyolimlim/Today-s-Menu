import React from "react";

function RecipeDetailTitle({ data }) {
  return (
    <div className="recipedetail-title">
      <div className="recipedetail-title__img">
        <img src={data.ATT_FILE_NO_MAIN} alt="레시피이미지" />
      </div>
      <div className="recipedetail-title__content">
        <h1>{data.RCP_NM}</h1>
        <div>
          <span>칼로리{data.INFO_ENG}</span>
          <span>탄수화물{data.INFO_CAR}</span>
          <span>단백질{data.INFO_PRO}</span>
          <span>지방{data.INFO_FAT}</span>
          <span>나트륨{data.INFO_NA}</span>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetailTitle;
