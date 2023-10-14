import {
  SortSidebarContainer,
  SortTitleContainer,
} from "./sort-sidebar.styles";
import { BlackBackground } from "../sidebar/sidebar.styles";
import { XIcon } from "../sidebar/sidebar.styles";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { sort } from "../../store/products/products.reducer";

const SortSidebar = ({ click, stateHandler }) => {
  const dispatch = useDispatch();
  const [queryParams, setQueryParams] = useSearchParams();
  const paramsHandler = (type) => {
    queryParams.set("sort", type);
    setQueryParams(queryParams);
    dispatch(sort(queryParams.get("sort")));
  };

  const closeHandler = () => {
    stateHandler(false);
  };

  return (
    <>
      <SortSidebarContainer open={click}>
        <SortTitleContainer>
          <div style={{ width: "20px", height: "20px" }}></div>
          <p>SORT BY</p>
          <XIcon onClick={closeHandler} />
        </SortTitleContainer>
        <hr />
        <br />

        <p
          onClick={() => paramsHandler("asc")}
          style={{
            textAlign: "center",
            marginBottom: "10px",
            opacity: queryParams.get("sort") === "asc" ? "1" : "0.5",
          }}
        >
          Alphabetically, A-Z
        </p>
        <p
          onClick={() => paramsHandler("desc")}
          style={{
            textAlign: "center",
            opacity: queryParams.get("sort") === "desc" ? "1" : "0.5",
          }}
        >
          Alphabetically, Z-A
        </p>
      </SortSidebarContainer>
      <BlackBackground style={{ display: click ? "block" : "none" }} />
    </>
  );
};

export default SortSidebar;
