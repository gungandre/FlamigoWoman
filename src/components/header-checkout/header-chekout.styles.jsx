import styled from "styled-components";

export const HeaderCheckoutContainer = styled.div`
  width: 100%;
  height: 70px;

  line-height: 70px;
  background-color: #ffffff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

export const HeaderCheckoutContent = styled.div`
  max-width: 1230px;
  padding: 0px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  top: 50%;
  left: 50%; /* Mengatur elemen di tengah horizontal */
  transform: translate(-50%, -50%); /* Koreksi posisi elemen */

  @media screen and (max-width: 1000px) {
    max-width: 645px;
    padding: 0px 20px;
  }

  @media screen and (max-width: 750px) {
    max-width: 675px;
    padding: 0px 20px;
  }
`;
