import React, { createContext, useContext, useEffect, useState } from "react";
import ApiHelper from "../apiHelper";

const CartContext = createContext();

export function useCartContext() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [dataCart, setDataCart] = useState([]);
  const [reloadCart, setReloadCart] = useState(false);

  useEffect(() => {
    ApiHelper("carts", "get").then((res) => {
      setDataCart(res.data);
    });
  }, [reloadCart]);

  return (
    <CartContext.Provider value={(dataCart, setReloadCart, reloadCart)}>
      {children}
    </CartContext.Provider>
  );
}
