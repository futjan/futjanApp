import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = (props) => {
  console.log(props.from);

  const auth = useSelector((state) => state.auth);
  return auth.isAuthenticated === true ? (
    <Outlet />
  ) : (
    <Navigate to={{ pathname: "/login" }} state={{ from: props.from }} />
  );
};

export default PrivateRoute;
// export default withRouter(connect(mapStateToProps)(PrivateRoute));
