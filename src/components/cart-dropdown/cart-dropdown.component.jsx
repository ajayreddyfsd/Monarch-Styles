import React from "react";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import CartItem from "../cart-item/cart-item.component";
import Button from "../button/button.component";
import "./cart-dropdown.styles.scss";

//there are three components
//cart-icon, cart-dropdown, cart-item
//cart-icon is what is displayed on the webpage once user signs in
//cart-dropdown is shown is when user clicks the cart icon, in a toggling way
//cart-item is the item that does into cart dropdown
const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((cartItem) => {
          return <CartItem cartItem={cartItem}></CartItem>;
        })}
      </div>
      {/* button to take you to checkout page */}
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
