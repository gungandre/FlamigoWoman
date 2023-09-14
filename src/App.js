import { Routes, Route } from "react-router-dom";

import Header from "./components/header/header-component";
import Cart from "./routes/cart/cart.component";

import Home from "./routes/home/home.component";
import Product from "./routes/product/product,component";

function App() {
  return (
    <Routes>
      <Route path="/" Component={Header}>
        <Route index element={<Home />} />
        <Route path="/shop/:product" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
      </Route>
    </Routes>
  );
}

export default App;
