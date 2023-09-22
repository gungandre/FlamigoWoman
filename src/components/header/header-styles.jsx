import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 100px;
  background-color: #ffffff;
  padding: 20px 30px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;

  @media screen and (max-width: 699px) {
    height: 60px;
    padding: 0px;
  }
`;

export const DivContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  padding: 0 20px;
  justify-content: space-between;

  img {
    @media screen and (max-width: 699px) {
      width: 130px;
    }
  }
`;

export const MenuContainer = styled.div`
  width: 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 700px) {
    justify-content: none;
    flex-direction: row-reverse;
  }
`;
export const Span = styled.span`
  color: #1c1c1ca6;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: black;
  }
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
