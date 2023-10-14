import { useState } from "react";
import {
  TitleContainer,
  Container,
  FlexContainer,
  DropdownContainer,
  FlexDropdown,
  Ul,
  Sort,
  GridProducts,
  ProductContainer,
  GridProducts2,
  Availability,
  AvailabilityButton,
  Toggle,
  ToggleContainer,
  FilterContainer,
  Filter,
  FilterFlexContainer,
} from "./shop.styles";
import SidebarFilter from "../../components/sidebar-filter/sidebar-filter.component";

import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectProducts } from "../../store/products/product.selector";
import { LazyLoadElement } from "../home/home.styles";
import { useDispatch } from "react-redux";
import { stockOnly, sort } from "../../store/products/products.reducer";
import { getDataProducts } from "../../store/products/products.reducer";
import { useEffect } from "react";
import { selectBurgerButton } from "../../store/burger-buton/burger.selector";
import SortSidebar from "../../components/sort-sidebar/sort-sidebar.component";
import Footer from "../../components/footer/footer.component";
import RecentProduct from "../../components/recentProductFooter/recentProductFooter.component";

const Shop = ({ height }) => {
  const [toggle, setToggle] = useState(false);
  const [toggleAvail, setToggleAvail] = useState(false);
  const [queryParams, setQueryParams] = useSearchParams();
  const [toggleButton, setToggleButton] = useState(false);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [filterButton, setFilterButtomn] = useState(false);

  const burgerButton = useSelector(selectBurgerButton);

  const dispatch = useDispatch();

  const products = useSelector(selectProducts);

  const updateViewportWidth = () => {
    setViewportWidth(window.innerWidth);
  };

  useEffect(() => {
    // Tambahkan event listener untuk mengawasi perubahan ukuran layar
    window.addEventListener("resize", updateViewportWidth);

    // Membersihkan event listener saat komponen di-unmount
    return () => {
      window.removeEventListener("resize", updateViewportWidth);
    };
  }, []);

  const toggleDropdown = () => {
    setToggle(!toggle);
    console.log(toggle);
  };

  const paramsHandler = (type) => {
    queryParams.set("sort", type);
    setQueryParams(queryParams);
    dispatch(sort(queryParams.get("sort")));
  };

  const availabilityHandler = () => {
    setToggleAvail(!toggleAvail);
  };

  const toggleAvailHandler = async () => {
    setToggleButton(!toggleButton); // Tidak perlu await di sini
    const newToggleButtonValue = !toggleButton; // Menggunakan nilai yang baru saja di-set
    if (newToggleButtonValue) {
      dispatch(stockOnly({ stock: newToggleButtonValue }));
    } else {
      dispatch(getDataProducts());
    }
  };

  const filterButtonHandler = () => {
    setFilterButtomn(!filterButton);
  };

  return (
    <>
      <div key={queryParams.get("sort")}>
        <TitleContainer>ALL ITEMS</TitleContainer>
        <SidebarFilter
          onClick={filterButtonHandler}
          click={filterButton}
          stateHandler={setFilterButtomn}
        />

        <Container top={height} burgerButton={burgerButton}>
          <FlexContainer>
            {viewportWidth <= 1000 && (
              <FilterFlexContainer>
                <FilterContainer>
                  <Filter onClick={filterButtonHandler}>FILTER</Filter>
                </FilterContainer>
              </FilterFlexContainer>
            )}
          </FlexContainer>
          <FlexContainer>
            {viewportWidth > 700 && `${products.length} PRODUCTS`}{" "}
          </FlexContainer>

          <FlexDropdown>
            <DropdownContainer onClick={toggleDropdown}>
              <Sort click={toggle}>
                SORT BY{"  "}
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
              </Sort>

              {viewportWidth >= 700 && toggle && (
                <Ul>
                  <li
                    onClick={() => paramsHandler("asc")}
                    style={{
                      opacity: queryParams.get("sort") === "asc" ? "1" : "none",
                    }}
                  >
                    Alphabetically, A-Z
                  </li>
                  <li
                    onClick={() => paramsHandler("desc")}
                    style={{
                      opacity:
                        queryParams.get("sort") === "desc" ? "1" : "none",
                    }}
                  >
                    Alphabetically, Z-A
                  </li>
                </Ul>
              )}
              {viewportWidth <= 700 && toggle && (
                <SortSidebar click={toggle} stateHandler={setFilterButtomn} />
              )}
            </DropdownContainer>
          </FlexDropdown>
        </Container>
        <ProductContainer>
          {viewportWidth > 1000 && (
            <GridProducts>
              <Availability style={{ position: "sticky", top: "180px" }}>
                <AvailabilityButton
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
                <AvailabilityButton style={{ marginTop: "20px" }}>
                  <ToggleContainer dropdown={toggleAvail}>
                    <Toggle onClick={toggleAvailHandler} click={toggleButton}>
                      <div></div>
                    </Toggle>
                    <small style={{ fontSize: "12px" }}>In stock only</small>
                  </ToggleContainer>
                </AvailabilityButton>
              </Availability>
            </GridProducts>
          )}

          <GridProducts>
            <GridProducts2>
              {products &&
                products.map((product, i) => {
                  // every digunakan untuk mengecek apakah data di semua aray 0, kalau salah 1 atau tidak akan mengembalikan nilai false
                  const isAllZero = product.size.every(
                    (item) => item.qty === 0
                  );

                  return (
                    <LazyLoadElement
                      key={i}
                      product={product}
                      sold={isAllZero}
                    />
                  );
                })}
            </GridProducts2>
          </GridProducts>
        </ProductContainer>
      </div>
      <br />
      <div>
        <hr style={{ opacity: "0.5" }} />
      </div>

      <br />
      <RecentProduct viewWidth={viewportWidth} />
      <Footer />
    </>
  );
};

export default Shop;
