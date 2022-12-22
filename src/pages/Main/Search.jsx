import { useState, useCallback, useRef } from "react";
import { useGetData } from "../../hooks/useGetData";
import { SearchIcon } from "../../assets/Index";
import "../../styles/Design.scss";

function Search() {
  const [selected, setSelected] = useState("음식명");
  const [input, setInput] = useState("");

  //엔터 누르면 검색 수정
  const onKeyDown = useCallback((e) => {
    if (e.key === "Enter" && e.target.value.trim().length > 0) {
      setInput(e.target.value.trim());
    }
  }, []);

  const { Getquery } = useGetData();

  return (
    <div className="searchbar">
      <div className="searchbar__inputitem">
        <select
          onChange={(e) => {
            setSelected(e.target.value);
          }}
        >
          <option value="음식명">음식명</option>
          <option value="재료명">재료명</option>
        </select>
        <input
          className="input"
          onKeyDown={onKeyDown}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          placeholder="레시피를 검색해보세요"
        ></input>
      </div>
      <div
        className="searchbar__icon"
        onClick={() => {
          Getquery(input, selected);
        }}
      >
        {/* <button
          onClick={() => {
            Getquery(input, selected);
          }}
        >

        </button> */}
        <SearchIcon width="30px" height="30px" fill="#5f8d4e" />
      </div>
    </div>
  );
}

export default Search;
