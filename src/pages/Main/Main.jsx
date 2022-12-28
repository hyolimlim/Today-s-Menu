import React, { useRef, useState, useEffect, useContext } from "react";
import Search from "./Search";
import { useGetData } from "../../hooks/useGetData";
import useObserver from "../../hooks/useObserver";
import { Loading } from "../../assets/Index";
import { TopIcon } from "../../assets/Index";
import useScrollToTop from "../../hooks/useScrollToTop";
import RecipeList from "./RecipeList";
import RecipeDetail from "../RecipeDetail/RecipeDetail";
import { RecipeContext } from "../../store/RecipeProvider";

function Main() {
  const bottomRef = useRef(null);
  const isIntersectiong = useObserver(bottomRef);
  const [isVisible, setIsVisible] = useState(false);
  const { setSize, size, recipe, isNodata, isEndData, isLoading } =
    useGetData();

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
  }, [isIntersectiong, isLoading, isEndData]);

  const { isOpen } = useContext(RecipeContext);

  return (
    <main className="main">
      <Search />
      <div className="main__introduce">
        <h1>레시피 리스트</h1>
      </div>
      {isVisible ? (
        <div
          className="main__scrollbutton"
          onClick={() => {
            scrollToTop();
          }}
        >
          <TopIcon />
        </div>
      ) : null}
      {!isNodata ? (
        <>
          {isOpen && <RecipeDetail />}
          <RecipeList flatRecipeArr={recipe} />
        </>
      ) : (
        <div>데이터가 없습니다.</div>
      )}
      <div ref={bottomRef} className="loading">
        {!isLoading && !isNodata && !isEndData ? <Loading /> : null}
      </div>
    </main>
  );
}

export default Main;
