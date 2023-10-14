import { AccountContainer, AccountContent, LogOut } from "./account.styles";
import Footer from "../../components/footer/footer.component";
import { ButtonCheckout } from "../product/product.styles";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../utils/firebase,utils";
import { removeUser } from "../../store/user/user.reducer";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { Background } from "../chekout/checkout.styles";
import Spinner from "../../components/spinner/spinner.component";

const Account = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const clickHandler = () => {
    navigate("/shop");
  };

  const logoutHandler = async () => {
    setLoading(true);
    try {
      await signOut(auth);
      dispatch(removeUser());
      setLoading(false);
      navigate("/login");
    } catch (error) {
      setLoading(false);
      alert(error);
    }
  };
  return (
    <>
      {loading && (
        <Background>
          <Spinner />
        </Background>
      )}
      <AccountContainer>
        <AccountContent>
          <LogOut onClick={logoutHandler}>
            <svg
              aria-hidden="true"
              focusable="false"
              fill="none"
              width="10"
              class="icon icon-chevron-left  icon--direction-aware"
              viewBox="0 0 10 10"
              style={{ fontSize: "12px" }}
            >
              <path
                d="M7 1 3 5l4 4"
                stroke="currentColor"
                stroke-linecap="square"
              ></path>
            </svg>{" "}
            LOGOUT
          </LogOut>
          <div style={{ marginTop: "30px" }}>
            <h1
              style={{
                fontSize: "20px",
                fontWeight: "revert",
                letterSpacing: "0.5px",
              }}
            >
              YOUR ACCOUNT
            </h1>
          </div>
          <div style={{ marginTop: "30px", marginBottom: "50px" }}>
            <span>
              View all your orders and manage your account information.
            </span>
          </div>
          <div>
            <span
              style={{
                fontSize: "12px",
                opacity: "0.9",
              }}
            >
              ORDERS
            </span>

            <hr style={{ marginTop: "10px", opacity: "0.4" }} />
          </div>
          <div style={{ marginTop: "40px" }}>
            <span>You haven't placed any orders yet.</span>
          </div>

          <div style={{ width: "200px", marginTop: "40px" }}>
            <ButtonCheckout onClick={clickHandler}>
              CONTINUE SHOPPING
            </ButtonCheckout>
          </div>
        </AccountContent>
      </AccountContainer>
      <Footer />
    </>
  );
};

export default Account;
