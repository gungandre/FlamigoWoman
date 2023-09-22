import { HamburgerButton, Bar } from "./hamburger-menu.styles";
import { useSelector } from "react-redux";

const HamburgerMenu = ({ isOpen, toggleMenu }) => {
  return (
    <HamburgerButton onClick={toggleMenu}>
      <Bar isOpen={isOpen} />
      <Bar isOpen={isOpen} />
      <Bar isOpen={isOpen} />
    </HamburgerButton>
  );
};

export default HamburgerMenu;
