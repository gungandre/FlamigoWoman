import styled from "styled-components";

export const ProductContainer = styled.div`
  width: 100%;
  height: auto;
  margin-top: 100px;
  padding: 50px 50px;

  @media screen and (max-width: 999px) {
    padding: 0px;
  }

  @media screen and (max-width: 999px) {
    padding: 0px;
    margin-top: 60px;
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 20% 40% 40%;

  @media screen and (max-width: 1200px) {
    grid-template-columns: 10% 50% 40%;
  }

  @media screen and (max-width: 999px) {
    grid-template-columns: 100%;
  }
`;

export const ImgContainer = styled.div`
  padding: 0px;
  width: 100%;
  height: 100%;
  position: relative;

  /* &:not(:first-child) {
    margin-top: 25px;
  } */

  /* @media screen and (max-width: 999px;) {
    padding: 0px;
  } */

  img {
    max-width: 100%;
    max-height: 100%;
  }
`;

export const Description = styled.div`
  padding-left: 75px;
  padding-right: 75px;
  text-align: left;
  line-height: 25px;

  color: #424242;

  h1 {
    font-size: 20px;
  }

  @media screen and (max-width: 1200px) {
    padding-left: 30px;
    padding-right: 30px;
  }

  @media screen and (max-width: 999px) {
    margin-top: 50px;
  }

  @media screen and (max-width: 699px) {
    font-size: 14px;
    h1 {
      font-size: 18px;
    }

    padding-left: 20px;
    padding-right: 20px;
  }
`;

export const ImgPrev = styled.div`
  width: 70px;
  height: auto;

  position: sticky;
  top: 120px;

  @media screen and (max-width: 999px) {
    display: none;
  }

  /* position: ${(props) => (props.inview ? "inherit" : "fixed")}; */
`;

export const ImgThumb = styled.div`
  width: 100%;
  height: auto;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s ease-in-out;

  &:not(:first-child) {
    margin-top: 20px;
  }

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }

  @media screen and (max-width: 1200px) {
    width: 80%;
  }

  opacity: ${(props) => (props.active ? 0.5 : "none")};
  border: ${(props) => (props.active ? "1px solid black" : "none")};
  /* &:hover {
    opacity: 0.5;
    border: 1px solid black;
  } */
  img {
    width: 100%;
    height: auto;
  }
`;

export const ButtonContainer = styled.div`
  width: 230px;
  display: flex;
  margin-top: 15px;
  justify-content: space-between;
`;

export const QtyContainer = styled.div`
  width: 130px;
  height: 45px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  display: ${(props) => (props.sold ? "none" : "block")};
`;

export const GridQtyContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

export const Plus = styled.div`
  width: 100%;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  opacity: ${(props) => (props.qty ? "0.4" : "none")};
`;

export const Minus = styled.div`
  width: 100%;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  opacity: ${(props) => (props.qty ? "0.4" : "none")};
`;

export const Qty = styled.div`
  width: 100%;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CheckoutContainer = styled.div`
  display: ${(props) => (props.sold ? "none" : "block")};
`;

export const ButtonCheckout = styled.button`
  width: 100%;
  height: 45px;
  background-color: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: border 0.3s ease-in-out;
  margin-top: 15px;

  &:hover {
    border: 1px solid rgba(0, 0, 0, 0.5);
  }
`;

export const ButtonSizeContainer = styled.div`
  height: 45px;
  width: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border: ${(props) =>
    props.activeButton ? "1.5px solid black" : "1px solid rgba(0, 0, 0, 0.5)"};
  cursor: pointer;
  opacity: ${(props) => (props.activeButton && !props.sold ? "none" : "0.5")};
`;

export const Sold = styled.div`
  display: ${(props) => (props.sold ? "block" : "none")};
`;

export const LineOne = styled.div`
  position: absolute;
  width: 100%;
  height: 1px; /* Atur tinggi garis sesuai keinginan Anda */
  background-color: black; /* Atur warna sesuai keinginan Anda */
  left: 0;
  transform: rotate(45deg);
`;

export const LineTwo = styled.div`
  position: absolute;
  width: 100%;
  height: 1px; /* Atur tinggi garis sesuai keinginan Anda */
  background-color: black; /* Atur warna sesuai keinginan Anda */
  left: 0;
  transform: rotate(-45deg);
`;
