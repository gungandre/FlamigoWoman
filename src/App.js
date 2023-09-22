import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

import Header from "./components/header/header-component";
import Cart from "./routes/cart/cart.component";

import { useState, useEffect, useRef } from "react";

import { useLocation } from "react-router-dom";

import Spinner from "./components/spinner/spinner.component";

const Home = lazy(() => import("./routes/home/home.component"));
const Product = lazy(() => import("./routes/product/product,component"));
const Shop = lazy(() => import("./routes/shop/shop.component"));
const Login = lazy(() => import("./routes/login/login.component"));
const Register = lazy(() => import("./routes/register/register.component"));

function App() {
  const headerRef = useRef(null);
  const [headerHeight, setHeaderHeight] = useState(0);
  const location = useLocation();
  // uselocation untuk menghakses alamat url saat ini

  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.clientHeight);
    }
  }, []);

  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/" element={<Header ref={headerRef} />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="shop" element={<Shop height={headerHeight} />} />
          <Route
            path="shop/:product"
            element={<Product key={location.pathname} />}
            // key digunkaan agar react tahu posisi orl apakah berbeda agar komponent bisa di render ulang semua
          />
          <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
