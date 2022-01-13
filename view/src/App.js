import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// component
import Login from "./components/auth/Login";
import Header from "./components/layout/Header";
import Index from "./components//index/index";
import Navbar from "./components/layout/Navbar";
import Aboutus from "./components/about us/Aboutus";
import Contactus from "./components/contact us/Contactus";
import Footer from "./components/layout/Footer";
function App() {
  return (
    <div className="App">
      <Router>
        <header id="header" className=" typeheader-1">
          <Header />
          <Navbar />
        </header>
        <Routes>
          <Route path="/" exact element={<Index />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/about-us" exact element={<Aboutus />} />
          <Route path="/contact-us" exact element={<Contactus />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
