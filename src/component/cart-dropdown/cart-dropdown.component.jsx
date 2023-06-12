import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import Button from "../Button/Button";
import "./cart-dropdown.style.scss";
import CartItem from "../cart-item/cart-item.component";
import { useNavigate } from "react-router-dom";

const Cartdropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const onclickcheckouthandler = () => {
    navigate('/checkout')
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>

      <Button onClick={onclickcheckouthandler}>Go to checkout</Button>
    </div>
  );
};

export default Cartdropdown;
