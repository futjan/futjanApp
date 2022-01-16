import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import jwt_decode from "jwt-decode";

// component
import Login from "./components/auth/Login";
import Header from "./components/layout/Header";
import Index from "./components//index/index";
import Navbar from "./components/layout/Navbar";
import Aboutus from "./components/about us/Aboutus";
import Contactus from "./components/contact us/Contactus";
import Footer from "./components/layout/Footer";
import PrivateRoute from "./utils/privateRoute";
import store from "./store";
import setAuthToken from "./utils/setAuthToken";
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
      <Provider store={store}>
        <Router>
          <header id="header" className=" typeheader-1">
            <Header />
            <Navbar />
          </header>
          <Routes>
            <Route path="/" exact element={<PrivateRoute />}>
              <Route path="/" exact element={<Index />} />
            </Route>
            <Route path="/login" exact element={<Login />} />
            <Route path="/about-us" exact element={<Aboutus />} />
            <Route path="/contact-us" exact element={<Contactus />} />
          </Routes>
          <Footer />
        </Router>
      </Provider>
    </div>
  );
}

export default App;
