import styled from "styled-components";

export const RecentProductsContainer = styled.div`
  width: 100%;
  background-color: inherit;
  height: auto;
  margin-top: 50px;
  background-color: inherit;

  h1 {
    font-size: 20px;
    text-align: center;

    @media screen and (max-width: 699px) {
      font-size: 16px;
    }
  }

  @media screen and (max-width: 699px) {
    margin-top: 20px;
    h1 {
      font-size: 18px;
    }
  }
`;

export const FlexContainer = styled.div`
  width: 100%;
  height: auto;

  padding: 50px 50px;

  @media screen and (max-width: 699px) {
    padding: 20px 20px;
  }
`;
