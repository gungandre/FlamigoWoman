import { SidebarFilterContainer, SidebarTittle } from "./sidebar-filter.styles";
import {
  BlackBackground,
  MenuSidebarContainer,
} from "../sidebar/sidebar.styles";
import { ToggleContainer, Toggle } from "../../routes/shop/shop.styles";
import { stockOnly } from "../../store/products/products.reducer";

import { XIcon } from "../sidebar/sidebar.styles";
import { useState } from "react";
import {
  Availability,
  AvailabilityButton,
} from "../../routes/shop/shop.styles";
import { useDispatch } from "react-redux";
import { getDataProducts } from "../../store/products/products.reducer";

const SidebarFilter = ({ click, stateHandler }) => {
  const dispatch = useDispatch();
  const [toggleAvail, setToggleAvail] = useState(false);
  const [toggleButton, setToggleButton] = useState(false);

  const toggleAvailHandler = async () => {
    setToggleButton(!toggleButton); // Tidak perlu await di sini
    const newToggleButtonValue = !toggleButton; // Menggunakan nilai yang baru saja di-set
    if (newToggleButtonValue) {
      dispatch(stockOnly({ stock: newToggleButtonValue }));
    } else {
      dispatch(getDataProducts());
    }
  };

  const availabilityHandler = () => {
    setToggleAvail(!toggleAvail);
  };

  const closeSidebarHandler = () => {
    stateHandler(false);
  };

  return (
    <>
      <SidebarFilterContainer open={click}>
        <SidebarTittle>
          <XIcon onClick={closeSidebarHandler} />
          <p>FILTER</p>
        </SidebarTittle>
        <hr />
        <MenuSidebarContainer>
          <Availability>
            <AvailabilityButton
              style={{ width: "100%" }}
              click={toggleAvail}
              onClick={availabilityHandler}
            >
              <small style={{ fontSize: "12px" }}>AVAILABILITY</small>
              <svg
                aria-hidden="true"
                focusable="false"
                fill="none"
                width="10"
                class="icon icon-chevron-down"
                viewBox="0 0 10 10"
              >
                <path
                  d="m1 3 4 4 4-4"
                  stroke="currentColor"
                  stroke-linecap="square"
                ></path>
              </svg>
            </AvailabilityButton>
            <AvailabilityButton style={{ marginTop: "20px", width: "100%" }}>
              <ToggleContainer dropdown={toggleAvail}>
                <Toggle onClick={toggleAvailHandler} click={toggleButton}>
                  <div></div>
                </Toggle>
                <small style={{ fontSize: "12px" }}>In stock only</small>
              </ToggleContainer>
            </AvailabilityButton>
          </Availability>
        </MenuSidebarContainer>
      </SidebarFilterContainer>
      <BlackBackground style={{ display: click ? "block" : "none" }} />
    </>
  );
};

export default SidebarFilter;
