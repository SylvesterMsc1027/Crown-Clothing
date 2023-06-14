import React, { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import Button from "../Button/Button";
import "./Product-card.style.scss";

const Productcard = (props) => {
  console.log('props.product',props.product)
  const { name, price, imageUrl } = props.product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => {
    addItemToCart(props.product);
  };
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttontype={"inverted"} onClick={addProductToCart}>
        add to cart
      </Button>
    </div>
  );
};

export default Productcard;
