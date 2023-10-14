import styled from "styled-components";

export const FooterContainer = styled.div`
  height: 200px;
  background-color: #ffffff;
  width: 100%;
  display: flex;
  align-items: end;
  position: ${({ footer }) => footer && "absolute"};
  bottom: ${({ footer }) => footer && "0"};
`;

export const FooterContent = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
  align-items: center;
  justify-content: space-between;
`;

export const IconContainer = styled.div`
  width: 50px;
  height: 50px;
  padding-left: 20px;
  display: flex;
  align-items: center;
  svg {
    opacity: 0.6;
  }
`;

export const CopyrightContainer = styled.div`
  width: auto;
  height: 50px;
  display: flex;
  align-items: center;
  font-size: 11px;
  color: #6a6a6aa6;
  text-align: center;
`;
