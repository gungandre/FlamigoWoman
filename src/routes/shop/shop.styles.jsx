import { keyframes } from "styled-components";
import styled from "styled-components";

export const TitleContainer = styled.div`
  width: 100%;
  font-size: 24px;
  text-align: center;
  margin-top: 150px;
  margin-bottom: 50px;
`;

export const Container = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  z-index: ${(props) => (props.burgerButton ? "1" : "2")};
  background-color: #f0efef;
  position: sticky;

  top: ${(props) => props.top}px;
`;

export const FlexContainer = styled.div`
  width: 33.3%;
  height: 50px;
  font-size: 12px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FlexDropdown = styled.div`
  width: 33.3%;
  display: flex;
  height: 100%;
  flex-direction: row-reverse;
  position: relative;
  z-index: 1;
`;

export const FilterFlexContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
`;

export const FilterContainer = styled.div`
  width: 150px;
  height: 50px;
  border-right: 1px solid rgba(0, 0, 0, 0.2);
  border-left: 1px solid rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const Filter = styled.div`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.5);
  transition: color 0.3s ease-in-out;
  &:hover {
    color: black;
  }
`;

export const DropdownContainer = styled.div`
  width: 150px;
  height: 50px;
  border-right: 1px solid rgba(0, 0, 0, 0.2);
  border-left: 1px solid rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  cursor: pointer;
`;

const arrow = keyframes`
  0% {
    transform: rotate(0deg); /* Rotasi 180 derajat */
  }
  100% {
    transform: rotate(180deg); /* Rotasi 180 derajat */
  }


`;

export const Sort = styled.div`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.5);
  transition: color 0.3s ease-in-out;
  &:hover {
    color: black;
  }

  svg {
    transition: transform 0.3s ease-in-out;
    transform: ${(props) => (props.click ? "rotate(180deg)" : "none")};
  }
`;

const fadeOut = keyframes`
from{
    opacity: 0;
} to {
    opacity: 1;
}

`;

export const Ul = styled.ul`
  position: absolute;
  top: 100%;

  animation: ${fadeOut} 0.3s ease-in-out;
  width: 140%;

  background-color: #ffffff;
  padding: 15px 10px;
  list-style: none;
  padding: 20px 15px;
  margin: 0;

  li:first-child {
    margin-bottom: 20px;
  }

  li {
    opacity: 0.5;
    transition: opacity 0.3s ease-in-out;
    &:hover {
      opacity: 1;
    }
  }
`;

export const Panah = styled.span`
  animation: ${arrow} 0.2s ease-in-out;
`;

export const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: 20% 80%;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 100%;
  }
`;

export const GridProducts = styled.div`
  padding: 15px 15px;
  width: 100%;
  height: auto;
`;

export const GridProducts2 = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 30px;
  padding: 0px 20px;
  @media screen and (max-width: 1000px) {
    padding: 0px 5px;
  }

  @media screen and (max-width: 700px) {
    grid-template-columns: auto auto;
    padding: 0px 5px;
  }
`;

export const Availability = styled.div`
  width: 100%;

  height: auto;
`;

export const AvailabilityButton = styled.div`
  width: 80%;
  margin: 0px auto;
  display: flex;
  justify-content: space-between;
  cursor: pointer;

  svg {
    transition: transform 0.3s ease-in-out;
    transform: ${(props) => (props.click ? "rotate(180deg)" : "none")};
  }
`;

const toggleAnimation = keyframes`
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }


`;

export const Toggle = styled.div`
  width: 30px;
  height: 15px;
  background: ${(props) => (props.click ? "black" : "#a6a6a6")};
  border-radius: 10px;
  display: ruby-text;
  padding: 2.4px;

  cursor: pointer;
  div {
    background-color: white;
    border-radius: 50%;
    width: 10px;
    height: 10px;
    float: ${(props) => (props.click ? "right" : "none")};
  }
`;

export const ToggleContainer = styled.div`
  animation: ${toggleAnimation} 0.3s ease-in-out;
  width: 105px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  display: ${(props) => (props.dropdown ? "inherit" : "none")};
`;
