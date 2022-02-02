import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import jwt_decode from "jwt-decode";

// component
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Header from "./components/layout/Header";
import Index from "./components//index/index";
import Navbar from "./components/layout/Navbar";
import Aboutus from "./components/about us/Aboutus";
import Contactus from "./components/contact us/Contactus";
import Job from "./components/jobs/Jobs";
import JobDetail from "./components/jobs/JobDetail";
import Footer from "./components/layout/Footer";
import ForgetPassword from "./components/user/ForgetPassword";
import ResetPassword from "./components/user/ResetPassword";
import PrivateRoute from "./utils/privateRoute";
import SurplusBusinesses from "./components/surplusBusiness/SurplusBusinesses";
import UserPanel from "./components/user panel/index";
import AddSurplusBusiness from "./components/surplusBusiness/AddSurplusBusiness";
import DetailSurplus from "./components/surplusBusiness/DetailSurplus";

// css

import "./css/bootstrap/css/bootstrap.min.css";
import "./css/font-awesome/css/font-awesome.min.css";
// import "./js/datetimepicker/bootstrap-datetimepicker.min.css";
// import "./js/owl-carousel/owl.carousel.css";
import "./css/themecss/lib.css";
// import "./js/jquery-ui/jquery-ui.min.css";
// import "./js/minicolors/miniColors.css";
import "./css/themecss/so_sociallogin.css";
import "./css/themecss/so_searchpro.css";
import "./css/themecss/so_megamenu.css";

import "./css/themecss/so_megamenu.css";
import "./css/themecss/so-categories.css";
import "./css/themecss/so-listing-tabs.css";
import "./css/themecss/so-category-slider.css";
import "./css/themecss/so-newletter-popup.css";
import "./css/footer/footer1.css";
import "./css/header/header1.css";
import "./css/theme.css";
import "./css/responsive.css";
// import "./css/quickview/quickview.css";

import store from "./store";
import setAuthToken from "./utils/setAuthToken";
// stylesheet
import "./components/custom/css/custom.css";
// import history from "./history";
// action
import { setCurrentUser, logoutUser } from "./components/actions/authAction";
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

function App(props) {
  return (
    <div className="App">
      <Router>
        <Provider store={store}>
          <header id="header" className=" typeheader-1">
            <Header />
            {/* <Navbar /> */}
          </header>
          <Routes>
            <Route path="/" exact element={<Index />} />
            <Route path="/login" exact element={<Login />} />
            <Route path="/signup" exact element={<Register />} />
            <Route path="/forget-password" exact element={<ForgetPassword />} />
            <Route path="/:token" exact element={<ResetPassword />} />
            <Route path="/about-us" exact element={<Aboutus />} />
            <Route path="/contact-us" exact element={<Contactus />} />
            <Route path="/jobs" exact element={<Job />} />
            <Route path="/business" exact element={<Job />} />
            <Route path="/details" exact element={<JobDetail />} />
            {/* <Route path="/add-surplus" exact element={<AddSurplusBusiness />} /> */}
            <Route path="/surplus" exact element={<SurplusBusinesses />} />
            <Route path="/user-panel" exact element={<PrivateRoute />}>
              <Route path="/user-panel" exact element={<UserPanel />} />
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
  );
}

export default App;
