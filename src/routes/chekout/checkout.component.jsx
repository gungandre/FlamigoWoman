import {
  CheckoutContainer,
  CheckoutGrid,
  CheckoutGrid2,
  TitleContainer,
  StepContainer,
  ContactContainer,
  ItemContainer,
  H2,
  ShippingContainer,
  SelectContainer,
  Select,
  Label,
  InputContainer,
  Input,
  Button,
  ItemContainer2,
  ProductsContainer,
  ProductContainer,
  ImgContainer,
  QtyContainer,
  FadeTranstition,
  Background,
  ButtonToggleAccount,
  Hr,
  LogOut,
  ItemDropdownContainer,
  ItemDropdownFlexContainer,
  Span,
  ItemDropdownContentContainer,
  ItemDropdownContent,
  TotalContainer,
} from "./checkout.styles";
import { useState } from "react";
import { cartSelector } from "../../store/cart/cart.selector";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useEffect } from "react";
import axios from "axios";
import Spinner from "../../components/spinner/spinner.component";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { selectUser } from "../../store/user/user.selector";
import { useRef } from "react";
import HeaderCheckout from "../../components/header-checkout/header-checkout.component";

import { Link } from "react-router-dom";
const formatter = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
});

const Checkout = ({ height }) => {
  const [step, setStep] = useState(1);
  const [province, setProvince] = useState(null);
  const [city, setCity] = useState(null);
  const [formData, setFormData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [ongkir, setOngkir] = useState(null);
  const [cost, setCost] = useState(0);
  const [toggleAccount, setToggleAccount] = useState(false);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [itemDropDown, setItemDropDown] = useState(true);
  const [heightItemDropdown, setHeightItemDropdown] = useState(null);
  const cart = useSelector(cartSelector);
  const stripe = useStripe();
  const elements = useElements();

  const currentUser = useSelector(selectUser);

  const contentRef = useRef(null);

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

  useEffect(() => {
    const fethData = () => {
      const config = {
        method: "get",
        url: "https://healthy-overalls-fly.cyclic.app/province",
      };

      axios(config)
        .then(function (response) {
          setProvince(response.data.rajaongkir.results);
        })
        .catch(function (error) {
          console.error(error);
        });
    };

    fethData();
  }, []);

  const continueHnadler = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const address = data.get("address");
    const country = data.get("country");
    const first_name = data.get("first_name");
    const last_name = data.get("last_name");
    const province = data.get("province");
    const postal_code = data.get("postal_code");
    const kecamatan = data.get("kecamatan");
    const phone = data.get("phone");
    const city = data.get("city");

    setFormData({
      address,
      country,
      first_name,
      last_name,
      province,
      postal_code,
      kecamatan,
      phone,
      city,
    });

    axios
      .post("https://healthy-overalls-fly.cyclic.app/cost", {
        address,
        country,
        first_name,
        last_name,
        province,
        postal_code,
        kecamatan,
        phone,
        city,
      })
      .then((response) => {
        // Tangani respons sukses di sini
        console.log("Response dari server:", response.data);
      })
      .catch((error) => {
        // Tangani kesalahan di sini
        console.error("Kesalahan:", error);
      });

    let plus = step + 1;
    setStep(plus);
  };

  const provinceChangeHandler = async (event) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://healthy-overalls-fly.cyclic.app/city/${event.target.value}`
      );
      setCity(response.data.rajaongkir.results);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const courierHandler = (event) => {
    setLoading(true);
    axios
      .post("https://healthy-overalls-fly.cyclic.app/cost", {
        city: formData.city,
        courier: event.target.value,
      })
      .then((response) => {
        // Tangani respons sukses di sini
        console.log("Response dari server:", response.data);
        setOngkir(response.data.rajaongkir.results[0]);
        setLoading(false);
      })
      .catch((error) => {
        // Tangani kesalahan di sini
        console.error("Kesalahan:", error);
      });
  };

  const total =
    cart.reduce((acc, item) => acc + item.total, 0) + parseInt(cost);

  const paymentButton = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setLoading(true);

    const response = await fetch("/.netlify/functions/create-payment-intent", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: total }),
    }).then((res) => res.json());

    const {
      paymentIntent: { client_secret },
    } = response;

    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: "Guest",
        },
      },
    });

    if (paymentResult.error) {
      toast.error("Payment Failed!", {});
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        setLoading(false);

        toast.success("Payment Successful!", {});
      }
    }
  };

  const itemDropdownHandler = () => {
    setItemDropDown(!itemDropDown);
  };

  useEffect(() => {
    if (contentRef.current) {
      const height = contentRef.current.offsetHeight;
      setHeightItemDropdown(height);
      console.log("tinggi", height);
    }
  }, []);

  return (
    <>
      <HeaderCheckout />
      <CheckoutContainer height={height}>
        {loading && (
          <Background>
            <Spinner />
          </Background>
        )}

        {viewportWidth <= 1000 && (
          <>
            <ItemDropdownContainer>
              <ItemDropdownFlexContainer>
                <Span onClick={itemDropdownHandler} click={itemDropDown}>
                  {itemDropDown ? "Hide order summary" : "Show order summary"}{" "}
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
                </Span>
                <span> {formatter.format(total)}</span>
              </ItemDropdownFlexContainer>
            </ItemDropdownContainer>

            <ItemDropdownContentContainer
              click={itemDropDown}
              tinggi={heightItemDropdown}
              ref={contentRef}
            >
              <ItemDropdownContent>
                {cart.map((item) => (
                  <ProductsContainer key={item.name}>
                    <ProductContainer>
                      <ImgContainer>
                        <img src={`/produk/${item.img}`} alt={item.img} />
                        <QtyContainer>
                          <div>{item.qty}</div>
                        </QtyContainer>
                      </ImgContainer>
                      <div
                        style={{
                          marginLeft: "15px",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <div>
                          <h1 style={{ fontSize: "14px" }}>{item.name}</h1>
                          <div
                            style={{ fontSize: "12px", fontWeight: "lighter" }}
                          >
                            {item.size}
                          </div>
                        </div>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          position: "absolute",
                          right: "0",
                          height: "100%",
                        }}
                      >
                        <div style={{ fontSize: "14px", fontWeight: "normal" }}>
                          {formatter.format(item.total)}
                        </div>
                      </div>
                    </ProductContainer>
                  </ProductsContainer>
                ))}
                <TotalContainer>
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: "15px",
                    }}
                  >
                    <div style={{ fontSize: "14px" }}>Sub Total</div>
                    <div style={{ fontSize: "13px", fontWeight: "bold" }}>
                      {formatter.format(
                        cart.reduce((acc, item) => acc + item.total, 0)
                      )}
                    </div>
                  </div>
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: "10px",
                    }}
                  >
                    <div style={{ fontSize: "14px" }}>Shipping</div>
                    <div style={{ fontSize: "14px" }}>
                      {cost ? (
                        formatter.format(cost)
                      ) : (
                        <>
                          <span style={{ fontSize: "12px", opacity: "0.8" }}>
                            Enter shipping address
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: "10px",
                    }}
                  >
                    <div style={{ fontSize: "16px", fontWeight: "bold" }}>
                      Total
                    </div>
                    <div
                      style={{
                        fontSize: "16px",
                        fontWeight: "bold",
                        letterSpacing: "0.5px",
                      }}
                    >
                      {formatter.format(total)}
                    </div>
                  </div>
                </TotalContainer>
              </ItemDropdownContent>
            </ItemDropdownContentContainer>
          </>
        )}

        <CheckoutGrid>
          <ItemContainer>
            {viewportWidth > 1000 && (
              <TitleContainer>
                <H2>FLAMIGO</H2>
                <StepContainer>
                  <small>Cart</small>
                  <svg
                    style={{ width: "11px" }}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-chevron-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                  <small
                    style={{
                      opacity: step === 1 ? "1" : "0.6",
                      fontWeight: step === 1 ? "bold" : "none",
                    }}
                  >
                    Information
                  </small>
                  <svg
                    style={{ width: "11px" }}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-chevron-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                  <small
                    style={{
                      opacity: step === 2 ? "1" : "0.6",
                      fontWeight: step === 2 ? "bold" : "none",
                    }}
                  >
                    Shipping
                  </small>
                  <svg
                    style={{ width: "11px" }}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-chevron-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                  <small
                    style={{
                      opacity: step === 3 ? "1" : "0.6",
                      fontWeight: step === 3 ? "bold" : "none",
                    }}
                  >
                    Payment
                  </small>
                </StepContainer>
              </TitleContainer>
            )}

            <ContactContainer>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <span style={{ fontSize: "14px", opacity: "0.7" }}>
                  Account
                </span>
                <ButtonToggleAccount
                  onClick={() => setToggleAccount(!toggleAccount)}
                  click={toggleAccount}
                >
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
                </ButtonToggleAccount>
              </div>

              <div style={{ marginBottom: "10px" }}>
                <p
                  style={{
                    fontSize: "14px",
                    marginBottom: "5px",
                    marginTop: "10px",
                  }}
                >
                  {currentUser && currentUser.user.email}
                </p>
                <Link to={"/account"}>
                  <LogOut click={toggleAccount}>Change account</LogOut>
                </Link>
                <Hr
                  style={{ opacity: "0.3", marginTop: "15px" }}
                  click={toggleAccount}
                />
              </div>
            </ContactContainer>
            <FadeTranstition index={step === 1}>
              <form onSubmit={continueHnadler}>
                <ShippingContainer>
                  <h2>Personal Information</h2>
                  {/* <SelectContainer>
                  <Label>Saved Adresses</Label>
                  <Select>
                    <option>gungandre</option>
                  </Select>
                </SelectContainer> */}
                  <SelectContainer>
                    <Label>Country/Region</Label>
                    <Select name="country" required>
                      <option value={"indonesia"}>Indonesia</option>
                    </Select>
                  </SelectContainer>
                  <InputContainer
                    style={{
                      justifyContent: "space-between",
                      display: viewportWidth > 1000 ? "flex" : "block",
                    }}
                  >
                    <div
                      style={{
                        width: viewportWidth > 1000 ? "50%" : "100%",
                        marginBottom: viewportWidth > 1000 ? "0px" : "20px",
                      }}
                    >
                      <Label>First name</Label>
                      <Input type="text" name="first_name" required />
                    </div>
                    <div
                      style={{ width: viewportWidth > 1000 ? "45%" : "100%" }}
                    >
                      <Label>Last name</Label>
                      <Input type="text" name="last_name" required />
                    </div>
                  </InputContainer>
                  <InputContainer>
                    <Label>Address</Label>
                    <Input type="text" name="address" required />
                  </InputContainer>

                  <InputContainer
                    style={{
                      justifyContent: "space-between",
                      display: viewportWidth > 1000 ? "flex" : "block",
                    }}
                  >
                    <div
                      style={{
                        width: viewportWidth > 1000 ? "50%" : "100%",
                        marginBottom: viewportWidth > 1000 ? "0px" : "20px",
                      }}
                    >
                      <Label>Province</Label>
                      <Select
                        onChange={provinceChangeHandler}
                        name="province"
                        required
                      >
                        <option>Select Province</option>
                        {province &&
                          province.map((data) => (
                            <option
                              key={data.province_id}
                              value={data.province_id}
                            >
                              {data.province}
                            </option>
                          ))}
                      </Select>
                    </div>
                    <div
                      style={{ width: viewportWidth > 1000 ? "45%" : "100%" }}
                    >
                      <Label>Postal code</Label>
                      <Input type="number" name="postal_code" />
                    </div>
                  </InputContainer>
                  <InputContainer>
                    <Label>City</Label>
                    <Select name="city" required>
                      <option>Select City</option>
                      {city &&
                        city.map((data) => (
                          <option key={data.city_id} value={data.city_id}>
                            {data.city_name}
                          </option>
                        ))}
                    </Select>
                  </InputContainer>
                  <InputContainer>
                    <Label>Kecamatan</Label>
                    <Input type="text" name="kecamatan" required />
                  </InputContainer>
                  <InputContainer>
                    <Label>Phone</Label>
                    <Input type="number" name="phone" required />
                  </InputContainer>
                </ShippingContainer>
                <Button type="submit">CONTINUE</Button>
              </form>
            </FadeTranstition>

            <FadeTranstition index={step === 2}>
              <ShippingContainer>
                <h2>Shipping</h2>

                <SelectContainer>
                  <Label>Courier</Label>
                  <Select onChange={courierHandler}>
                    <option>Select courier</option>
                    <option value={"jne"}>JNE</option>
                    <option value={"pos"}>POS INDONESIA</option>
                    <option value={"tiki"}>TIKI</option>
                  </Select>
                </SelectContainer>
                {ongkir && (
                  <InputContainer
                    style={{
                      justifyContent: "space-between",
                      display: "flex",
                      marginTop: "0px",
                    }}
                  >
                    <div style={{ width: "100%" }}>
                      <SelectContainer>
                        <Label>Jenis</Label>
                        <Select
                          onChange={(event) => {
                            setCost(event.target.value);
                          }}
                        >
                          {ongkir.costs.map((data) => {
                            return (
                              <option value={data.cost[0].value}>
                                {data.description} ({data.service})
                              </option>
                            );
                          })}
                        </Select>
                      </SelectContainer>
                    </div>
                  </InputContainer>
                )}
              </ShippingContainer>

              <Button
                onClick={() => {
                  let plus = step + 1;
                  setStep(plus);
                }}
              >
                CONTINUE
              </Button>
            </FadeTranstition>

            <FadeTranstition index={step === 3}>
              <ShippingContainer>
                <h2>Payment</h2>

                <SelectContainer>
                  <label>Credit Card Payment :</label>
                  <br />
                  <CardElement />
                </SelectContainer>
              </ShippingContainer>
              <Button onClick={paymentButton}>PAY NOW</Button>
              <ToastContainer />
            </FadeTranstition>
          </ItemContainer>
        </CheckoutGrid>

        {viewportWidth > 1000 && (
          <CheckoutGrid2>
            <ItemContainer2>
              {cart.map((item) => (
                <ProductsContainer key={item.name}>
                  <ProductContainer>
                    <ImgContainer>
                      <img src={`/produk/${item.img}`} alt={item.img} />
                      <QtyContainer>
                        <div>{item.qty}</div>
                      </QtyContainer>
                    </ImgContainer>
                    <div
                      style={{
                        marginLeft: "15px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <div>
                        <h1 style={{ fontSize: "14px" }}>{item.name}</h1>
                        <div
                          style={{ fontSize: "12px", fontWeight: "lighter" }}
                        >
                          {item.size}
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        position: "absolute",
                        right: "0",
                        height: "100%",
                      }}
                    >
                      <div style={{ fontSize: "14px", fontWeight: "normal" }}>
                        {formatter.format(item.total)}
                      </div>
                    </div>
                  </ProductContainer>
                </ProductsContainer>
              ))}

              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "15px",
                }}
              >
                <div style={{ fontSize: "14px" }}>Sub Total</div>
                <div style={{ fontSize: "14px", fontWeight: "bold" }}>
                  {formatter.format(
                    cart.reduce((acc, item) => acc + item.total, 0)
                  )}
                </div>
              </div>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "10px",
                }}
              >
                <div style={{ fontSize: "14px" }}>Shipping</div>
                <div style={{ fontSize: "14px" }}>{formatter.format(cost)}</div>
              </div>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "10px",
                }}
              >
                <div style={{ fontSize: "15px", fontWeight: "bold" }}>
                  Total
                </div>
                <div style={{ fontSize: "15px", fontWeight: "bold" }}>
                  {formatter.format(total)}
                </div>
              </div>
            </ItemContainer2>
          </CheckoutGrid2>
        )}
      </CheckoutContainer>
    </>
  );
};

export default Checkout;
