import { WhatsappContainer } from "./whatsapp.styles";
import { NavLink } from "../header/header-styles";

const Whatsapp = () => {
  return (
    <NavLink to={"https://wa.me/+6288219154773"}>
      <WhatsappContainer />
    </NavLink>
  );
};

export default Whatsapp;
