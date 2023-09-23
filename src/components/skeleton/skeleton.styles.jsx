import styled, { keyframes } from "styled-components";

const shimmering = keyframes`

0% {
    transform: translateX(-180%);
  }

  50% {
    transform: translateX(-80%);
  }

  100% {
    transform: translateX(180%);
  }

`;

export const SkeletonContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  animation: ${shimmering} 2.3s infinite;
`;

export const SkeletonDiv = styled.div`
  width: 50%;
  height: 100%;
  background: rgba(255, 255, 255, 0.3);
  box-shadow: 0 0 30px 30px rgba(255, 255, 255, 0.05);
  transform: skewX(10deg);
`;
