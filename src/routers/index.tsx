import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Page404 } from "../page/404";
import { HomePage } from "../page/home";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
