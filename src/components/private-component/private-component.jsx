import { useSelector } from "react-redux/es/hooks/useSelector";
import { Navigate } from "react-router-dom";
import { selectUser } from "../../store/user/user.selector";

const PrivateComponent = ({ children }) => {
  const user = useSelector(selectUser);

  return user ? children : <Navigate to="/login" />;
};

export default PrivateComponent;
