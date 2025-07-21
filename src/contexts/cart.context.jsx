// why we need a context for the cart??
// 1. to store globally, if the cart is open or not
// also
// 2. to store gloablly, the cart-items and their counts
// also
// 3. to store globally, the total count of all items

import { createContext, useState } from "react";

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => null,
});

// simple wrapper for the cart context
// first make the above context variables, the state variables too
// then initialize them and make the value ready
// and then
// pass it to everyone
export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const value = { isCartOpen, setIsCartOpen };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

//! final, most forgotten step
//! wrapping it around in both app.js and index.js