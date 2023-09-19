import {
  ContainerCartItem,
  DescContainer,
  SoldOut,
  ConImg,
} from "./cart-item.styles";
import { Link } from "react-router-dom";

const formatter = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
});

const CartItem = ({ product, sold }) => {
  const { name, img, Price } = product;

  return (
    <ContainerCartItem>
      <SoldOut sold={sold}>SOLD OUT</SoldOut>
      <Link to={`/shop/${name}`}>
        <ConImg>
          <img src={`/produk/${img[0]}`} alt={`${img[0]}`} />
        </ConImg>
      </Link>

      <DescContainer>
        <span> {name.toUpperCase()}</span>

        <span>{formatter.format(Price)}</span>
      </DescContainer>
    </ContainerCartItem>
  );
};

export default CartItem;
