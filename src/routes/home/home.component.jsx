import Jumbotron from "../../components/jumbotron/jumbotron-component";

import { HomeContainer, LazyLoadElement } from "./home.styles";
import { useEffect } from "react";
import { getDataProducts } from "../../store/products/products.reducer";
import { useDispatch, useSelector } from "react-redux";
import Skeleton from "../../components/skeleton/skeleton.component";
import {
  selectIsLoading,
  selectProducts,
} from "../../store/products/product.selector";
import Footer from "../../components/footer/footer.component";
import Whatsapp from "../../components/whatsapp/whatsapp.component";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const getProduk = async () => {
      try {
        dispatch(getDataProducts());
      } catch (err) {
        console.log(err);
      }
    };

    getProduk();
  }, [dispatch]);

  const products = useSelector(selectProducts);
  const loading = useSelector(selectIsLoading);

  return (
    <>
      <Jumbotron />
      <HomeContainer>
        {loading ? (
          <Skeleton />
        ) : (
          products &&
          products.map((product, i) => {
            // every digunakan untuk mengecek apakah data di semua aray 0, kalau salah 1 atau tidak akan mengembalikan nilai false
            const isAllZero = product.size.every((item) => item.qty === 0);

            return (
              <LazyLoadElement key={i} product={product} sold={isAllZero} />
            );
          })
        )}
      </HomeContainer>
      <Whatsapp />
      <Footer />
    </>
  );
};

export default Home;
