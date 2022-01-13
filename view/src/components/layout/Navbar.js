import React from "react";
import { Link } from "react-router-dom";
const Navbar = (props) => {
  return (
    <div className="header-center">
      <div className="container">
        <div className="row">
          {/* <!-- Menuhome --> */}
          <div className="col-lg-8 col-md-8 col-sm-1 col-xs-3 header-menu">
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
                      >
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                      </button>
                    </div>
                    <div className="megamenu-wrapper">
                      <span id="remove-megamenu" className="fa fa-times"></span>
                      <div className="megamenu-pattern">
                        <div className="container">
                          <ul
                            className="megamenu"
                            data-transition="slide"
                            data-animationtime="500"
                          >
                            <li className="full-width menu-home with-sub-menu hover">
                              <p className="close-menu"></p>

                              <Link className="clearfix" to="/">
                                <strong>Home</strong>
                              </Link>
                              {/* <b className="caret"></b> */}
                            </li>
                            <li className="full-width menu-home with-sub-menu hover">
                              <p className="close-menu"></p>

                              <Link className="clearfix" to="/login">
                                <strong>Login</strong>
                              </Link>
                              {/* <b className="caret"></b> */}
                            </li>
                            <li className="full-width option2 with-sub-menu hover">
                              <p className="close-menu"></p>

                              <Link to="/about-us" className="clearfix">
                                <strong>About us</strong>
                              </Link>
                              <span className="labelopencart"></span>
                              {/* <b className="caret"></b> */}
                            </li>
                            <li className="full-width option2 with-sub-menu hover">
                              <p className="close-menu"></p>
                              <Link to="/contact-us" className="clearfix">
                                <strong>Contact us</strong>
                                <span className="labelopencart"></span>
                              </Link>
                              {/* <b className="caret"></b> */}
                            </li>

                            <li className="deal-h5 hidden">
                              <p className="close-menu"></p>
                              <a href="#" className="clearfix">
                                <strong>
                                  {/* <img src="image/catalog/demo/menu/hot-block.png" alt="">Buy This Theme! */}
                                </strong>
                              </a>
                            </li>
                            <li className="deal-h5 hidden">
                              <p className="close-menu"></p>
                              <a href="#" className="clearfix">
                                <strong>Today Deals</strong>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
          {/* <!--Searchhome-->  */}
          <div className="col-lg-4 col-md-4 col-sm-11 col-xs-9 header-search">
            <div id="sosearchpro" className="sosearchpro-wrapper so-search ">
              <form method="GET" action="index.php">
                <div id="search0" className="search input-group form-group">
                  <div className="select_category filter_type  icon-select">
                    <select className="no-border" name="category_id">
                      <option value="0">All Categories </option>
                      <option value="82 ">Book Stationery </option>
                      <option value="65">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Girls New{" "}
                      </option>
                      <option value="56">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Kitchen{" "}
                      </option>
                      <option value="61">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Pearl mens{" "}
                      </option>
                      <option value="38 ">Laptop &amp; Notebook </option>
                      <option value="52 ">Spa &amp; Massage </option>
                      <option value="44">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Latenge mange{" "}
                      </option>
                      <option value="53">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Necklaces{" "}
                      </option>
                      <option value="54">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Pearl Jewelry{" "}
                      </option>
                      <option value="55">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Slider 925{" "}
                      </option>
                      <option value="24">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Phones &amp; PDAs{" "}
                      </option>
                      <option value="59 ">Sport &amp; Entertaiment </option>
                      <option value="69">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Camping &amp;
                        Hiking{" "}
                      </option>
                      <option value="70">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Cusen mariot{" "}
                      </option>
                      <option value="74">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Engite nanet{" "}
                      </option>
                      <option value="64">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Fashion{" "}
                      </option>
                      <option value="66">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Men{" "}
                      </option>
                      <option value="60 ">Travel &amp; Vacation </option>
                      <option value="71">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Best Tours{" "}
                      </option>
                      <option value="72">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Cruises{" "}
                      </option>
                      <option value="73">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Destinations{" "}
                      </option>
                      <option value="67">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Hotel &amp; Resort{" "}
                      </option>
                      <option value="63">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Infocus{" "}
                      </option>
                      <option value="18 ">Laptops &amp; Notebooks </option>
                      <option value="46">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Macs{" "}
                      </option>
                      <option value="45">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Windows{" "}
                      </option>
                      <option value="34 ">Food &amp; Restaurant </option>
                      <option value="47">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Hanet magente{" "}
                      </option>
                      <option value="43">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Knage unget{" "}
                      </option>
                      <option value="48">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Punge nenune{" "}
                      </option>
                      <option value="49">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Qunge genga{" "}
                      </option>
                      <option value="50">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Tange manue{" "}
                      </option>
                      <option value="51">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Web Cameras{" "}
                      </option>
                      <option value="39 ">Shop Collection </option>
                      <option value="40">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Hanet magente{" "}
                      </option>
                      <option value="41">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Knage unget{" "}
                      </option>
                      <option value="42">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Latenge mange{" "}
                      </option>
                      <option value="58">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Punge nenune{" "}
                      </option>
                      <option value="17">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Qunge genga{" "}
                      </option>
                      <option value="57">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Tange manue{" "}
                      </option>
                      <option value="35 ">Fashion &amp; Accessories </option>
                      <option value="36">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Dress Ladies{" "}
                      </option>
                      <option value="31">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Jean{" "}
                      </option>
                      <option value="27">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Men Fashion{" "}
                      </option>
                      <option value="88">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; T-shirt{" "}
                      </option>
                      <option value="26">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Trending{" "}
                      </option>
                      <option value="37">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Western Wear{" "}
                      </option>
                      <option value="20">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Women Fashion{" "}
                      </option>
                      <option value="32">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Bags{" "}
                      </option>
                      <option value="33 ">Digital &amp; Electronics </option>
                      <option value="83">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Cell Computers{" "}
                      </option>
                      <option value="84">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Computer
                        Accessories{" "}
                      </option>
                      <option value="85">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Computer Headsets{" "}
                      </option>
                      <option value="86">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Desna Jacket{" "}
                      </option>
                      <option value="87">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Electronics{" "}
                      </option>
                      <option value="89">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Headphone{" "}
                      </option>
                      <option value="90">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Laptops{" "}
                      </option>
                      <option value="78">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Mobiles{" "}
                      </option>
                      <option value="79">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Sound{" "}
                      </option>
                      <option value="80">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; USB &amp; HDD{" "}
                      </option>
                      <option value="81">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; VGA and CPU{" "}
                      </option>
                      <option value="62">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Video &amp; Camera{" "}
                      </option>
                      <option value="76">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Video You{" "}
                      </option>
                      <option value="75">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Wireless Speakers{" "}
                      </option>
                      <option value="29">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Camera New{" "}
                      </option>
                      <option value="28">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Case{" "}
                      </option>
                      <option value="30">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Cell &amp; Cable{" "}
                      </option>
                      <option value="77">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Mobile &amp; Table{" "}
                      </option>
                      <option value="25">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Bluetooth Speakers{" "}
                      </option>
                    </select>
                  </div>
                  <input
                    className="autosearch-input form-control"
                    type="text"
                    value=""
                    size="50"
                    autocomplete="off"
                    placeholder="Search"
                    name="search"
                  />

                  <span className="input-group-btn">
                    <button
                      type="submit"
                      className="button-search btn btn-default btn-lg"
                      name="submit_search"
                    >
                      <i className="fa fa-search"></i>
                      <span className="hidden">Search</span>
                    </button>
                  </span>
                </div>
                <input type="hidden" name="route" value="product/search" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
