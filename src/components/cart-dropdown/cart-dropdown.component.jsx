import React from "react";

import Button from "../button/button.component";

import "./cart-dropdown.styles.scss";

const CartDropdown = () => (
  <div className="cart-dropdown-container">
    <div className="cart-items" />
    {/* button to take you to checkout page */}
    <Button>GO TO CHECKOUT</Button>
  </div>
);

export default CartDropdown;
