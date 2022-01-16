import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = () => {
  const auth = useSelector((state) => state.auth);
  return auth.isAuthenticated === true ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
// export default withRouter(connect(mapStateToProps)(PrivateRoute));
