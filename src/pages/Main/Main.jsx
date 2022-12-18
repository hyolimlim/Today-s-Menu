import React from "react";
import SearchBar from "../../components/SearchBar";
import RecipeList from "./RecipeList";
import "../../styles/Design.scss";
import useSWR from "swr";
import axios from "axios";

function Main() {
  const url = `http://openapi.foodsafetykorea.go.kr/api/d1f92fd34ae84af7be22/COOKRCP01/json/1/5`;

  const fetcher = (url) => axios.get(url).then((res) => res.data);

  const { data, error, isLoading } = useSWR(url, fetcher);

  if (isLoading) {
    return <div>loading...</div>;
  }

  const { row } = data.COOKRCP01;
  console.log(row);

  return (
    <main className="main">
      <SearchBar />
      <RecipeList />
      {/* {row.map((recipe) => {
        return <RecipeList recipe={recipe} />;
      })} */}
    </main>
  );
}

export default Main;
