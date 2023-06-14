import React from "react";
import { Routes, Route } from "react-router-dom";
import CategoriesPreview from "../Categories-Preview/Categories-Preview.components";
import Category from '../Category/Category.component'
const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />}/>
      <Route path=":Category" element={<Category />}/>
    </Routes>
  );
};

export default Shop;
