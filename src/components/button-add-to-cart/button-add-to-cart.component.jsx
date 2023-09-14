import { ButtonAddCartContainer } from "./button-add-to-cart.styles";
import { FlexContainer } from "./button-add-to-cart.styles";

const ButtonAddToCart = ({ children, disabled, clickHandler }) => {
  return (
    <ButtonAddCartContainer onClick={clickHandler} disabled={disabled}>
      <FlexContainer
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {children}
      </FlexContainer>
    </ButtonAddCartContainer>
  );
};

export default ButtonAddToCart;
