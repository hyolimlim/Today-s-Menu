import useState from "react";
import SearchBar from "../../components/SearchBar";
import RecipeList from "./RecipeList";
import "../../styles/Design.scss";
import useSWRInfinite from "swr/infinite";
import axios from "axios";

const ACCESS_KEY = "d1f92fd34ae84af7be22";

const fetcher = async (url) => {
  const res = await fetch(url);
  return res.json();
};

const getKey = (pageIndex, prevPageData, food, ingredient) => {
  let startCount = 1;
  let endCount = 20;

  if (pageIndex[0] > 0) {
    startCount += pageIndex[0] * 10;
    endCount += pageIndex[0] * 10;
  }

  // if (food !== null) {
  //   return `http://openapi.foodsafetykorea.go.kr/api/${ACCESS_KEY}/COOKRCP01/json/${startCount}/${endCount}/RCP_NM=당근`;
  // } else if (ingredient !== null) {
  //   return `http://openapi.foodsafetykorea.go.kr/api/${ACCESS_KEY}/COOKRCP01/json/${startCount}/${endCount}/RCP_PARTS_DTLS=당근`;
  // } else {
  // }
  return `http://openapi.foodsafetykorea.go.kr/api/${ACCESS_KEY}/COOKRCP01/json/${startCount}/${endCount}`;
};

function Main() {
  // input값 설정
  // let food = "메롱";
  // let ingredient = "하하";

  const { data, size, setSize } = useSWRInfinite(
    (...args) => getKey(...args),
    fetcher,
    {
      revalidateIfStale: false,
      revalidateFirstPage: false,
      revalidateOnFocus: false,
    }
  );

  // useEffect(() => {
  //   if (intersecting) setSize(size + 1);
  // }, [intersecting]);
  // console.log(data);

  //데이터에서 레시피 부분 데이터만 추출
  const RecipeData = data?.map((item) => item.COOKRCP01);

  //레시피 데이터를 하나의 배열로 합침.
  const mergeRecipeArr = RecipeData?.map((item) => item.row).flat();

  console.log(data);

  return (
    <main className="main">
      <div className="searchbar">
        <select>
          <option value="음식명">음식명</option>
          <option value="재료명">재료명</option>
        </select>
        <div className="searchbar__input">
          <input
            className="input"
            placeholder="궁금한 레시피를 검색해보세요"
          ></input>
        </div>
        <div className="searchbar__icon"></div>
      </div>
      {/* <button onClick={() => setSize(size + 1)}>Load More</button> */}
      <div className="introduce">
        <h1>레시피 전체보기</h1>
      </div>
      <div className="recipelist">
        {mergeRecipeArr?.map((recipe) => (
          <RecipeList key={recipe.RCP_SEQ} data={recipe} />
        ))}
      </div>
    </main>
  );
}

export default Main;
