import styled from "styled-components";

export const JumbotronContainer = styled.div`
  width: 100%;
  position: relative;

  margin-top: 100px;

  img {
    width: 100%;
    height: 100%;
  }

  @media screen and (max-width: 699px) {
    margin-top: 70px;
  }
`;
