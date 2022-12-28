import React, { useContext } from "react";
import { RecipeContext } from "../../store/RecipeProvider";

function Recipes({ data }) {
  const { setIsOpen, setData } = useContext(RecipeContext);

  const handleModal = () => {
    setIsOpen(true);
    setData(data);
  };

  return (
    <div className="recipe" onClick={handleModal}>
      <img src={data.ATT_FILE_NO_MAIN} alt="대표 이미지" />
      <div className="recipe__item">
        <h1>{data.RCP_NM}</h1>
        <span>{data.RCP_PAT2}</span>
      </div>
    </div>
  );
}

export default Recipes;
