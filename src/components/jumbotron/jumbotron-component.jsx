import jumbotron from "../../assets//jumbotron.jpg";
import { JumbotronContainer } from "./jumbotron-styles";

const Jumbotron = () => {
  return (
    <JumbotronContainer>
      <img src={`${jumbotron}`} alt={`${jumbotron}`} />
    </JumbotronContainer>
  );
};

export default Jumbotron;
