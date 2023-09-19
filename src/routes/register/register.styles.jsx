import styled from "styled-components";
import { ButtonLogin } from "../login/login.styles";

export const RegisterContainer = styled.div`
  width: auto;
  height: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;

  padding: 20px;
  border-radius: 5px;
`;

export const ButtonRegister = styled(ButtonLogin)``;
