import styled, { keyframes } from "styled-components";

const animationSidebarOpen = keyframes`
  
from {

  transform: translateX(-100%);

} to {

  transform: translateX(0);


}

`;

const animationSidebarClose = keyframes`
  
from {

  transform: translateX(0);

} to {
  transform: translateX(-100%);




}

`;

export const SidebarFilterContainer = styled.div`
  width: 50%;

  position: fixed;
  background-color: #fff;
  top: 0;
  bottom: 0;
  left: 0;
  transform: translateX(0);
  padding: 0 3%;

  animation: ${(state) =>
      state.open ? animationSidebarOpen : animationSidebarClose}
    0.3s ease-in-out;
  animation-fill-mode: forwards; /* Biarkan elemen tetap di posisi akhir animasi */
  z-index: 99;
`;

export const SidebarTittle = styled.div`
  width: 100%;
  height: 60px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;
