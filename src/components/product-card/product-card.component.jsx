import "./product-card.styles.scss";
import Button from "../button/button.component";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

//this component helps in displaying each product in the shop route
const ProductCard = ({ product }) => {
  const { addItemToCart } = useContext(CartContext);

  const { name, price, imageUrl } = product;
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{'$' + price}</span>
      </div>
      <Button buttonType="inverted" onClick={() => addItemToCart(product)}>
        Add to cart
      </Button>
    </div>
  );
};

export default ProductCard;
