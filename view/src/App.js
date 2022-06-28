import React, { lazy, Suspense, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { gapi } from "gapi-script";

import jwt_decode from "jwt-decode";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
// import dotenv from "dotenv";
// component
import Header2 from "./components/layout/Header2";
import Footer from "./components/layout/Footer";
import PrivateRoute from "./utils/privateRoute";
import lazyLoader from "./components/image/477.GIF";
// css
import "./css/bootstrap/css/bootstrap.min.css";
import "./css/font-awesome/css/font-awesome.min.css";
import "./css/themecss/so_sociallogin.css";
import "./css/themecss/so_megamenu.css";
import "./css/footer/footer1.css";
import "./css/header/header4.css";
import "./css/theme.css";
import "./css/responsive.css";

import setAuthToken from "./utils/setAuthToken";
// stylesheet
import "./components/custom/css/custom.css";
// action
import Grow from "@mui/material/Grow";

import { setCurrentUser, logoutUser } from "./components/actions/authAction";
import store from "./store";

// lazy loading component
const Index = lazy(() => import("./components//index/index"));
const Login = lazy(() => import("./components/auth/Login"));
const Register = lazy(() => import("./components/auth/Register"));
const Aboutus = lazy(() => import("./components/about us/Aboutus"));
const Contactus = lazy(() => import("./components/contact us/Contactus"));
const Job = lazy(() => import("./components/job/index"));
const JobDetail = lazy(() => import("./components/job/JobDetail"));
const ForgetPassword = lazy(() => import("./components/user/ForgetPassword"));
const ResetPassword = lazy(() => import("./components/user/ResetPassword"));
const ChangePassword = lazy(() => import("./components/user/ChangePassword"));
const AdminPanel = lazy(() => import("./adminpanel/Index"));
const SurplusBusinesses = lazy(() =>
  import("./components/surplusBusiness/SurplusBusinesses")
);
const JobSeeker = lazy(() => import("./components/jobSeeker/Index"));
const UserPanel = lazy(() => import("./components/user panel/index"));
const JobSeekerDetails = lazy(() =>
  import("./components/jobSeeker/JobSeekerDetails")
);
const PageNotFound = lazy(() => import("./components/404 Page/Page404"));
const DetailSurplus = lazy(() =>
  import("./components/surplusBusiness/DetailSurplus")
);
const UserAds = lazy(() => import("./components/user ads/Index"));
const SetPassword = lazy(() => import("./components/user/SetPassword"));

// Check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());
  }
}

function GrowTransition(props) {
  return <Grow {...props} />;
}

// dotenv.config();
const App = (props) => {
  const { pathname } = useLocation();
  useEffect(() => {
    function start() {
      gapi.client.init({
        client_id:
          "532893321001-gefd5pi11rf25s8tkqd5n7er3phqcuu6.apps.googleusercontent.com",
        scope: "",
      });
    }
    gapi.load("client:auth2", start);
  }, []);
  const notification = useSelector((state) => state.notification);
  const auth = useSelector((state) => state.auth);
  return (
    <div className="App">
      <Suspense
        fallback={
          <div
            style={{
              width: "100vw",
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={lazyLoader} width="100" />
          </div>
        }
      >
        <div className="common-home res layout-4">
          <div id="wrapper" className="wrapper-fluid banners-effect-3">
            <Snackbar
              anchorOrigin={{ vertical: "top", horizontal: "center" }}
              open={notification.loading}
              TransitionComponent={GrowTransition}
              sx={{
                boxShadow: 3,
                background: "#fff",
                borderRadius: "5px",
                minWidth: "300px",
              }}
            >
              <Alert
                sx={{
                  background: "#fff",
                  width: "100%",
                  fontSize: "15px",
                  borderRadius: "5px",
                  display: "flex",
                  alignItems: "center",
                }}
                iconMapping={{
                  success: (
                    <CheckCircleOutlineIcon
                      fontSize="medium"
                      sx={{ width: "25px", height: "25px" }}
                    />
                  ),
                  error: (
                    <ErrorOutlineIcon
                      fontSize="medium"
                      sx={{ width: "25px", height: "25px" }}
                    />
                  ),
                }}
                severity={notification.type}
              >
                {notification.message}
              </Alert>
            </Snackbar>
            {pathname === "/adminpanel" ? null : <Header2 />}

            <Routes>
              {auth.isAuthenticated === false ? (
                <>
                  <Route path="/login" exact={true} element={<Login />} />
                  <Route path="/signup" exact={true} element={<Register />} />
                </>
              ) : null}

              <Route path="/" exact={true} element={<Index />} />
              <Route path="/user-ads" exact={true} element={<UserAds />} />
              <Route
                path="/forget-password"
                exact={true}
                element={<ForgetPassword />}
              />
              <Route
                path="/reset-password/:token"
                exact={true}
                element={<ResetPassword />}
              />

              <Route
                path="/set-password/:token"
                exact={true}
                element={<SetPassword />}
              />

              <Route path="/about-us" exact={true} element={<Aboutus />} />
              <Route path="/contact-us" exact={true} element={<Contactus />} />

              <Route path="/job" exact={true} element={<Job />} />
              {/* <Route path="/add-job" exact={true} element={<AddJob />} /> */}
              <Route path="/job-seeker" exact={true} element={<JobSeeker />} />
              <Route
                path="/job-seeker-detail/:id"
                exact={true}
                element={<JobSeekerDetails />}
              />

              <Route path="/surplus" exact element={<SurplusBusinesses />} />
              <Route
                path="/user-panel"
                exact={true}
                element={<PrivateRoute from="/user-panel" />}
              >
                <Route
                  path="/user-panel"
                  exact={true}
                  element={<UserPanel />}
                />
                <Route
                  path="/user-panel/change-password"
                  exact={true}
                  element={<ChangePassword />}
                />
              </Route>

              <Route
                path="/adminpanel"
                exact={true}
                element={<PrivateRoute from="/adminpanel" />}
              >
                <Route
                  path="/adminpanel"
                  exact={true}
                  element={<AdminPanel />}
                />
              </Route>

              <Route
                path="/surplus-detail/:id"
                exact
                element={<DetailSurplus />}
              />
              <Route
                path="/job-detail/:id"
                exact={true}
                element={<JobDetail />}
              />

              <Route path="*" element={PageNotFound} />
            </Routes>
            <Footer />
          </div>
        </div>
      </Suspense>
    </div>
  );
};

export default App;
