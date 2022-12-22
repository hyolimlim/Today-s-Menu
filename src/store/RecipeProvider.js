import { createContext, useState } from "react";

export const RecipeContext = createContext();

export default function RecipeProvider({ children }) {
  const [recipe, setRecipe] = useState([]);

  return (
    <RecipeContext.Provider value={{ recipe, setRecipe }}>
      {children}
    </RecipeContext.Provider>
  );
}
