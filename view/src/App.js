import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import jwt_decode from "jwt-decode";

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
import store from "./store";
import setAuthToken from "./utils/setAuthToken";
// stylesheet
import "./components/custom/css/custom.css";
// action
import { setCurrentUser, logoutUser } from "./components/actions/authAction";
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
const SurplusBusinesses = lazy(() =>
  import("./components/surplusBusiness/SurplusBusinesses")
);
const JobSeeker = lazy(() => import("./components/jobSeeker/Index"));
const UserPanel = lazy(() => import("./components/user panel/index"));
const AddJob = lazy(() => import("./components/job/AddJob"));
const AddJobSeeker = lazy(() => import("./components/jobSeeker/AddJobSeeker"));
const JobSeekerDetails = lazy(() =>
  import("./components/jobSeeker/JobSeekerDetails")
);
const DetailSurplus = lazy(() =>
  import("./components/surplusBusiness/DetailSurplus")
);
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

const App = (props) => {
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
            <Router>
              <Provider store={store}>
                <Header2 />
                <Routes>
                  <Route path="/" exact={true} element={<Index />} />
                  <Route path="/login" exact={true} element={<Login />} />
                  <Route path="/signup" exact={true} element={<Register />} />
                  <Route
                    path="/forget-password"
                    exact={true}
                    element={<ForgetPassword />}
                  />
                  <Route
                    path="/:token"
                    exact={true}
                    element={<ResetPassword />}
                  />
                  <Route path="/about-us" exact={true} element={<Aboutus />} />
                  <Route
                    path="/contact-us"
                    exact={true}
                    element={<Contactus />}
                  />
                  <Route
                    path="/job-detail/:id"
                    exact={true}
                    element={<JobDetail />}
                  />
                  <Route path="/job" exact={true} element={<Job />} />
                  <Route path="/add-job" exact={true} element={<AddJob />} />
                  <Route
                    path="/job-seeker"
                    exact={true}
                    element={<JobSeeker />}
                  />
                  <Route
                    path="/job-seeker-detail/:id"
                    exact={true}
                    element={<JobSeekerDetails />}
                  />
                  <Route
                    path="/add-job-seeker"
                    exact={true}
                    element={<AddJobSeeker />}
                  />

                  <Route path="/business" exact={true} element={<Job />} />
                  {/* <Route
                    path="/add-surplus"
                    exact
                    element={<AddSurplusBusiness />}
                  /> */}
                  <Route
                    path="/surplus"
                    exact
                    element={<SurplusBusinesses />}
                  />
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
                    path="/surplus-detail/:id"
                    exact
                    element={<DetailSurplus />}
                  />
                </Routes>
                <Footer />
              </Provider>
            </Router>
          </div>
        </div>
      </Suspense>
    </div>
  );
};

export default App;
