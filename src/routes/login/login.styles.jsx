import styled from "styled-components";

export const LoginContainer = styled.div`
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

export const FormContainer = styled.form`
  width: 400px;
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
