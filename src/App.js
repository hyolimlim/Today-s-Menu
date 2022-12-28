import { BrowserRouter, Route, Routes } from "react-router-dom";
import RecipeDetail from "./pages/RecipeDetail/RecipeDetail";
import Header from "./components/Header";
import Error from "./pages/Error";
import "./styles/Design.scss";
import React, { Suspense } from "react";
import MainSkeleton from "./pages/Main/MainSkeleton";
import RecipeProvider from "./store/RecipeProvider";
import { ErrorBoundary } from "react-error-boundary";

const Main = React.lazy(() => import("./pages/Main/Main"));

function App() {
  return (
    <RecipeProvider>
      <div className="warp">
        <Header />
        <ErrorBoundary fallback={<Error />}>
          <Suspense fallback={<MainSkeleton />}>
            <Main />
          </Suspense>
        </ErrorBoundary>
      </div>
    </RecipeProvider>
  );
}

export default App;
