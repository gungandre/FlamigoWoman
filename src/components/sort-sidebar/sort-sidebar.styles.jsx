import styled, { keyframes } from "styled-components";

const animationSidebarOpen = keyframes`
  
from {

  transform: translateY(100%);

} to {

  transform: translateY(0);


}

`;

const animationSidebarClose = keyframes`
  
from {

  transform: translateY(0);


} to {
  transform: translateY(100%);




}

`;

export const SortSidebarContainer = styled.div`
  width: 100%;
  height: 170px;
  position: fixed;
  background-color: #fff;
  display: hidden;
  bottom: 0;
  left: 0;
  right: 0;

  padding: 0 3%;

  animation: ${(state) =>
      state.open ? animationSidebarOpen : animationSidebarClose}
    0.3s ease-in-out;
  animation-fill-mode: forwards; /* Biarkan elemen tetap di posisi akhir animasi */
  z-index: 99;
`;

export const SortTitleContainer = styled.div`
  width: 100%;
  height: 30%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;
