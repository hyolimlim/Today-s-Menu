import React, { useContext, useCallback, useRef } from "react";
import { SearchIcon } from "../../assets/Index";
import "../../styles/Design.scss";
import { RecipeContext } from "../../store/RecipeProvider";

function Search() {
  const { setInput, setOption } = useContext(RecipeContext);
  const inputRef = useRef();
  const optionRef = useRef();

  const onKeyDown = useCallback((e) => {
    if (e.key === "Enter" && e.target.value.trim().length > 0) {
      setInput(inputRef.current.value);
      setOption(optionRef.current.value);
    }
  }, []);

  return (
    <div className="searchbar">
      <div className="searchbar__inputitem">
        <select ref={optionRef}>
          <option value="음식명">음식명</option>
          <option value="재료명">재료명</option>
        </select>
        <input
          className="input"
          onKeyDown={onKeyDown}
          ref={inputRef}
          placeholder="레시피를 검색해보세요"
        ></input>
      </div>
      <div
        className="searchbar__icon"
        onClick={() => {
          setInput(inputRef.current.value);
          setOption(optionRef.current.value);
        }}
      >
        <SearchIcon width="30px" height="30px" fill="#5f8d4e" />
      </div>
    </div>
  );
}

export default Search;
