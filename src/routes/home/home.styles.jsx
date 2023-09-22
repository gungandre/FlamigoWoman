import styled from "styled-components";
import CartItem from "../../components/cart-item/cart-item.component";

import { useInView } from "react-intersection-observer";

export const HomeContainer = styled.div`
  padding: 70px 50px;
  display: grid;

  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 30px;
  justify-items: center;

  @media screen and (max-width: 999px) {
    grid-template-columns: 1fr 1fr 1fr;
    padding: 50px 30px;
  }

  @media screen and (max-width: 699px) {
    grid-template-columns: 1fr 1fr;
    padding: 50px 10px;
  }
`;

export const CartItemStyled = styled(CartItem)`
  align-self: center;
`;

export const LazyLoadElement = ({ product, sold }) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Membuat elemen terload hanya saat pertama kali masuk ke viewport
  });

  return (
    <div ref={ref} inView={inView}>
      {inView ? <CartItemStyled product={product} sold={sold} /> : null}
    </div>
  );
};
