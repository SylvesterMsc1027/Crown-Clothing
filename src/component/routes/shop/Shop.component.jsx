import React, { useContext } from "react";
import './shop.style.scss'
import { ProductsContext } from "../../../context/Product-Context";
import Productcard from "../../product-card/Product-card.component";
const Shop = () => {
  const {products} = useContext(ProductsContext);
  
  return (
    <div className="products-container">
      {products.map((products)=>(
        <Productcard key={products.id} product={products}/>
      ))}
    </div>
  );
};

export default Shop;
