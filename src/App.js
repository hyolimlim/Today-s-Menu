import { BrowserRouter, Route, Routes } from "react-router-dom";
import Notfound from "./pages/Notfound";
import RecipeDetail from "./pages/RecipeDetail/RecipeDetail";
import Header from "./components/Header";
import "./styles/Design.scss";
import React, { Suspense } from "react";
import MainSkeleton from "./pages/Main/MainSkeleton";
import RecipeProvider from "./store/RecipeProvider";

const Main = React.lazy(() => import("./pages/Main/Main"));

function App() {
  return (
    <RecipeProvider>
      <BrowserRouter>
        <div className="warp">
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <Suspense fallback={<MainSkeleton />}>
                  <Main />
                </Suspense>
              }
            />
            <Route path="/:id" element={<RecipeDetail />} />
            <Route element={<Notfound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </RecipeProvider>
  );
}

export default App;
