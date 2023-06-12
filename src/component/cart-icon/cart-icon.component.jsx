import React, { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import "./cart-icon.style.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/cart.svg";

const CartIcon = () => {
  const { iscartopen,setiscartopen,cartcount } = useContext(CartContext);

  return (
    <div className="cart-icon-container" onClick={()=>{setiscartopen(!iscartopen)}}>
      <ShoppingIcon className="shopping-icon"  />
      <span className="item-count">{cartcount}</span>
    </div>
  );
};

export default CartIcon;
