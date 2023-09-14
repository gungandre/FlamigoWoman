import styled from "styled-components";

export const ContainerCartItem = styled.div`
  max-width: 300px;
  max-height: 500px;
  position: relative;

  img {
    max-width: 100%;
    max-height: 100%;
    cursor: pointer;
  }
`;

export const DescContainer = styled.div`
  margin-top: 10px;
  height: 45px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-content: space-between;
  span {
    font-size: 14px;
    text-align: center;
    margin-top: auto;
  }
`;
