import styled from "styled-components";

export const AccountContainer = styled.div`
  width: 100%;

  margin-bottom: 300px;
`;

export const AccountContent = styled.div`
  max-width: 1260px;

  height: 200px;
  margin: 170px auto;
  padding: 0px 40px;

  @media screen and (max-width: 1000px) {
    padding: 0px 20px;
    margin: 130px auto;
  }
`;

export const LogOut = styled.div`
  width: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  cursor: pointer;
  opacity: 0.6;
  transition: opacity 0.3s ease-in-out;

  &:hover {
    opacity: 1;
  }
`;
