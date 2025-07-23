// why we need a context for the cart??
// 1. to store globally, if the cart is open or not
// also
// 2. to store gloablly, the cart-items and their counts
// also
// 3. to store globally, the total count of all items

import { createContext, useState, useEffect } from "react";

// this is the complete 'add to cart' functionality
// returns updated cart items
export const updateCart = (cartItems, productToAdd) => {
  let cartItemsUpdated = null;

  // Check if the product to add already exists in the cart
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  // If the product exists, return a new array with the matching item's quantity increased by 1
  // Other items remain unchanged

  // We use map to create a new array based on cartItems without mutating the original array
  // For each item, if the id matches productToAdd.id, return a new object with quantity increased by 1
  // Otherwise, return the item as is
  // This way, we get a new array with only the matching item updated and others untouched

  // cartItems.map((cartItem) => cartItem) return the array with same cart items,
  // but here we are changing only one item with some condition. thats it
  if (existingCartItem) {
    cartItemsUpdated = cartItems.map(
      (cartItem) =>
        cartItem.id === productToAdd.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 } // increase quantity for matching item
          : cartItem // leave other items as they are
    );

    return cartItemsUpdated;
  }

  productToAdd = { ...productToAdd, quantity: 1 };
  cartItemsUpdated = [...cartItems, productToAdd];
  // If the product is not in the cart, add it with a quantity of 1
  return cartItemsUpdated;
};

//! in the above function, why dont we just extract the item by id, edit it and then add it back to same place where it belongs?
//! coz, changing the original array directly wont render changes, and makes code less declarative, breaking one of react's rules
//! so mutating through array methods is the safe and preferred method

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => null,
  cartItems: [],
  setCartItems: () => null,
  cartItemCount: 0,
  setCartItemCount: () => null,
});

// simple wrapper for the cart context
// first make the above context variables, the state variables too
// then initialize them and make the value ready
// and then
// pass it to everyone
export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartItemCount, setCartItemCount] = useState(0);

  // runs every time the cartItems array changes
  // and sets the correct cartItemCount
  useEffect(() => {
    let count = 0;
    for (const cartItem of cartItems) {
      count += cartItem.quantity;
    }
    setCartItemCount(count);
  }, [cartItems]);

  const addItemToCart = (product) =>
    setCartItems(updateCart(cartItems, product));

  // Preparing the value object
  // why used addItemToCart instead of setCartItems
  // setCartItems is critical, people can misuse and change cart items
  // so adding here its reflection
  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    cartItemCount,
    setCartItemCount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

//! final, most forgotten step
//! wrapping it around in both app.js and index.js
