import useSWRInfinite from "swr/infinite";
import { useState, useEffect, useContext } from "react";
import { RecipeContext } from "../store/RecipeProvider";

export function useGetData() {
  const ACCESS_KEY = "d1f92fd34ae84af7be22";
  const url = `http://openapi.foodsafetykorea.go.kr/api/${ACCESS_KEY}/COOKRCP01/json`;

  const { recipe, setRecipe } = useContext(RecipeContext);

  const [input, setInput] = useState("");
  const [selected, setSelected] = useState("");

  const fetcher = async (url) => {
    const res = await fetch(url);
    return res.json();
  };

  const Getquery = (inputData, selectedData) => {
    setInput(inputData);
    setSelected(selectedData);
  };

  const getKey = (pageIndex, prevPageData) => {
    if (prevPageData && prevPageData?.COOKRCP01.length === 0) return null;

    let startCount = 1;
    let endCount = 20;

    if (pageIndex > 0) {
      startCount += pageIndex * 10;
      endCount += pageIndex * 10;
    }
    if (input && selected === "재료명") {
      return `${url}/${startCount}/${endCount}/RCP_PARTS_DTLS=${input}`;
    } else if (input && selected === "음식명") {
      return `${url}/${startCount}/${endCount}/RCP_NM=${input}`;
    }
    return `${url}/${startCount}/${endCount}`;
  };

  const { data, error, size, setSize, isValidating } = useSWRInfinite(
    getKey,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateFirstPage: false,
      revalidateOnFocus: false,
      suspense: true,
    }
  );

  //데이터에서 레시피 부분 데이터만 추출
  const recipeData = data?.map((item) => item.COOKRCP01);

  //레시피 데이터를 하나의 배열로 합침
  const flatRecipeArr = recipeData?.map((item) => item.row).flat();

  useEffect(() => {
    setRecipe(flatRecipeArr);
  }, [data]);

  const isNodata = recipeData[0].total_count === "0";

  const isLoading = (!data && !error) || isValidating;

  const isEndData = flatRecipeArr.length === Number(recipeData[0].total_count);

  return { Getquery, setSize, size, isLoading, isNodata, isEndData };
}
