import React, { useContext, useEffect } from "react";
import useManual from "../../hooks/useManual";
import RecipeDetailManual from "./RecipeDetailManual";
import RecipeDetailTitle from "./RecipeDetailTitle";
import { RecipeContext } from "../../store/RecipeProvider";
import { CloseIcon } from "../../assets/Index";

function RecipeDetail() {
  const { data, setIsOpen } = useContext(RecipeContext);
  const result = useManual(data);

  useEffect(() => {
    document.body.style.cssText = `
      position: fixed; 
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    };
  }, []);

  return (
    <div className="background">
      <div className="recipedetail">
        <div className="recipedetail__container">
          <div
            className="recipedetail__button"
            onClick={() => setIsOpen(false)}
          >
            <CloseIcon />
          </div>
          <RecipeDetailTitle data={data} />
          <RecipeDetailManual data={data} result={result} />
        </div>
      </div>
    </div>
  );
}

export default RecipeDetail;
