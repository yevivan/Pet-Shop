import { Routes, Route } from "react-router-dom";
import HomePage from "./components/Pages/HomePage";
import CartPage from "./components/Pages/CartPage";
import FavoritiesPage from "./components/Pages/FavoritiesPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/favorities" element={<FavoritiesPage />} />
    </Routes>
  );
};
export default AppRoutes;
