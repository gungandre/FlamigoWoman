import styled from "styled-components";
import CartItem from "../../components/cart-item/cart-item.component";

export const HomeContainer = styled.div`
  padding: 70px 50px;
  display: grid;

  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 30px;
  justify-items: center;
`;

export const CartItemStyled = styled(CartItem)`
  align-self: center;
`;
