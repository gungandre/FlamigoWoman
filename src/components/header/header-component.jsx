import {
  HeaderContainer,
  DivContainer,
  MenuContainer,
  Span,
  NavLink,
} from "./header-styles";
import { Outlet } from "react-router-dom";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { cartSelector } from "../../store/cart/cart.selector";
import { forwardRef } from "react";
import { selectUser } from "../../store/user/user.selector";
import { useState, useEffect } from "react";
import HamburgerMenu from "../hamburger-menu/hamburger-menu.component";
import Sidebar from "../sidebar/sidebar.component";
import { selectBurgerButton } from "../../store/burger-buton/burger.selector";
import { setBurgerButton } from "../../store/burger-buton/burger-button.reducer";
import { useDispatch } from "react-redux";

const Header = forwardRef((props, ref) => {
  const dispatch = useDispatch();
  const cartTotal = useSelector(cartSelector);
  const user = useSelector(selectUser);
  const burgerButton = useSelector(selectBurgerButton);

  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  const updateViewportWidth = () => {
    setViewportWidth(window.innerWidth);
  };

  useEffect(() => {
    // Tambahkan event listener untuk mengawasi perubahan ukuran layar
    window.addEventListener("resize", updateViewportWidth);

    // Membersihkan event listener saat komponen di-unmount
    return () => {
      window.removeEventListener("resize", updateViewportWidth);
    };
  }, []);

  const toggleMenu = () => {
    dispatch(setBurgerButton(!burgerButton));
  };

  return (
    <>
      <HeaderContainer ref={ref}>
        <Sidebar menuOpen={burgerButton} />
        <DivContainer>
          <Link to={"/"}>
            <img src={`${logo}`} alt={`${logo}`} width={"190px"} />
          </Link>

          <MenuContainer>
            {viewportWidth < 700 ? (
              <div style={{ alignSelf: "end" }}>
                <HamburgerMenu isOpen={burgerButton} toggleMenu={toggleMenu} />
              </div>
            ) : (
              <>
                <NavLink to={user ? "/logout" : "/login"}>
                  <Span>{user ? "Log Out" : "Login"}</Span>
                </NavLink>

                <NavLink to={"/shop"}>
                  <Span>Shop</Span>
                </NavLink>

                <NavLink to={"/cart"}>
                  <Span>Cart ({cartTotal.length})</Span>
                </NavLink>
              </>
            )}
          </MenuContainer>
        </DivContainer>
      </HeaderContainer>

      <Outlet />
    </>
  );
});

export default Header;
