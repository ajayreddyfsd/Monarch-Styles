import { createContext, useState } from "react";

// we are trying to import a JSON file containing an array of objects.
// when we put the below command, the data is auto-parsed into a usable JS array called PRODUCTS (can name anything).
// We can now use PRODUCTS like a normal array in our component.
import PRODUCTS from "../shop-data.json";

//below is the basic context code and the context's wrapper code
export const ProductsContext = createContext({
  products: [],
  setProducts: () => null,
});

export const ProductsProvider = ({ children }) => {
  //initializing the products
  const [products, setProducts] = useState(PRODUCTS);

  //preparing the value which is to be transmitted
  const value = { products, setProducts };

  //done
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};

//two very very important things not to forget is
//once u write any context, u need to wrap it in 2 places
//only then context writing is complete

//1. in index.js, wrap around app.js
//2. in app.js, wrap around the routes

// incase of multiple contexts wrapping, order doesnt matter if the contexts are indep to each other
// else, that matters as well
