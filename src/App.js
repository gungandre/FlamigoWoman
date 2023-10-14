import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

import Header from "./components/header/header-component";
import Cart from "./routes/cart/cart.component";

import { useState } from "react";

import { useLocation } from "react-router-dom";

import Spinner from "./components/spinner/spinner.component";
import Shop from "./routes/shop/shop.component";
import PrivateComponent from "./components/private-component/private-component";
const Home = lazy(() => import("./routes/home/home.component"));
const Product = lazy(() => import("./routes/product/product,component"));
// const Shop = lazy(() => import("./routes/shop/shop.component"));
const Login = lazy(() => import("./routes/login/login.component"));
const Register = lazy(() => import("./routes/register/register.component"));
const Checkout = lazy(() => import("./routes/chekout/checkout.component"));
const Account = lazy(() => import("./routes/account/account.component"));

function App() {
  const [headerHeight, setHeaderHeight] = useState(0);

  const location = useLocation();
  // uselocation untuk menghakses alamat url saat ini

  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/" element={<Header setHeaderHeight={setHeaderHeight} />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="shop" element={<Shop height={headerHeight} />} />
          <Route
            path="shop/:product"
            element={<Product key={location.pathname} />}
            // key digunkaan agar react tahu posisi orl apakah berbeda agar komponent bisa di render ulang semua
          />
          <Route
            path="cart"
            element={
              <PrivateComponent>
                <Cart />
              </PrivateComponent>
            }
          />
          <Route
            path="account"
            element={
              <PrivateComponent>
                <Account />
              </PrivateComponent>
            }
          />
        </Route>
        <Route
          path="/checkout"
          element={
            <PrivateComponent>
              <Checkout />
            </PrivateComponent>
          }
        />
      </Routes>
    </Suspense>
  );
}

export default App;
