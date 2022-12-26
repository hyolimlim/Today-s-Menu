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
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div className="warp">
          <Header />
          <Routes>
            <ErrorBoundary fallback={<Error />}>
              <Route
                path="/recipe"
                element={
                  <Suspense fallback={<MainSkeleton />}>
                    <Main />
                  </Suspense>
                }
              />
            </ErrorBoundary>
            <Route path="/recipe/:id" element={<RecipeDetail />} />
          </Routes>
        </div>
      </BrowserRouter>
    </RecipeProvider>
  );
}

export default App;
