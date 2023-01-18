import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import MainPage from "./components/MainPage/MainPage";
import AddProduct from "./components/Product/AddProduct";
import ProductList from "./components/Product/ProductList";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/products" element={<ProductList />} />
      <Route path="/admin" element={<AddProduct />} />
    </Routes>
  );
};

export default MainRoutes;
