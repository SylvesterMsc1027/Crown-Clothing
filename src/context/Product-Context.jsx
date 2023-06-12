import { createContext, useEffect, useState } from "react";
import SHOP_DATA from "../shop-data";
import { addCollectionAndDocument } from "../utils/firebase/firebase";

export const ProductsContext = createContext({
  products: [],
});

export const ProductsProvider = ({ children }) => {
  const [products, setproducts] = useState(SHOP_DATA);
  const value = { products };

  useEffect(() => {
    addCollectionAndDocument("categories", SHOP_DATA);
  }, []);
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
