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

import { useState, useEffect, useRef } from "react";
import HamburgerMenu from "../hamburger-menu/hamburger-menu.component";
import Sidebar from "../sidebar/sidebar.component";
import { selectBurgerButton } from "../../store/burger-buton/burger.selector";
import { setBurgerButton } from "../../store/burger-buton/burger-button.reducer";
import { useDispatch } from "react-redux";

const Header = forwardRef(({ setHeaderHeight }) => {
  const headerRef = useRef(null);
  const dispatch = useDispatch();
  const cartTotal = useSelector(cartSelector);

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

  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.clientHeight);
    }

    // komponent shop digunakan sebagai depedencies useEfect karena shop menjadi asynchronus berkat lazy()
    // maka dari itu shop menjadi depedencies agar saat route shop di klik akan mengirim props clientHeight header nya
  }, []);

  const toggleMenu = () => {
    dispatch(setBurgerButton(!burgerButton));
  };

  return (
    <>
      <HeaderContainer ref={headerRef}>
        <Sidebar menuOpen={burgerButton} cartTotal={cartTotal} />
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
                <NavLink to={"/account"}>
                  <Span>Account</Span>
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
