import {
  SidebarContainer,
  BlackBackground,
  SidebarTittle,
  XIcon,
  MenuSidebarContainer,
  P,
} from "./sidebar.styles";
import { NavLink } from "../header/header-styles";

import { useDispatch } from "react-redux";
import { setBurgerButton } from "../../store/burger-buton/burger-button.reducer";

const Sidebar = ({ menuOpen, cartTotal }) => {
  const dispatch = useDispatch();

  const closeHandler = () => {
    dispatch(setBurgerButton(!menuOpen));
  };

  return (
    <>
      <SidebarContainer open={menuOpen}>
        <SidebarTittle>
          <p>MENU</p>
          <XIcon onClick={closeHandler} />
        </SidebarTittle>

        <hr />
        <MenuSidebarContainer>
          <NavLink to={"/account"}>
            <P>Account</P>
          </NavLink>
          <NavLink to={"/shop"} style={{ marginBottom: "10px" }}>
            <P>Shop</P>
          </NavLink>
          <NavLink to={"/cart"} style={{ marginBottom: "10px" }}>
            <P>Cart ({cartTotal.length})</P>
          </NavLink>
        </MenuSidebarContainer>
      </SidebarContainer>

      <BlackBackground style={{ display: menuOpen ? "block" : "none" }} />
    </>
  );
};

export default Sidebar;
