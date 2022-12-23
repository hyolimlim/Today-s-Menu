import React from "react";
import { Link } from "react-router-dom";

function Recipes({ data, index }) {
  return (
    <Link to={`/${index}`} state={{ data }} className="recipe">
      <img src={data.ATT_FILE_NO_MAIN} alt="대표 이미지" />
      <div className="recipe__item">
        <h1>{data.RCP_NM}</h1>
        <span>{data.RCP_PAT2}</span>
      </div>
    </Link>
  );
}

export default Recipes;
