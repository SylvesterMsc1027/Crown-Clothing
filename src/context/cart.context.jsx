import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {
  // Check if the product is exist
  const exixtingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  // if it exist what to do add only quantity value to the same product
  if (exixtingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? {
            ...cartItem,
            quantity: cartItem.quantity + 1,
            price: cartItem.price * 1,
          }
        : cartItem
    );
  } else {
    // if not exist add the new product to the array
    return [...cartItems, { ...productToAdd, quantity: 1 }];
  }
};

const removeItemCart = (cartItems, cartItemtoremove) => {
  // Check if the product is exist
  const exixtingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemtoremove.id
  );

  if (exixtingCartItem.quantity == 1) {
    return cartItems.filter((item) => item.id != cartItemtoremove.id);
  }

  // if it exist what to do add only quantity value to the same product
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemtoremove.id
      ? {
          ...cartItem,
          quantity: cartItem.quantity - 1,
        }
      : cartItem
  );
};
const clearCartItem = (cartItems, cartItemtoremove) => {
  return cartItems.filter((item) => item.id != cartItemtoremove.id);

};

export const CartContext = createContext({
  iscartopen: false,
  setiscartopen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemToCart: () => {},
  removeCartFromItem: () => {},
  cartcount: 0,
  cartTotal:0,
});

export const CartProvider = ({ children }) => {
  const [iscartopen, setiscartopen] = useState(false);
  const [cartItems, setcartItems] = useState([]);
  const [cartcount, setcartcount] = useState(0);
  const [cartTotal, setcartTotal] = useState(0)

  useEffect(() => {
    const newcartcount = cartItems.reduce(
      (currenttotal, cartItem) => currenttotal + cartItem.quantity,
      0
    );
    setcartcount(newcartcount);
  }, [cartItems]);

  useEffect(() => {
    const cartTotal = cartItems.reduce(
      (currenttotal, cartItem) => currenttotal + cartItem.quantity * cartItem.price,
      0
    );
    setcartTotal(cartTotal);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setcartItems(addCartItem(cartItems, productToAdd));
  };
  const removeItemToCart = (cartItemtoremove) => {
    setcartItems(removeItemCart(cartItems, cartItemtoremove));
  };
  const removeCartFromItem = (cartItemtoremove) => {
    setcartItems(clearCartItem(cartItems, cartItemtoremove));
  };

  const value = {
    setiscartopen,
    iscartopen,
    addItemToCart,
    cartItems,
    removeItemToCart,
    cartcount,
    removeCartFromItem,
    cartTotal
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
