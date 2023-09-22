import styled from "styled-components";

export const HamburgerButton = styled.div`
  width: 30px;
  height: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
`;

export const Bar = styled.div`
  width: 100%;
  height: 4px;
  background-color: #333;
  transition: 0.4s;

  &:nth-child(1) {
    transform: ${(props) =>
      props.isOpen ? "rotate(-45deg) translate(-5.5px, 5.5px)" : "none"};
  }

  &:nth-child(2) {
    opacity: ${(props) => (props.isOpen ? "0" : "1")};
  }

  &:nth-child(3) {
    transform: ${(props) =>
      props.isOpen ? "rotate(45deg) translate(-6px, -6px)" : "none"};
  }
`;
