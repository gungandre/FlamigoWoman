import styled, { keyframes } from "styled-components";

export const CartContainer = styled.div`
  width: 60%;
  height: 500px;

  margin: 150px auto;
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
`;

export const OrderNoteContainer = styled.div`
  width: 40%;
`;
export const OrderNoteContainer2 = styled.div`
  width: 40%;
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
`;

export const CartEmptyContainer = styled.div`
  width: auto;
  height: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;

  padding: 20px;
  border-radius: 5px;
`;

export const ContinueShopping = styled.button`
  background-color: black;
  color: white;
  padding: 15px;
  cursor: pointer;
`;
