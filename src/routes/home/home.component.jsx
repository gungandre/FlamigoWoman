import Jumbotron from "../../components/jumbotron/jumbotron-component";

import { HomeContainer, CartItemStyled } from "./home.styles";
import { useEffect } from "react";
import { getDataProducts } from "../../store/products/products.reducer";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIsLoading,
  selectProducts,
} from "../../store/products/product.selector";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduk = async () => {
      try {
        dispatch(getDataProducts());
      } catch (err) {
        console.log(err);
      }
    };

    getProduk();
  }, []);

  const products = useSelector(selectProducts);
  const loading = useSelector(selectIsLoading);

  return (
    <>
      <Jumbotron />
      <HomeContainer>
        {loading ? (
          <h1>loading</h1>
        ) : (
          products &&
          products.map((product, i) => (
            <CartItemStyled key={i} product={product} />
          ))
        )}
      </HomeContainer>
    </>
  );
};

export default Home;
