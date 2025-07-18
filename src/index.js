import React from "react";
import { render } from "react-dom";
import "./index.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./contexts/user.context";
import { ProductsProvider } from "./contexts/products.context";

const rootElement = document.getElementById("root");

// UserProvider is the context wrapper component used for the context,
// we need to wrap the whole App.js inside this UserProvider component,
// why? so that context's global data can be accessed by all the other components
render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ProductsProvider>
          <App />
        </ProductsProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
  rootElement
);
