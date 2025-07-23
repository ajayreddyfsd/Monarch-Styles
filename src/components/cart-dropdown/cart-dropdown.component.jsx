import React from "react";
import { useNavigate } from "react-router-dom";
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

  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    //! why not call useNavigate() here directly, why r we declaring abouve and calling it here
    //! coz of react hooks 101
    //! inside any component, hook always needs to be called at the top level and not inside nested function
    //! thats why we are calling it in top level as above, but using it in this nested function smartly

    //! also why not use simply Link-tag, why useNavigate()
    //! if u just want internal navigation, use Link tag
    //! if u need to do something before the navigation, make a function like this to do whatever u wanna do and then use useNavigate for internal navigation
    navigate("/checkout");
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((cartItem) => {
          return <CartItem cartItem={cartItem}></CartItem>;
        })}
      </div>
      {/* button to take you to checkout page */}
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
