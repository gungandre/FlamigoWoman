import jumbotron from "../../assets//jumbotron.jpg";
import { JumbotronContainer } from "./jumbotron-styles";
import { useState } from "react";
import Skeleton from "../skeleton/skeleton.component";

const Jumbotron = () => {
  const [loadingImg, setLoadingImg] = useState(true);

  const loadingImgHandler = () => {
    setLoadingImg(false);
  };

  return (
    <JumbotronContainer>
      {loadingImg && <Skeleton />}
      <img
        onLoad={loadingImgHandler}
        src={`${jumbotron}`}
        alt={`${jumbotron}`}
      />
    </JumbotronContainer>
  );
};

export default Jumbotron;
