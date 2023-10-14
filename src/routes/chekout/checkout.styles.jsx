import styled, { keyframes } from "styled-components";

export const Background = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: black;
  opacity: 0.4;
  z-index: 100;
`;

export const CheckoutContainer = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: 55% 45%;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 100%;
    height: auto;
  }
`;

export const CheckoutGrid = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
  height: 100vh;
`;

export const ItemContainer = styled.div`
  max-width: 680px;
  padding: 60px 40px;

  margin-left: auto;
  @media screen and (max-width: 1000px) {
    margin: 0px auto;
    padding: 0px 40px;
  }

  @media screen and (max-width: 750px) {
    padding: 0px 20px;
  }
`;

export const ItemContainer2 = styled.div`
  max-width: 400px;
  padding: 60px 40px;

  margin-right: auto;
`;

export const CheckoutGrid2 = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f0efef;
`;

export const TitleContainer = styled.div`
  text-align: center;
`;

export const H2 = styled.h2`
  font-size: 20px;
  letter-spacing: 2px;
`;

export const CheckboxContainer = styled.div``;

export const StepContainer = styled.div`
  margin: 0px auto;
  margin-top: 20px;
  width: 250px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  small {
    font-size: 12px;
    opacity: 0.6;
  }
`;

export const ContactContainer = styled.div`
  width: 100%;
  margin-top: 40px;
`;

export const ShippingContainer = styled.div`
  width: 100%;
  margin-top: 25px;
`;

export const SelectContainer = styled.div`
  width: 100%;

  margin-top: 15px;
`;

export const Select = styled.select`
  background-color: #fff;
  padding: 0 8px;
  border-radius: 5px;
  height: 50px;
  font-size: 14px;
  width: 100%;
  font-family: inherit;
  padding-top: 11px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  transition: border 0.3s ease-in-out;
  outline: none;

  &:focus {
    border: 1px solid rgba(0, 0, 0, 1);
  }
`;

export const Input = styled.input`
  background-color: #fff;
  padding: 0 8px;
  border-radius: 5px;
  height: 50px;
  font-size: 14px;
  flex-grow: 0;
  width: 100%;

  font-family: inherit;
  padding-top: 11px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  transition: border 0.3s ease-in-out;
  outline: none;
  padding-left: 11px;

  &:focus {
    border: 1px solid rgba(0, 0, 0, 1);
  }
`;

export const Label = styled.div`
  font-size: 13px;
  font-family: inherit;
  padding: 0 13px;
  padding-top: 7px;
  position: absolute;
  opacity: 0.8;
`;

export const InputContainer = styled.div`
  width: 100%;

  margin-top: 15px;
`;

export const Button = styled.button`
  background-color: black;
  color: white;
  height: 55px;
  width: 100%;
  margin-top: 15px;
  cursor: pointer;
`;

export const ProductsContainer = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

export const ProductContainer = styled.div`
  height: 64px;
  width: 100%;
  display: flex;
  position: relative;
`;

export const ImgContainer = styled.div`
  position: relative;
  padding: 0px 5px;
  height: 100%;
  width: 53.3px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  background-color: #e0dede;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const QtyContainer = styled.div`
  width: 21px;
  height: 21px;
  border-radius: 50%;
  background-color: #0000008f;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: -10px;
  right: -10px;

  div {
    color: white;
    font-size: 12px;
    font-weight: normal;
  }
`;

const fade = keyframes`

from{
  opacity: 0;
} to{
  opacity: 1;
}

`;

export const FadeTranstition = styled.div`
  display: ${(props) => (props.index ? "block" : "none")};
  opacity: ${(props) => (props.index ? "1" : "0")};
  animation: ${fade} 0.5s ease-in-out;
`;

export const ButtonToggleAccount = styled.button`
  padding: 0px 5px;

  cursor: pointer;
  border: none;
  border-radius: 5px;

  svg {
    transition: transform 0.3s ease-in-out;
    transform: ${(props) => (props.click ? "rotate(180deg)" : "none")};
  }
`;
const animationHr = keyframes`
from{
  margin-top: 15px;
} to {
  margin-top: 15px;
}

`;
const animationCloseHr = keyframes`
from{
  margin-top: 30px;
} to {
  margin-top: 15px;
}`;
export const Hr = styled.hr`
  opacity: 0.3;
  margin-top: 15px;
  animation: ${(state) => (state.click ? animationHr : animationCloseHr)} 0.3s
    ease-in-out;

  animation-fill-mode: forwards;
`;

const logOutAnimation = keyframes`
from{
  transform: translateY(100);
  opacity: 0;

} to {
  transform: translateX(0);
  opacity: 1;

}

`;

export const LogOut = styled.div`
  font-size: 14px;
  margin-bottom: 5px;
  margin-top: 10px;
  cursor: pointer;
  animation: ${(props) => props.click && logOutAnimation} 0.3s ease-in-out
    forwards;
  display: ${(props) => (props.click ? "block" : "none")};
`;

export const ItemDropdownContainer = styled.div`
  width: 100%;
  background-color: #f6f6f6;
  height: 67.5px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 750px) {
    padding: 0px 20px;
  }
`;

export const ItemDropdownFlexContainer = styled.div`
  max-width: 600px;
  margin: auto;
  display: flex;
  line-height: 67.5px;
  justify-content: space-between;

  @media screen and (max-width: 750px) {
    max-width: 640px;
  }
`;

export const Span = styled.span`
  font-size: 14px;
  svg {
    transition: transform 0.3s ease-in-out;
    transform: ${(props) => (props.click ? "rotate(180deg)" : "none")};
  }
`;

export const ItemDropdownContentContainer = styled.div`
  width: 100%;

  overflow: hidden;
  transition: height 0.3s ease-in-out;
  height: ${({ click, tinggi }) => (click ? `${tinggi}px;` : `0px`)};

  background-color: #f0efef;
`;

export const ItemDropdownContent = styled.div`
  margin: 0px auto;
  padding: 20px 0px;
  max-width: 600px;
  @media screen and (max-width: 750px) {
    max-width: 680px;
    padding: 20px 20px;
  }
`;

export const TotalContainer = styled.div`
  @media screen and (max-width: 750px) {
  }
`;
