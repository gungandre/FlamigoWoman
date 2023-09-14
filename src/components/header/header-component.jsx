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
const Header = () => {
  const cartTotal = useSelector(cartSelector);

  return (
    <>
      <HeaderContainer>
        <DivContainer>
          <Link to={"/"}>
            <img src={`${logo}`} alt={`${logo}`} width={"190px"} />
          </Link>

          <MenuContainer>
            <NavLink to={"/login"}>
              <Span>Login</Span>
            </NavLink>

            <NavLink to={"/shop"}>
              <Span>Shop</Span>
            </NavLink>

            <NavLink to={"/cart"}>
              <Span>Cart ({cartTotal.length})</Span>
            </NavLink>
          </MenuContainer>
        </DivContainer>
      </HeaderContainer>
      <Outlet />
    </>
  );
};

export default Header;
