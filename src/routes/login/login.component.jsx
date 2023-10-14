import {
  LoginContainer,
  FormContainer,
  Input,
  ButtonLogin,
  Links,
} from "./login.styles";
import { AlertContainer } from "../../components/alert/alert.styles";
import { NavLink } from "../../components/header/header-styles";
import { auth } from "../../utils/firebase,utils";
import { signInWithEmailAndPassword } from "firebase/auth";
import { setUser } from "../../store/user/user.reducer";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Background } from "../chekout/checkout.styles";
import Spinner from "../../components/spinner/spinner.component";

const Login = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const LoginHandler = async (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    setLoading(true);

    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      console.log(user);
      dispatch(setUser(user));
      setLoading(false);
      navigate("/account");
    } catch (error) {
      setLoading(false);
      setShowAlert(true);
    }
  };

  const handleFocus = () => {
    // Mengedit elemen lainnya saat elemen input fokus
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <>
      {loading && (
        <Background>
          <Spinner />
        </Background>
      )}
      <LoginContainer>
        <h2>LOGIN</h2>
        <br />
        <p>Enter your email and password to login:</p>
        <br />
        <FormContainer onSubmit={LoginHandler}>
          {showAlert && (
            <AlertContainer>Email atau password salah</AlertContainer>
          )}

          <Input type="email" name="email" placeholder="E-mail" />
          <div style={{ position: "relative", width: "100%" }}>
            <Input
              type="password"
              name="password"
              placeholder="Password"
              onFocus={handleFocus}
              onBlur={handleBlur}
            />

            <Links
              to={"forget-password"}
              style={{
                position: "absolute",
                right: "10px",
                top: "35%",
                transform: "translateY(-50%)",
                fontSize: "12px",
                color: "rgba(0, 0, 0, 0.6)",
                transition: "color  .3s ease-in-out",
              }}
              onMouseEnter={(e) => (e.target.style.color = "black")}
              onMouseLeave={(e) =>
                (e.target.style.color = "rgba(0, 0, 0, 0.6)")
              }
              fokus={isFocused}
            >
              Forget your password?
            </Links>
          </div>

          <ButtonLogin type="submit">LOGIN</ButtonLogin>
        </FormContainer>
        <br />
        <p style={{ color: "rgba(0, 0, 0, 0.6)" }}>
          Don't have an account?{" "}
          <NavLink
            to="/register"
            style={{
              color: "rgba(0, 0, 0, 0.6)",
              textDecoration: "none",
              transition: "color 0.3s ease-in-out",
            }}
            onMouseEnter={(e) => (e.target.style.color = "black")}
            onMouseLeave={(e) => (e.target.style.color = "rgba(0, 0, 0, 0.6)")}
          >
            Sign up
          </NavLink>
        </p>
      </LoginContainer>
    </>
  );
};

export default Login;
