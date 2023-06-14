import React, { useContext } from "react";

import { CategoriesContext } from "../../../context/categories.Context";
import Categorypreview from "../../Category-preview/CategoryPreview.component";

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  console.log("categoriesMap", categoriesMap);
  return (
    <>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <Categorypreview key={title} title={title} products={products} />
        );
      })}
    </>
  );
};

export default CategoriesPreview;
