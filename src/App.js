import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import Main from "./pages/Main/Main";
import Notfound from "./pages/Notfound";
import Error from "./pages/Error";
import RecipeDetail from "./pages/RecipeDetail";
import Header from "./components/Header";
import "./styles/Design.scss";

function App() {
  return (
    <ErrorBoundary FallbackComponent={<Error />}>
      <BrowserRouter>
        <div className="warp">
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/:id" element={<RecipeDetail />} />
            <Route element={<Notfound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
