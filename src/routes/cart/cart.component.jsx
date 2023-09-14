import {
  CartContainer,
  ImgContainer,
  DivCheckout,
  OrderNoteContainer,
  OrderNoteContainer2,
  Remove,
  Line,
  Checkout,
  CartEmptyContainer,
  ContinueShopping,
} from "./cart.styles";
import { useDispatch, useSelector } from "react-redux";
import { cartSelector } from "../../store/cart/cart.selector";
import {
  QtyContainer,
  GridQtyContainer,
  Minus,
  Plus,
  Qty,
} from "../product/product.styles";
import { NavLink } from "../../components/header/header-styles";
import { selectProducts } from "../../store/products/product.selector";
import { setMinusCart, setRemoveCart } from "../../store/cart/cart.reducer";
import { Link } from "react-router-dom";

const formatter = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
});

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector(cartSelector);
  const products = useSelector(selectProducts);

  const plusHandler = (nameProduct, size, qty) => {};

  const minusHandler = (nameProduct, size, qty) => {
    const findProduct = products.find(
      (product) => product.name === nameProduct
    );

    if (findProduct) {
      // const findSize = findProduct.size.find((sizeItem) => {
      //   return sizeItem.tipe === size;
      // });

      if (qty !== 1) {
        dispatch(
          setMinusCart({
            name: nameProduct,
            qty: qty - 1,
            size: size,
          })
        );
      } else {
        dispatch(
          setRemoveCart({
            name: nameProduct,
            qty: qty - 1,
            size: size,
          })
        );
      }
    }

    // if (findProduct) {
    //   cart.map((product) => {
    //     if (product.name === nameProduct) {
    //     }
    //   });
    // }
  };

  const removeHandler = (nameProduct, size, qty) => {
    dispatch(
      setRemoveCart({
        name: nameProduct,
        qty: qty - 1,
        size: size,
      })
    );
  };

  return cart.length === 0 ? (
    <CartEmptyContainer>
      <h1>CART</h1>
      <br />
      <p>Your cart is empty</p>
      <br />
      <Link to={"/"}>
        <ContinueShopping>CONTINUE SHOPPING</ContinueShopping>
      </Link>
    </CartEmptyContainer>
  ) : (
    <CartContainer>
      <div style={{ textAlign: "center", marginBottom: "30px" }}>
        <h3 style={{ fontSize: "25px" }}>CART</h3>
      </div>

      <table width={"100%"}>
        <tr>
          <td
            align="left"
            width={"70%"}
            style={{
              borderBottom: "1px solid rgba(0,0,0,0.2)",
              padding: "15px",
              color: "#1c1c1ca6",
              fontSize: "12px",
            }}
          >
            PRODUCT
          </td>
          <td
            align="center"
            width={"10%"}
            style={{
              borderBottom: "1px solid rgba(0,0,0,0.2)",
              padding: "15px",
              color: "#1c1c1ca6",
              fontSize: "12px",
            }}
          >
            QUANTITY
          </td>
          <td
            align="right"
            width={"20%"}
            style={{
              borderBottom: "1px solid rgba(0,0,0,0.2)",
              padding: "15px",
              color: "#1c1c1ca6",
              fontSize: "12px",
            }}
          >
            TOTAL
          </td>
        </tr>

        {cart.map((cart, i) => (
          <tr key={i}>
            <td
              align="left"
              width={"70%"}
              style={{
                borderBottom: "1px solid rgba(0,0,0,0.2)",

                color: "#1c1c1ca6",
                fontSize: "12px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  paddingTop: "20px",
                  paddingRight: "20px",
                  paddingBottom: "20px",
                  alignItems: "center",
                }}
              >
                <ImgContainer>
                  <div>
                    <img src={`/produk/${cart.img}`} alt={`${cart.img}`} />
                  </div>
                </ImgContainer>
                <div style={{ width: "auto", marginLeft: "20px" }}>
                  <div style={{ fontSize: "14px", color: "black" }}>
                    <NavLink to={`/shop/${cart.name}`}>{cart.name}</NavLink>
                  </div>

                  <div style={{ fontSize: "14px", marginTop: "5px" }}>
                    {formatter.format(cart.harga)}
                  </div>
                  <div style={{ fontSize: "14px", marginTop: "5px" }}>
                    {cart.size}
                  </div>
                </div>
              </div>
            </td>
            <td
              align="center"
              width={"10%"}
              style={{
                borderBottom: "1px solid rgba(0,0,0,0.2)",

                color: "#1c1c1ca6",
                fontSize: "12px",
              }}
            >
              <QtyContainer>
                <GridQtyContainer>
                  <Minus
                    onClick={() => minusHandler(cart.name, cart.size, cart.qty)}
                  >
                    <b>-</b>
                  </Minus>
                  <Qty>{cart.qty}</Qty>
                  <Plus>
                    <div>
                      <b>+</b>{" "}
                    </div>
                  </Plus>
                </GridQtyContainer>
              </QtyContainer>

              <Remove
                onClick={() => removeHandler(cart.name, cart.size, cart.qty)}
              >
                Remove
                <Line></Line>
              </Remove>
            </td>
            <td
              align="right"
              width={"20%"}
              style={{
                borderBottom: "1px solid rgba(0,0,0,0.2)",

                color: "#1c1c1ca6",
                fontSize: "14px",
              }}
            >
              {formatter.format(cart.total)}
            </td>
          </tr>
        ))}
      </table>
      <br />

      <DivCheckout>
        <OrderNoteContainer>
          <p>Add order note</p>
          <br />
          <textarea
            placeholder="How can we help you?"
            style={{
              minWidth: "100%",
              padding: "10px 10px",
              backgroundColor: "#f0efef",
              borderWidth: "1px",
              height: "100px",
            }}
            onFocus={(event) => (event.target.style.borderWidth = "1px")}
            /* Ketika elemen mendapatkan fokus, atur lebar border lebih tebal */
            onBlur={(event) => (event.target.style.borderWidth = "1px")}
          ></textarea>
        </OrderNoteContainer>
        <OrderNoteContainer2>
          <p style={{ fontSize: "18px", textAlign: "end" }}>
            Total: {formatter.format(100000)}
          </p>
          <Checkout>CHECKOUT</Checkout>
        </OrderNoteContainer2>
      </DivCheckout>
      <br />
      <br />
      <br />
      <br />
      <br />
    </CartContainer>
  );
};

export default Cart;
