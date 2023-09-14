import styled from "styled-components";

export const ButtonSizeContainer = styled.div`
  height: 45px;
  width: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${(props) =>
    props.activeButton ? "1.5px solid black" : "1px solid rgba(0, 0, 0, 0.5)"};
  cursor: pointer;
  opacity: ${(props) => (props.activeButton ? "none" : "0.5")};
`;
