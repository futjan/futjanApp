import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import homeIcon2 from "../image/catalog/demo/product/travel/2.jpg";
import LOGO from "../image/Logo.png";
import { logoutUser } from "../actions/authAction";
const Header = (props) => {
  // initialize hooks
  const dispatch = useDispatch();
  // get state from store

  const auth = useSelector((state) => state.auth);

  // show side navbar
  const showSideNavBar = () => {
    const humburgerMenuIcon =
      document.getElementsByClassName("megamenu-wrapper")[0];
    if (humburgerMenuIcon) {
      humburgerMenuIcon.classList.toggle("so-megamenu-active");
    }
  };
  // close side navBar onclick on cross icon
  const closeSideNavBar = () => {
    const humburgerMenuIcon =
      document.getElementsByClassName("megamenu-wrapper")[0];
    if (humburgerMenuIcon) {
      humburgerMenuIcon.classList.remove("so-megamenu-active");
    }
  };

  // show sub menu
  const showSubMenu = (id, id2) => {
    if (document.getElementById(`${id}`) && document.getElementById(`${id2}`)) {
      document.getElementById(`${id}`).classList.toggle("d-block");
      document.getElementById(`${id2}`).classList.toggle("d-block");
    }
  };
  return (
    <div className="header-top hidden-compact">
      <div className="container">
        <div className="row">
          <div className="col-md-5 col-lg-5 col-xs-6 header-logo ">
            <div className="navbar-logo">
              <Link to="/">
                <img
                  alt="Your Store"
                  style={{ width: "230px", height: "43px" }}
                  title="Your Store"
                  src={LOGO}
                />
              </Link>
            </div>
          </div>
          <div
            className="col-md-7 col-xs-6 col-lg-7"
            style={{ display: "flex", justifyContent: "end" }}
          >
            <div className="megamenu-style-dev megamenu-dev">
              <div className="responsive">
                <nav className="navbar-default">
                  <div className="container-megamenu horizontal">
                    <div className="navbar-header">
                      <button
                        type="button"
                        id="show-megamenu"
                        data-toggle="collapse"
                        className="navbar-toggle"
                        onClick={() => showSideNavBar()}
                      >
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                      </button>
                    </div>
                    <div className="megamenu-wrapper">
                      <span
                        id="remove-megamenu"
                        className="fa fa-times"
                        onClick={() => closeSideNavBar()}
                      ></span>
                      <div className="megamenu-pattern">
                        <div className="container">
                          <ul
                            className="megamenu"
                            data-transition="slide"
                            data-animationtime="500"
                          >
                            <li className="full-width menu-home with-sub-menu hover">
                              <p className="close-menu"></p>

                              <NavLink
                                to="/"
                                exact={true}
                                // activeClassName="active"
                                className="clearfix"

                                // onClick={() => closeSideNavBar()}
                              >
                                <strong>Home</strong>
                              </NavLink>
                              {/* <b className="caret"></b> */}
                            </li>
                            <li className="full-width menu-home with-sub-menu hover">
                              <p className="close-menu"></p>

                              <NavLink
                                className="clearfix"
                                to="/jobs"
                                // onClick={() => closeSideNavBar()}
                              >
                                <strong>JOBS</strong>
                              </NavLink>
                            </li>

                            <li className="full-width menu-home with-sub-menu hover">
                              <p className="close-menu"></p>

                              <NavLink
                                className="clearfix"
                                to="/surplus"
                                // onClick={() => closeSideNavBar()}
                              >
                                <strong>SURPLUS</strong>
                              </NavLink>
                            </li>
                            <li className="full-width menu-home with-sub-menu hover">
                              <p className="close-menu"></p>

                              <NavLink
                                className="clearfix"
                                to="/user-panel"
                                // onClick={() => closeSideNavBar()}
                              >
                                <strong>Add Post</strong>
                              </NavLink>
                            </li>

                            <li className="full-width menu-home with-sub-menu hover">
                              <p className="close-menu"></p>

                              <NavLink
                                className="clearfix"
                                to="/business"
                                // onClick={() => closeSideNavBar()}
                              >
                                <strong>Business</strong>
                              </NavLink>
                            </li>
                            {auth.isAuthenticated !== true ? (
                              <li className="full-width menu-home with-sub-menu hover">
                                <p className="close-menu"></p>

                                <NavLink
                                  className="clearfix"
                                  to="/login"
                                  // onClick={() => closeSideNavBar()}
                                >
                                  <strong>Login</strong>
                                </NavLink>
                              </li>
                            ) : null}
                            {auth.isAuthenticated === true ? (
                              <li className="full-width menu-home with-sub-menu hover">
                                <p className="close-menu"></p>
                                <a
                                  className="clearfix"
                                  onClick={() => dispatch(logoutUser())}
                                >
                                  <strong>LOGOUT</strong>
                                  <span className="labelopencart"></span>
                                </a>
                              </li>
                            ) : null}

                            {/* <li className="deal-h5 hidden">
                              <p className="close-menu"></p>
                              <a href="#" className="clearfix">
                                <strong>
                                  <img src="image/catalog/demo/menu/hot-block.png" alt="">Buy This Theme! 
                                </strong>
                              </a>
                            </li> */}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
            {/* <div className="module html--sevices ">
              <div className="clearfix sevices-menu">
                <ul>
                  <li className="col-md-4 item home">
                    <div className="icon"></div>
                    <div className="text">
                      <a>100 S Manhattan St, Amarillo,</a>
                      <a></a>
                      <p>
                        <a>TX 79104, North America</a>
                      </p>
                      <a></a>
                    </div>
                  </li>
                  <li className="col-md-4 item mail">
                    <div className="icon"> </div>
                    <div className="text">
                      <a className="name" href="#">
                        Sales@MagenTech.Com
                      </a>
                      <p>( +123 ) 456 7890</p>
                    </div>
                  </li>
                  <li className="col-md-4 item delivery">
                    <div className="icon"> </div>
                    <div className="text">
                      <a className="name" href="#">
                        Free Delivery
                      </a>
                      <p>On order over $89.00</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div> */}
          </div>
          {/* <div className="col-xs-6">
            <div className="navbar-header ">
              <button
                type="button"
                id="show-megamenu"
                data-toggle="collapse"
                className="navbar-toggle"
                onClick={() => showSideNavBar()}
              >
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
            </div>
          </div> */}
          {/* <div className="col-lg-2 col-xs-6 header-cart">
            <div className="shopping_cart">
              <div id="cart" className="btn-shopping-cart">
                <a
                  data-loading-text="Loading... "
                  className="btn-group top_cart dropdown-toggle"
                  data-toggle="dropdown"
                >
                  <div className="shopcart">
                    <span className="handle pull-left"></span>
                    <div className="cart-info">
                      <h2 className="title-cart">Shopping cart</h2>
                      <h2 className="title-cart2 hidden">My Cart</h2>
                      <span className="total-shopping-cart cart-total-full">
                        <span className="items_cart">2 </span>
                        <span className="items_cart2">item(s)</span>
                        <span className="items_carts"> - $206.80</span>
                      </span>
                    </div>
                  </div>
                </a>
                <ul className="dropdown-menu pull-right shoppingcart-box">
                  <li className="content-item">
                    <table
                      className="table table-striped"
                      style={{ marginBottom: "10px;" }}
                    >
                      <tbody>
                        <tr>
                          <td className="text-center size-img-cart">
                            <a href="#">
                              <img
                                //   src={homeIcon}
                                alt="Bougainvilleas on Lombard Street,  San Francisco, Tokyo"
                                title="Bougainvilleas on Lombard Street,  San Francisco, Tokyo"
                                className="img-thumbnail"
                              />
                            </a>
                          </td>
                          <td className="text-left">
                            <a href="product.html">
                              Bougainvilleas on Lombard Street, San Francisco,
                              Tokyo
                            </a>
                            <br /> - <small>Size M</small>{" "}
                          </td>
                          <td className="text-right">x1</td>
                          <td className="text-right">$120.80</td>
                          <td className="text-center">
                            <button
                              type="button"
                              title="Remove"
                              className="btn btn-danger btn-xs"
                            >
                              <i className="fa fa-trash-o"></i>
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <table
                      className="table table-striped"
                      style={{ marginBottom: "10px" }}
                    >
                      <tbody>
                        <tr>
                          <td className="text-center size-img-cart">
                            <a href="#">
                              <img
                                src={homeIcon2}
                                alt="Canada Travel One or Two European Facials at  Studio"
                                title="Canada Travel One or Two European Facials at  Studio"
                                className="img-thumbnail"
                              />
                            </a>
                          </td>
                          <td className="text-left">
                            <a href="product.html">
                              Canada Travel One or Two European Facials at
                              Studio
                            </a>
                            <br /> - <small>Size M</small>{" "}
                          </td>
                          <td className="text-right">x1</td>
                          <td className="text-right">$86.00</td>
                          <td className="text-center">
                            <button
                              type="button"
                              title="Remove"
                              className="btn btn-danger btn-xs"
                            >
                              <i className="fa fa-trash-o"></i>
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </li>
                  <li>
                    <div className="checkout clearfix">
                      <a href="cart.html" className="btn btn-view-cart inverse">
                        {" "}
                        View Cart
                      </a>
                      <a
                        href="checkout.html"
                        className="btn btn-checkout pull-right"
                      >
                        Checkout
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};
export default Header;
