import styled, { keyframes } from "styled-components";

import {
  QtyContainer,
  GridQtyContainer,
  Minus,
  Plus,
  Qty,
} from "../product/product.styles";

export const QtyContainer2 = styled(QtyContainer)`
  @media screen and (max-width: 700px) {
    width: 100px;
    height: 35px;
  }
`;

export const GridQtyContainer2 = styled(GridQtyContainer)`
  @media screen and (max-width: 700px) {
    height: 35px;
  }
`;

export const Minus2 = styled(Minus)`
  @media screen and (max-width: 700px) {
    height: 35px;
  }
`;

export const Qty2 = styled(Qty)`
  @media screen and (max-width: 700px) {
    height: 35px;
  }
`;

export const Plus2 = styled(Plus)`
  @media screen and (max-width: 700px) {
    height: 35px;
  }
`;

export const CartContainer = styled.div`
  width: 1000px;
  height: auto;

  margin: 150px auto;

  @media screen and (max-width: 1100px) {
    width: 90%;
  }

  @media screen and (max-width: 700px) {
    margin: 100px auto;
  }
`;

export const ImgContainer = styled.div`
  position: relative;
  max-width: 130px;
  height: auto;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const DivCheckout = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
`;

export const OrderNoteContainer = styled.div`
  width: 40%;

  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;
export const OrderNoteContainer2 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-grow: none;
`;

export const Remove = styled.div`
  margin-top: 5px;
  cursor: pointer;

  width: 60px;
`;

const LineAnimation = keyframes`
  0% {
    width: 100%;
  }

  100% {
    width: 0;

  }
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #000;
  ${Remove}:hover & {
    animation: ${LineAnimation} 0.5s ease-in-out; /* Atur durasi dan jenis animasi sesuai kebutuhan */
    animation-fill-mode: forwards; /* Untuk menjaga gaya animasi terakhir */
  }
`;

export const Checkout = styled.button`
  cursor: pointer;
  margin-top: 20px;
  align-self: end;
  width: 150px;
  height: auto;
  background-color: black;
  color: white;
  font-size: 14px;
  padding: 15px 20px;

  @media screen and (max-width: 700px) {
    align-self: none;
    width: 100%;
  }
`;

export const CartEmptyContainer = styled.div`
  width: 300px;
  margin: 0 auto;
  margin-top: 35vh;

  text-align: center;

  padding: 20px;
  border-radius: 5px;
`;

export const ContinueShopping = styled.button`
  background-color: black;
  color: white;
  padding: 15px;
  cursor: pointer;
  @media screen and (max-width: 700px) {
    font-size: 13px;
  }
`;
