import { createContext, useState } from "react";

export const RecipeContext = createContext();

export default function RecipeProvider({ children }) {
  const [recipe, setRecipe] = useState([]);
  const [total, setTotal] = useState(99);
  const [input, setInput] = useState("");
  const [option, setOption] = useState("음식명");
  const [isNodata, setIsNodata] = useState(false);
  const [isLoadingData, setIsLoadingData] = useState(false);
  const [isEndData, setIsEndData] = useState(false);

  return (
    <RecipeContext.Provider
      value={{
        recipe,
        setRecipe,
        input,
        setInput,
        total,
        setTotal,
        option,
        setOption,
        isNodata,
        setIsNodata,
        isLoadingData,
        setIsLoadingData,
        isEndData,
        setIsEndData,
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
}
