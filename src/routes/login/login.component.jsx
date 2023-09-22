import {
  LoginContainer,
  FormContainer,
  Input,
  ButtonLogin,
} from "./login.styles";
import { AlertContainer } from "../../components/alert/alert.styles";
import { NavLink } from "../../components/header/header-styles";
import { auth } from "../../utils/firebase,utils";
import { signInWithEmailAndPassword } from "firebase/auth";
import { setUser } from "../../store/user/user.reducer";
import { useDispatch } from "react-redux";
import { useState } from "react";

const Login = () => {
  const [showAlert, setShowAlert] = useState(false);
  const dispatch = useDispatch();

  const LoginHandler = async (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      console.log(user);
      dispatch(setUser(user));
    } catch (error) {
      setShowAlert(true);
    }
  };

  return (
    <>
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
            <Input type="password" name="password" placeholder="Password" />
            <NavLink
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
            >
              Forget your password?
            </NavLink>
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
