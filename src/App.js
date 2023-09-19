import { Routes, Route } from "react-router-dom";

import Header from "./components/header/header-component";
import Cart from "./routes/cart/cart.component";

import Home from "./routes/home/home.component";
import Product from "./routes/product/product,component";
import Shop from "./routes/shop/shop.component";
import { useState, useEffect, useRef } from "react";
import Login from "./routes/login/login.component";
import Register from "./routes/register/register.component";
import { useLocation } from "react-router-dom";

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
  );
}

export default App;
