import Main from "./components/layouts/dashboard/Main";
import Index from "./pages/Index"

import { Routes, Route, Outlet } from "react-router-dom";
import Articles from "./pages/Article/Articles"
import ArticleCreate from "./pages/Article/ArticleCreate";

import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
      <Main>
        <Routes>
          <Route path="" element={<Index />} />
          <Route path="articles" element={<Articles />} />
          <Route path="articles/create" element={<ArticleCreate />} />
        </Routes>
      </Main>

      <ToastContainer />
    </>
  );
};

export default App;
