import styled, { keyframes } from "styled-components";

const animationSidebarOpen = keyframes`
  
from {
  transform: translateX(100%);
} to {
  transform: translateX(0);

}

`;

const animationSidebarClose = keyframes`
  
from {
  transform: translateX(0);
} to {
  transform: translateX(100%);


}

`;

export const SidebarContainer = styled.div`
  width: 50%;

  position: fixed;
  background-color: #fff;
  top: 0;
  bottom: 0;
  right: 0;
  transform: translateX(100%);
  z-index: 4;
  padding: 0 3%;

  animation: ${(state) =>
      state.open ? animationSidebarOpen : animationSidebarClose}
    0.3s ease-in-out;
  animation-fill-mode: forwards; /* Biarkan elemen tetap di posisi akhir animasi */
`;

export const SidebarTittle = styled.div`
  width: 100%;
  height: 60px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MenuSidebarContainer = styled.div`
  width: 100%;
  margin-top: 20px;
`;

export const P = styled.p`
  margin-bottom: 20px;
  opacity: 0.5;
  transition: opacity 0.3s ease-in-out;
  &:hover {
    opacity: 1;
  }
`;

export const XIcon = styled.span`
  display: inline-block;
  width: 20px;
  height: 20px;
  position: relative;
  opacity: 1;

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
    background-color: #000; /* Ganti warna sesuai kebutuhan */
    top: 50%;
    left: 0;
    transform: translateY(-50%);
  }

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }
`;

export const BlackBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: black;
  opacity: 0.2;
`;
