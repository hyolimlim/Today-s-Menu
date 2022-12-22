import React, { useRef, useState, useEffect, useContext } from "react";
import Search from "./Search";
import RecipeList from "./RecipeList";
import "../../styles/Design.scss";
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

  //데이터 가져오기
  const { recipe } = useContext(RecipeContext);

  const { setSize, size, isLoading, isNodata, isEndData } = useGetData();

  const { scrollToTop } = useScrollToTop();

  useEffect(() => {
    if (isIntersectiong && !isLoading && !isNodata & !isEndData) {
      setSize(() => size + 1);
    }
  }, [setSize, isIntersectiong, isLoading, isNodata, isEndData]);

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
        {isLoading ? <Loading /> : null}
      </div>
    </main>
  );
}

export default Main;
