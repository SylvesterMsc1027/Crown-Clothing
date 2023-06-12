import React from "react";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import "./checkout-item.style.scss";

const CheckOutitem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const { removeCartFromItem, addItemToCart, removeItemToCart } =
    useContext(CartContext);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt="" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow"
         onClick={() => {
            removeItemToCart(cartItem);
          }}>&#10094;</div>
        <span className="value">{quantity}</span>
        <div className="arrow"
         onClick={() => {
            addItemToCart(cartItem);
          }}>&#10095;</div>
      </span>
      <span className="price">{price}</span>
      <div
        className="remove-button"
        onClick={() => {
          removeCartFromItem(cartItem);
        }}
      >
        &#10005;
      </div>
    </div>
  );
};

export default CheckOutitem;
