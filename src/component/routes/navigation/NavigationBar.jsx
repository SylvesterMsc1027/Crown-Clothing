import React, { useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import CartIcon from '../../cart-icon/cart-icon.component'
import Cartdropdown from '../../cart-dropdown/cart-dropdown.component'
import { UserContext } from "../../../context/user-context";
import { CartContext } from "../../../context/cart.context";
import "./navigation.styles.scss";
import { ReactComponent as CrownSvg } from "../../../assets/crown.svg";
import {signOutUser} from '../../../utils/firebase/firebase'

export default function NavigationBar() {
  const { currentUser } = useContext(UserContext);
  const { iscartopen} = useContext(CartContext);

  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrownSvg className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          <Link className="nav-link" to="/Contact">
            Contact
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>Sign Out</span>
          ) : (
            <Link className="nav-link" to="/auth">
              SignIn
            </Link>
          )}

          <CartIcon />
        </div>
        {iscartopen && <Cartdropdown />}
        
      </div>
      <Outlet />
    </>
  );
}
