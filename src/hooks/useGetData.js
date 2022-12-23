import useSWRInfinite from "swr/infinite";
import { useState, useEffect, useContext } from "react";
import { RecipeContext } from "../store/RecipeProvider";

export function useGetData() {
  const ACCESS_KEY = "d1f92fd34ae84af7be22";
  const url = `http://openapi.foodsafetykorea.go.kr/api/${ACCESS_KEY}/COOKRCP01/json`;

  const {
    recipe,
    setRecipe,
    total,
    setTotal,
    input,
    option,
    isNodata,
    setIsNodata,
    isLoadingData,
    setIsLoadingData,
    isEndData,
    setIsEndData,
  } = useContext(RecipeContext);

  const fetcher = async (url) => {
    const res = await fetch(url);
    return res.json();
  };

  const getKey = (pageIndex, previousPageData) => {
    if (previousPageData && previousPageData.COOKRCP01.row.length === 0)
      return null;

    const start = pageIndex === 0 ? 0 : pageIndex + pageIndex * 20;
    const end = (pageIndex + 1) * 20;

    Number(total) - recipe.length < 1
      ? setIsEndData(true)
      : setIsEndData(false);

    if (!input) {
      return `${url}/${start}/${end}`;
    } else if (input && option && option === "재료명") {
      return `${url}/${start}/${end}/RCP_PARTS_DTLS=${input}`;
    } else if (input && option && option === "음식명") {
      return `${url}/${start}/${end}/RCP_NM=${input}`;
    }
  };

  const { data, error, size, setSize, isLoading, isValidating } =
    useSWRInfinite(getKey, fetcher, {
      revalidateIfStale: false,
      revalidateFirstPage: false,
      revalidateOnFocus: false,
      suspense: true,
    });

  useEffect(() => {
    const recipeData = data.map((item) => item.COOKRCP01);
    setRecipe(recipeData?.map((item) => item.row).flat());
    setTotal(recipeData[0].total_count);
    setIsNodata(recipeData[0].total_count === "0");
    setIsLoadingData((!data && !error && input) || isLoading || isValidating);
    setIsEndData(
      Number(total) < 10 || recipe.length >= Number(total) ? true : false
    );
  }, [data]);

  console.log(data, recipe.length, Number(total), isEndData);

  return {
    setSize,
    size,
    recipe,
    isLoadingData,
    isNodata,
    isEndData,
    isLoading,
  };
}
