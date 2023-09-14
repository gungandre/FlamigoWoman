import { ButtonSizeContainer } from "./button-size.styles";

const ButtonSize = ({ children, activeButton, clikHandler, data, size }) => {
  return (
    <ButtonSizeContainer
      onClick={() => clikHandler(data, size)}
      activeButton={activeButton}
    >
      <div>{children}</div>
    </ButtonSizeContainer>
  );
};

export default ButtonSize;
