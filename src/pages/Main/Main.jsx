import React, { useRef, useState, useEffect, useContext } from "react";
import Search from "./Search";
import RecipeList from "./RecipeList";
import { useGetData } from "../../hooks/useGetData";
import { RecipeContext } from "../../store/RecipeProvider";
import useObserver from "../../hooks/useObserver";
import { Loading } from "../../assets/Index";
import { TopIcon } from "../../assets/Index";
import useScrollToTop from "../../hooks/useScrollToTop";

function Main() {
  const bottomRef = useRef(null);
  const isIntersectiong = useObserver(bottomRef);
  const [isVisible, setIsVisible] = useState(false);
  const {
    setSize,
    size,
    recipe,
    isLoadingData,
    isNodata,
    isEndData,
    isLoading,
  } = useGetData();
  const { scrollToTop } = useScrollToTop();

  useEffect(() => {
    const handleShowButton = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", handleShowButton);
    return () => {
      window.removeEventListener("scroll", handleShowButton);
    };
  }, []);

  useEffect(() => {
    if (isIntersectiong && !isLoading & !isEndData) {
      setSize(() => size + 1);
    }
  }, [setSize, isIntersectiong, isLoading, isEndData]);

  console.log(isLoading, isEndData, isNodata);

  return (
    <main className="main">
      <Search />
      <div className="main__introduce">
        <h1>레시피 리스트</h1>
      </div>
      {isVisible ? (
        <div className="main__scrollbutton" onClick={scrollToTop}>
          <TopIcon />
        </div>
      ) : null}
      {!isNodata ? <RecipeList flatRecipeArr={recipe} /> : <div>nodata</div>}
      <div ref={bottomRef} className="loading">
        {!isLoading && !isNodata && !isEndData ? <Loading /> : null}
      </div>
    </main>
  );
}

export default Main;
