import Main from "./components/layouts/dashboard/Main";
import Index from "./pages/Index"

import { Routes, Route, Outlet } from "react-router-dom";
import Articles from "./pages/Article/Articles"
import ArticleCreate from "./pages/Article/ArticleCreate";

const App = () => {
  return (
    <>
      <Main>
        <Routes>
          <Route path="" element={<Index />} />
          <Route path="articles" element={<Articles />}>
            <Route path="create" element={<ArticleCreate />} />
          </Route>
        </Routes>
      </Main>
    </>
  );
};

export default App;
