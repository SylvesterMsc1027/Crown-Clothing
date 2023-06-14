import React from "react";
import "./category-preview.style.scss";
import Productcard from "../product-card/Product-card.component";

const Categorypreview = ({ title, products }) => {
  return (
    <div className="category-preview-container">
      <h2>
        <span className="title">{title.toUpperCase()}</span>
      </h2>
      <div className="preview">
        {products
          .filter((_, index) => index < 4)
          .map((products) => (
            <Productcard key={products.id} product={products} />
          ))}
      </div>
    </div>
  );
};

export default Categorypreview;
