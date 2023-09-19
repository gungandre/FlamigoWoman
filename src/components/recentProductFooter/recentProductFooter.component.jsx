import {
  RecentProductsContainer,
  FlexContainer,
} from "./recentProductFooter.styles";
import { LazyLoadElement } from "../../routes/home/home.styles";
import { selectRecentProducts } from "../../store/recent-product/recent-product.selector";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const RecentProduct = () => {
  const recentProducts = useSelector(selectRecentProducts);

  return (
    <RecentProductsContainer>
      <h1 style={{ fontSize: "20px", textAlign: "center" }}>
        RECENTLY VIEWED PRODUCTS
      </h1>
      <br />
      <FlexContainer>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={4}
          navigation
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {recentProducts.map((product, i) => {
            const isAllZero = product.size.every((item) => item.qty === 0);
            return (
              <SwiperSlide>
                <LazyLoadElement key={i} product={product} sold={isAllZero} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </FlexContainer>
    </RecentProductsContainer>
  );
};

export default RecentProduct;
