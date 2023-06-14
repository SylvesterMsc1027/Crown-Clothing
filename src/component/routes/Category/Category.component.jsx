import React, { useContext, useEffect, useState } from "react";
import { CategoriesContext } from "../../../context/categories.Context";
import { useParams } from "react-router-dom";
import "./category.style.scss";
import Productcard from "../../product-card/Product-card.component";

const Category = () => {
  const { Category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [product, setProduct] = useState(categoriesMap[Category]);
  useEffect(() => {
    setProduct(categoriesMap[Category]);
  }, [Category, categoriesMap]);
  return (
    <div className="category-container">
      {product &&
        product.map((product) => (
          <Productcard key={product.id} product={product} />
        ))}
    </div>
  );
};

export default Category;
