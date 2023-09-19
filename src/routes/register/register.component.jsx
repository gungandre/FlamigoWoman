import { RegisterContainer } from "./register.styles";
import { FormContainer } from "../login/login.styles";
import { Input } from "../login/login.styles";
import { ButtonRegister } from "./register.styles";
import { NavLink } from "../../components/header/header-styles";
import { auth } from "../../utils/firebase,utils";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setUser } from "../../store/user/user.reducer";
import { useDispatch } from "react-redux";

const Register = () => {
  const dispatch = useDispatch();

  const submitHandler = async (event) => {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    const rePassword = form.get("re-password");

    if (password !== rePassword) {
      return alert("Password tidak sama!");
    }

    try {
      const register = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      dispatch(setUser(register));
    } catch (error) {
      alert(error);
      console.log(error);
    }
  };

  return (
    <RegisterContainer>
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
