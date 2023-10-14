import styled, { keyframes } from "styled-components";

export const ConImg = styled.div`
  width: 100%;
  height: auto;
  overflow: hidden;
  z-index: 1;
`;

export const SoldOut = styled.div`
  padding: 5px;
  width: auto;
  height: auto;
  background-color: white;
  color: #252525;
  position: absolute;
  font-size: 12px;
  top: 5px;
  left: 5px;

  z-index: ${(props) => (props.burgerButton ? "0" : "1")};
  display: ${(props) => (props.sold ? "block" : "none")};
`;

const slideIn = keyframes`
  from {
    transform: translateY(100%);
   opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const ContainerCartItem = styled.div`
  max-width: 300px;
  max-height: 500px;
  position: relative;
  margin-bottom: ${(state) => (state.marginBottom ? "40px" : "10px")};

  animation: ${slideIn} 1s ease;

  ${ConImg} {
    img {
      max-width: 100%;
      max-height: 100%;
      cursor: pointer;
      transition: transform 0.3s ease;
      object-fit: cover;

      &:hover {
        transform: scale(1.2);

        /* Memastikan gambar mengisi seluruh area container */
      }
    }
  }
`;

export const DescContainer = styled.div`
  margin-top: 10px;
  height: 45px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-content: space-between;
  span {
    font-size: 14px;
    text-align: center;
    margin-top: auto;
  }
`;
