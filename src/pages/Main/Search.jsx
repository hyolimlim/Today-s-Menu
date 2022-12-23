import { useContext, useCallback, useState } from "react";
import { useGetData } from "../../hooks/useGetData";
import { SearchIcon } from "../../assets/Index";
import "../../styles/Design.scss";
import { RecipeContext } from "../../store/RecipeProvider";

function Search() {
  const { setInput, setOption } = useContext(RecipeContext);
  const [inputData, setInputData] = useState("");
  const [optionData, setOptionData] = useState("음식명");

  //엔터 누르면 검색 수정
  const onKeyDown = useCallback((e) => {
    if (e.key === "Enter" && e.target.value.trim().length > 0) {
      setInputData(e.target.value.trim());
      setInput(inputData);
      setOption(optionData);
    }
  }, []);

  const onClick = () => {
    setInput(inputData);
    setOption(optionData);
  };

  // const { Getquery } = useGetData();

  return (
    <div className="searchbar">
      <div className="searchbar__inputitem">
        <select
          onChange={(e) => {
            setOptionData(e.target.value);
          }}
        >
          <option value="음식명">음식명</option>
          <option value="재료명">재료명</option>
        </select>
        <input
          className="input"
          onKeyDown={onKeyDown}
          onChange={(e) => {
            setInputData(e.target.value);
          }}
          placeholder="레시피를 검색해보세요"
        ></input>
      </div>
      <div className="searchbar__icon" onClick={onClick}>
        <SearchIcon width="30px" height="30px" fill="#5f8d4e" />
      </div>
    </div>
  );
}

export default Search;
