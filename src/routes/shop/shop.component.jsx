import { useContext } from "react";
import { ProductsContext } from "../../contexts/products.context";

import ProductCard from "../../components/product-card/product-card.component";
import "./shop.styles.scss";

const Shop = () => {
  //getting the products data from the global products context
  //and not from the json file
  const { products } = useContext(ProductsContext);
  console.log("products", products);

  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Shop;
