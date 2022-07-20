import React, { useState } from "react";
import LOGO from "../image/Logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const [email, setEmail] = useState("");
  return (
    <footer className="footer-container typefooter-1">
      <div className="footer-has-toggle" id="collapse-footer">
        <div className="so-page-builder">
          <div className="container-fluid page-builder-ltr">
            <div className="row row_sh6r  footer--top  row-color ">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 col_971a  float_none container">
                <div className="row row_dmol  ">
                  <div className="col-lg-9 col-md-9 col-sm-9 col-xs-12 col_hcbx block--newletter">
                    <div className="module news-letter">
                      <div
                        className="so-custom-default newsletter"
                        style={{ width: "100%", backgroundColor: "#f0f0f0" }}
                      >
                        <div className="btn-group title-block">
                          <div className="popup-title page-heading">
                            <i className="fa fa-paper-plane-o"></i> Sign up to
                            Newsletter
                          </div>
                          <div className="newsletter_promo">
                            And receive <span>$29</span>coupon for first
                            shopping
                          </div>
                        </div>
                        <div className="modcontent block_content">
                          <form
                            method="post"
                            id="signup"
                            name="signup"
                            className="form-group form-inline signup send-mail"
                          >
                            <div className="input-group form-group required">
                              <div className="input-box">
                                <input
                                  type="email"
                                  placeholder="Your email address..."
                                  value={email}
                                  onChange={(e) => setEmail(e.target.value)}
                                  className="form-control"
                                  id="txtemail"
                                  name="txtemail"
                                  size="55"
                                />
                              </div>
                              <div className="input-group-btn subcribe">
                                <button
                                  className="btn btn-primary"
                                  type="button"
                                  onClick={() => setEmail("")}
                                >
                                  <i className="fa fa-envelope hidden"></i>
                                  <span>Subscribe</span>
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12 col_h1e7 block--social">
                    <div className="footer-social">
                      <h3 className="block-title">Follow us</h3>
                      <div className="socials">
                        <a
                          href="https://www.facebook.com/"
                          className="facebook"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="fa fa-facebook"></i>
                        </a>
                        <a
                          href="https://twitter.com/"
                          className="twitter"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="fa fa-twitter"></i>
                        </a>

                        <a
                          href="https://www.instagram.com/"
                          className="instagram"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <span className="name-social">Instagram</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid page-builder-ltr">
            <div className="row row_z1do  footer--center  row-color ">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 col_x6fe  float_none container">
                <div className="row row_wprs  ">
                  <div className="col-lg-15 col-md-15 col-sm-4 col-xs-6 col_yb5e footer--link">
                    <Link to="/">
                      <img alt="Futjan" width="100" title="Futjan" src={LOGO} />
                    </Link>
                    <p style={{ lineHeight: "15px", marginTop: "10px" }}>
                      {" "}
                      Always deliver more than expected.
                    </p>
                    <div className="footer-social">
                      <h4 className="block-title">Follow us</h4>
                      <div className="socials">
                        <a
                          href="https://www.facebook.com/"
                          className="facebook"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="fa fa-facebook"></i>
                        </a>
                        <a
                          href="https://twitter.com/"
                          className="twitter"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="fa fa-twitter"></i>
                        </a>

                        <a
                          href="https://www.instagram.com/"
                          className="instagram"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="fa fa-instagram" aria-hidden="true"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-15 col-md-15 col-sm-4 col-xs-6 col_1tke footer--link"></div>
                  <div className="col-lg-15 col-md-15 col-sm-4 col-xs-6 col_1tke footer--link"></div>
                  <div className="col-lg-15 col-md-15 col-sm-4 col-xs-6 col_1tke footer--link">
                    <h3 className="title-footer">Pages</h3>
                    <ul className="links">
                      <li>
                        <Link to="/login">Login</Link>
                      </li>
                      <li>
                        <Link to="/signup">Register</Link>
                      </li>
                      <li>
                        <Link to="/user-panel">Post ad</Link>
                      </li>
                      <li>
                        <Link to="/favourite">Favourite</Link>
                      </li>
                      <li>
                        <Link to="/about-us">About us</Link>
                      </li>
                      <li>
                        <Link to="/contact-us">Contact us</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-15 col-md-15 col-sm-4 col-xs-6 col_1tke footer--link">
                    <h3 className="title-footer">Services</h3>
                    <ul className="links">
                      <li>
                        <Link to="/surplus">Surplus</Link>
                      </li>
                      <li>
                        <Link to="/job">Jobs</Link>
                      </li>
                      <li>
                        <Link to="//job-seeker">Job seekers</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="container-fluid page-builder-ltr"
            style={{ padding: "0" }}
          >
            <div className="row row_qof8  footer--center3  row-color ">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 col_up4v  float_none ">
                <div className="row row_fymn  ">
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 col_1yf0">
                    <div className="contactinfo">
                      <h4 className="title-footer">Our Contact</h4>
                      <p>
                        They key is to have every key, the key to open every
                        door. We will never see them
                      </p>
                      <div className="content-footer">
                        <div className="address">
                          <label>
                            <i
                              className="fa fa-map-marker"
                              aria-hidden="true"
                            ></i>
                          </label>
                          <span>
                            100 S Manhattan St, Amarillo, TX 79104, North
                            America
                          </span>
                        </div>
                        <div className="phone">
                          <label>
                            <i className="fa fa-phone" aria-hidden="true"></i>
                          </label>
                          <span>( +123 )4 567 890 - ( +123 )4 567 899</span>
                        </div>
                        <div className="email">
                          <label>
                            <i className="fa fa-envelope"></i>
                          </label>
                          <a href="https://www.google.com">
                            Contact@TopDeals.Com
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 
      <div className="footer-toggle hidden-lg hidden-md">
        <a
          className="showmore collapsed"
          data-toggle="collapse"
          href="https://www.google.com"
          aria-expanded="false"
          aria-controls="collapse-footer"
        >
          <span className="toggle-more">
            <i className="fa fa-angle-double-down"></i>Show More
          </span>
          <span className="toggle-less">
            <i className="fa fa-angle-double-up"></i>Show less
          </span>
        </a>
      </div> */}

      <div className="footer-bottom ">
        <div className="container">
          <div className="row">
            <div className="col-md-7  col-sm-7 copyright">
              All Rights Reserved © 2022
            </div>

            <div className="col-md-5 col-sm-5 paymen">
              {/* <img src="image/catalog/demo/payment/payments-1.png" alt="imgpayment"> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
