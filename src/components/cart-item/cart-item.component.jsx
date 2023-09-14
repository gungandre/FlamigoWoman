import { ContainerCartItem, DescContainer } from "./cart-item.styles";
import { Link } from "react-router-dom";

const formatter = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
});

const CartItem = ({ product }) => {
  const { name, img, Price } = product;
  return (
    <ContainerCartItem>
      <Link to={`/shop/${name}`}>
        <img src={`produk/${img[0]}`} alt={`${img[0]}`} />
      </Link>

      <DescContainer>
        <span> {name.toUpperCase()}</span>

        <span>{formatter.format(Price)}</span>
      </DescContainer>
    </ContainerCartItem>
  );
};

export default CartItem;
