import { RegisterContainer } from "./register.styles";
import { FormContainer } from "../login/login.styles";
import { Input } from "../login/login.styles";
import { ButtonRegister } from "./register.styles";
import { NavLink } from "../../components/header/header-styles";
import { auth } from "../../utils/firebase,utils";
import { createUserWithEmailAndPassword } from "firebase/auth";

import { Background } from "../chekout/checkout.styles";
import Spinner from "../../components/spinner/spinner.component";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const submitHandler = async (event) => {
    event.preventDefault();
    setLoading(true);

    const form = new FormData(event.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    const rePassword = form.get("re-password");

    if (password !== rePassword) {
      return alert("Password tidak sama!");
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);

      setLoading(false);
      navigate("/login");
    } catch (error) {
      alert(error);
      setLoading(false);
    }
  };

  return (
    <RegisterContainer>
      {loading && (
        <Background>
          <Spinner />
        </Background>
      )}
      <h2>SIGN UP</h2>
      <br />
      <p>Please fill in the information below:</p>
      <br />
      <FormContainer onSubmit={submitHandler}>
        <Input type="text" name="nickname" placeholder="Nickname" />
        <Input type="email" name="email" placeholder="E-mail" />
        <Input type="password" name="password" placeholder="Password" />
        <Input
          type="password"
          name="re-password"
          placeholder="Re-enter password"
        />
        <ButtonRegister type="submit">CREATE ACCOUNT</ButtonRegister>
      </FormContainer>
      <br />
      <p style={{ color: "rgba(0, 0, 0, 0.6)" }}>
        Already have an account?{" "}
        <NavLink
          to="/login"
          style={{
            color: "rgba(0, 0, 0, 0.6)",
            textDecoration: "none",
            transition: "color 0.3s ease-in-out",
          }}
          onMouseEnter={(e) => (e.target.style.color = "black")}
          onMouseLeave={(e) => (e.target.style.color = "rgba(0, 0, 0, 0.6)")}
        >
          Login
        </NavLink>
      </p>
    </RegisterContainer>
  );
};

export default Register;
