import {
  ContainerCartItem,
  DescContainer,
  SoldOut,
  ConImg,
} from "./cart-item.styles";
import { Link } from "react-router-dom";
import { useState } from "react";
import Skeleton from "../skeleton/skeleton.component";
import { useSelector } from "react-redux";
import { selectBurgerButton } from "../../store/burger-buton/burger.selector";
const formatter = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
});

const CartItem = ({ product, sold, marginBottom }) => {
  const { name, img, Price } = product;
  const burgerButton = useSelector(selectBurgerButton);

  const [imageLoading, setImageLoading] = useState(true);

  const handleImageLoad = () => {
    setImageLoading(false);
  };

  return (
    <ContainerCartItem marginBottom={true}>
      {!imageLoading && (
        <SoldOut sold={sold} burgerButton={burgerButton}>
          SOLD OUT
        </SoldOut>
      )}

      <Link to={`/shop/${name}`}>
        <ConImg>
          {imageLoading && <Skeleton />}
          <img
            onLoad={handleImageLoad}
            src={`/produk/${img[0]}`}
            alt={`${img[0]}`}
          />
        </ConImg>
      </Link>

      {!imageLoading && (
        <DescContainer>
          <span> {name.toUpperCase()}</span>

          <span>{formatter.format(Price)}</span>
        </DescContainer>
      )}
    </ContainerCartItem>
  );
};

export default CartItem;
