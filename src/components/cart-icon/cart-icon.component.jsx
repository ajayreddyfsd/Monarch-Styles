import { useContext } from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { CartContext } from "../../contexts/cart.context";

import "./cart-icon.styles.scss";

//there are three components
//cart-icon, cart-dropdown, cart-item
//cart-icon is what is displayed on the webpage once user signs in
//cart-dropdown is shown is when user clicks the cart icon, in a toggling way
//cart-item is the item that does into cart dropdown
const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  //!below function is the main for toggling the cart icon
  //!once the div is clicked, the function activates, and sets the variable to the opposite of what it was
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    // returning a simple div which has an image and an item-count
    // css styling is done such that item-count is displayed at the centre of that image
    // this component, we will use in the navigation component
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;

//! cart icon vs cart dropdown
//! one is what is displayed on the webpage
//! and the other is what gets shown as dropdown menu once u click the icon, else is hidden
