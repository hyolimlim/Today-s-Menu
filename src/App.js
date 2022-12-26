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
    <ErrorBoundary fallback={<Error />}>
      <RecipeProvider>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
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
            </Routes>
          </div>
        </BrowserRouter>
      </RecipeProvider>
    </ErrorBoundary>
  );
}

export default App;
