import React from "react";
import { render } from "react-dom";
import "./index.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./contexts/user.context";
import { ProductsProvider } from "./contexts/products.context";
import { CartProvider } from "./contexts/cart.context";

const rootElement = document.getElementById("root");

// UserProvider is the context wrapper component used for the context,
// we need to wrap the whole App.js inside this UserProvider component,
// why? so that context's global data can be accessed by all the other components
// same with ProductsProvider
render(
  //wrapping in routers
  //and
  //wrapping inside the created global contexts
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ProductsProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </ProductsProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
  rootElement
);
