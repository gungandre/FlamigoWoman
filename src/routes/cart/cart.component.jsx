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
  QtyContainer2,
  GridQtyContainer2,
  Minus2,
  Plus2,
  Qty2,
} from "./cart.styles";
import { NavLink } from "../../components/header/header-styles";
import { selectProducts } from "../../store/products/product.selector";
import {
  setMinusCart,
  setRemoveCart,
  setPlusCart,
} from "../../store/cart/cart.reducer";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import RecentProduct from "../../components/recentProductFooter/recentProductFooter.component";

const formatter = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
});

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector(cartSelector);
  const products = useSelector(selectProducts);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

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

  const plusHandler = (nameProduct, size, qty, harga, total) => {
    const findProduct = products.find(
      (product) => product.name === nameProduct
    );

    if (findProduct) {
      findProduct.size.map((product) => {
        if (product.tipe === size) {
          if (product.qty !== qty) {
            dispatch(
              setPlusCart({
                name: nameProduct,
                qty: qty + 1,
                size: size,
                total: total + harga,
              })
            );

            return false;
          } else {
            return true;
          }
        }
      });
    }
  };

  const minusHandler = (nameProduct, size, qty, harga, total) => {
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
            total: total - harga,
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
    <div style={{ height: "100%" }}>
      <CartEmptyContainer>
        <h1>CART</h1>
        <br />
        <p>Your cart is empty</p>
        <br />
        <Link to={"/shop"}>
          <ContinueShopping>CONTINUE SHOPPING</ContinueShopping>
        </Link>
      </CartEmptyContainer>
      <div style={{ marginTop: "35vh" }}>
        <hr />
        <br />
        <RecentProduct viewWidth={viewportWidth} />
      </div>
    </div>
  ) : viewportWidth >= 700 ? (
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
              <QtyContainer2>
                <GridQtyContainer2>
                  <Minus2
                    onClick={() =>
                      minusHandler(
                        cart.name,
                        cart.size,
                        cart.qty,
                        cart.harga,
                        cart.total
                      )
                    }
                  >
                    <b>-</b>
                  </Minus2>
                  <Qty2>{cart.qty}</Qty2>
                  <Plus2
                    onClick={() => {
                      plusHandler(
                        cart.name,
                        cart.size,
                        cart.qty,
                        cart.harga,
                        cart.total
                      );
                    }}
                  >
                    <div>
                      <b>+</b>
                    </div>
                  </Plus2>
                </GridQtyContainer2>
              </QtyContainer2>

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

              height: "100px",
              outline: "none",
            }}
            onFocus={(event) =>
              (event.target.style.border = "1px solid rgba(0,0,0, 0.5)")
            }
            /* Ketika elemen mendapatkan fokus, atur lebar border lebih tebal */
            onBlur={(event) =>
              (event.target.style.border = "1px solid rgba(0,0,0, 0.2)")
            }
          ></textarea>
        </OrderNoteContainer>
        <OrderNoteContainer2>
          <p style={{ fontSize: "18px", textAlign: "end" }}>
            Total:{" "}
            {formatter.format(cart.reduce((acc, item) => acc + item.total, 0))}
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
  ) : (
    <CartContainer>
      <div style={{ textAlign: "center", marginBottom: "30px" }}>
        <h3 style={{ fontSize: "20px", fontWeight: "initial" }}>CART</h3>
      </div>

      <table width={"100%"}>
        {cart.map((cart, i) => (
          <>
            <tr key={i}>
              <td
                align="left"
                style={{
                  color: "#1c1c1ca6",
                  fontSize: "12px",
                  width: "100px",
                }}
              >
                <div
                  style={{
                    display: "flex",

                    alignItems: "center",
                  }}
                >
                  <ImgContainer
                    style={{ width: viewportWidth < 700 && "80px" }}
                  >
                    <div>
                      <img src={`/produk/${cart.img}`} alt={`${cart.img}`} />
                    </div>
                  </ImgContainer>
                </div>
              </td>
              <td
                width={"auto"}
                style={{
                  color: "#1c1c1ca6",
                  fontSize: "12px",
                }}
              >
                <div style={{ width: "auto" }}>
                  <div style={{ fontSize: "12px", color: "black" }}>
                    <NavLink to={`/shop/${cart.name}`}>{cart.name}</NavLink>
                  </div>

                  <div style={{ fontSize: "12px", marginTop: "5px" }}>
                    {formatter.format(cart.harga)}
                  </div>
                  <div style={{ fontSize: "12px", marginTop: "5px" }}>
                    {cart.size}
                  </div>
                </div>
                <div
                  style={{
                    width: "160px",
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "10px",
                  }}
                >
                  <QtyContainer2>
                    <GridQtyContainer2>
                      <Minus2
                        onClick={() =>
                          minusHandler(
                            cart.name,
                            cart.size,
                            cart.qty,
                            cart.harga,
                            cart.total
                          )
                        }
                      >
                        <b>-</b>
                      </Minus2>
                      <Qty2>{cart.qty}</Qty2>
                      <Plus2
                        onClick={() => {
                          plusHandler(
                            cart.name,
                            cart.size,
                            cart.qty,
                            cart.harga,
                            cart.total
                          );
                        }}
                      >
                        <div>
                          <b>+</b>
                        </div>
                      </Plus2>
                    </GridQtyContainer2>
                  </QtyContainer2>

                  <Remove
                    style={{
                      fontSize: "12px",
                      width: viewportWidth < 700 && "auto",
                    }}
                    onClick={() =>
                      removeHandler(cart.name, cart.size, cart.qty)
                    }
                  >
                    Remove
                    <Line></Line>
                  </Remove>
                </div>
              </td>

              <td
                align="right"
                width={"20%"}
                style={{
                  color: "#1c1c1ca6",
                  fontSize: "14px",
                }}
              ></td>
            </tr>
            <div style={{ marginTop: "20px" }}></div>
          </>
        ))}
      </table>
      <br />

      <hr />

      <br />

      <DivCheckout>
        <OrderNoteContainer>
          <p style={{ fontSize: viewportWidth < 700 && "14px" }}>
            Add order note
          </p>
          <br />
          <textarea
            placeholder="How can we help you?"
            style={{
              minWidth: "100%",
              padding: "10px 10px",
              backgroundColor: "#f0efef",

              height: "100px",
              outline: "none",
            }}
            onFocus={(event) =>
              (event.target.style.border = "1px solid rgba(0,0,0, 0.5)")
            }
            /* Ketika elemen mendapatkan fokus, atur lebar border lebih tebal */
            onBlur={(event) =>
              (event.target.style.border = "1px solid rgba(0,0,0, 0.2)")
            }
          ></textarea>
        </OrderNoteContainer>
        <OrderNoteContainer2>
          <br />
          <p style={{ fontSize: "16px" }}>
            Total:{" "}
            {formatter.format(cart.reduce((acc, item) => acc + item.total, 0))}
          </p>
          <Checkout>CHECKOUT</Checkout>
        </OrderNoteContainer2>
      </DivCheckout>
      <br />
      <br />
      <hr />
      <br />

      <RecentProduct viewWidth={viewportWidth} />
    </CartContainer>
  );
};

export default Cart;
