import React, { useState } from "react";
import LOGO from "../image/Logo.png";
import { Link } from "react-router-dom";
import FutjanQrcode from "../image/futjanQrcode.png";
import { subscribeNewsLetter } from "../actions/userAction";
import { useDispatch } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import PlayStore from "../image/playStore.png";
import AppStore from "../image/AppStore.png";
const Footer = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  // initialize hooks
  const dispatch = useDispatch();

  // subscribe
  const subscribeFunc = (value) => {
    setEmail("");
    setLoading(value);
  };

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
                            newsletter for latest update
                          </div>
                          {/* <div className="newsletter_promo">
                            And receive <span>$29</span>coupon for first
                            shopping
                          </div> */}
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
                                {/* <CircularProgress
                                      sx={{
                                        color: "#ff5e00",
                                      }}
                                    /> */}
                                {loading === true ? (
                                  <button
                                    className="btn btn-primary d-flex justify-content-center align-items-center flex-gap-2"
                                    type="button"
                                  >
                                    <CircularProgress
                                      sx={{
                                        color: "#fff",
                                      }}
                                    />
                                    <span>Subscribe</span>
                                  </button>
                                ) : (
                                  <button
                                    className="btn btn-primary d-flex justify-content-center align-items-center flex-gap-2"
                                    type="button"
                                    onClick={() =>
                                      dispatch(
                                        subscribeNewsLetter(
                                          { email },
                                          subscribeFunc
                                        )
                                      )
                                    }
                                  >
                                    <span>Subscribe</span>
                                  </button>
                                )}
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
                          <i className="fa fa-instagram" aria-hidden="true"></i>
                        </a>
                        <a
                          href="https://www.google.com/account"
                          className="instagram"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i
                            className="fa fa-google-plus"
                            aria-hidden="true"
                          ></i>
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
                      <img alt="Futjan" width="75%" title="Futjan" src={LOGO} />
                    </Link>
                    <p style={{ lineHeight: "15px", margin: "20px 0" }}>
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
                        <a
                          href="https://www.google.com/account"
                          className="instagram"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i
                            className="fa fa-google-plus"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </div>
                    </div>
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
                        <Link to="/job-seeker">Job seekers</Link>
                      </li>
                      <li>
                        <Link to="/">Business</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-15 col-md-15 col-sm-4 col-xs-6 col_1tke footer--link">
                    <h3 className="title-footer">Pages</h3>
                    <ul className="links">
                      <li>
                        <Link to="/login">Login</Link>
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
                    <h3 className="title-footer">Futjan</h3>
                    <ul className="links">
                      <li>
                        <Link to="/help-center">Help Center</Link>
                      </li>

                      <li>
                        <Link to="/term-and-condition">
                          Legal and Privacy Information
                        </Link>
                      </li>
                      <li>
                        <Link to="/">Blogs</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-15 col-md-15 col-sm-4 col-xs-6 col_1tke footer--link">
                    {/* <h3 className="title-footer">Get it on</h3> */}
                    <div
                      className="d-flex justify-content-center flex-dir-col align-items-center"
                      style={{ marginTop: "25px" }}
                    >
                      <img src={FutjanQrcode} alt="qrcode" width="70%" />
                      <div
                        className="d-flex justify-content-center  align-items-center"
                        style={{ gap: "10px", marginTop: "20px" }}
                      >
                        <a
                          href="http://play.google.com/store/apps"
                          style={{ flex: "1" }}
                        >
                          <img
                            src={PlayStore}
                            alt="googel play store"
                            width="99%"
                          />
                        </a>
                        <a
                          href="https://www.apple.com/app-store/"
                          style={{ flex: "1" }}
                        >
                          <img src={AppStore} alt="app store" width="100%" />
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
      <div className="footer-bottom ">
        <div className="container">
          <div className="text-align-center">
            Copyright ©️ 2022 Futjan All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
