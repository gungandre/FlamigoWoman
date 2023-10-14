import styled from "styled-components";
import { NavLink } from "../../components/header/header-styles";

export const LoginContainer = styled.div`
  height: auto;
  margin: auto;
  text-align: center;
  margin-top: 28vh;
  padding: 20px;
  border-radius: 5px;
  max-width: 400px;
`;

export const FormContainer = styled.form`
  width: 100%;
`;

export const Links = styled(NavLink)`
  ${({ fokus }) =>
    fokus &&
    `
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.5s ease-out, visibility 0.5s ease-out;
    `}
`;

export const Input = styled.input`
  width: 100%;
  height: 45px;
  padding: 10px 12px;
  background-color: inherit;
  border-width: 1px;
  border-color: rgba(0, 0, 0, 0.2);
  color: #1c1b1ba6;
  font-size: 14px;
  /* outline digunakan untuk menghilangkan border saat elemen di klik atau fokus */
  outline: none;
  margin-bottom: 20px;
  font-family: inherit;

  &::placeholder {
    color: rgba(0, 0, 0, 0.5);
  }

  &:focus {
    border-width: 1px;
    border-color: rgba(0, 0, 0, 0.5);
    ${Links} {
      display: none;
    }
  }
`;

export const ButtonLogin = styled.button`
  width: 100%;
  height: 45px;
  background-color: black;
  color: white;
  font-size: 14px;
  cursor: pointer;
`;
