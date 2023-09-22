import styled, { keyframes } from "styled-components";

const spinAnimation = keyframes`
  100% {
    transform: rotate(1turn);
  }
`;

export const SpinnerContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const CustomLoader = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: radial-gradient(farthest-side, #989292 94%, #0000) top/16px 16px
      no-repeat,
    conic-gradient(#0000 30%, #989292);
  -webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 16px), #000 0);
  animation: ${spinAnimation} 1s infinite linear;

  @media screen and (max-width: 700px) {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: radial-gradient(farthest-side, #989292 94%, #0000) top/8px 8px
        no-repeat,
      conic-gradient(#0000 30%, #989292);
    -webkit-mask: radial-gradient(
      farthest-side,
      #0000 calc(100% - 8px),
      #000 0
    );
  }
`;
