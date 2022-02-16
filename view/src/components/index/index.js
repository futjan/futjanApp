import React from "react";
import icon1 from "../image/catalog/demo/menu/icon/icon-1.png";
import icon3 from "../image/catalog/demo/menu/icon/icon-3.png";
import icon5 from "../image/catalog/demo/menu/icon/icon-5.png";
import icon9 from "../image/catalog/demo/menu/icon/icon-9.png";
import icon6 from "../image/catalog/demo/menu/icon/icon-6.png";
import slider1 from "../image/catalog/demo/slider/home1/slider.jpg";
import banner1 from "../image/catalog/demo/banners/home1/bn-1.jpg";
import banner2 from "../image/catalog/demo/banners/home1/bn-2.jpg";
import banner3 from "../image/catalog/demo/banners/home1/bn-3.jpg";
import banner4 from "../image/catalog/demo/banners/home1/bn-4.jpg";
import spa1 from "../image/catalog/demo/product/spa/5-270x270.jpg";

import travel from "../image/catalog/demo/product/travel/2-370x370.jpg";
import travel5 from "../image/catalog/demo/product/travel/5-370x370.jpg";

import megamenu from "../image/catalog/demo/menu/img-static-megamenu-h.jpg";

const Index = (props) => {
  return (
    <div className="common-home res layout-1 loaded hidden-scorll">
      <div id="wrapper" className="wrapper-fluid banners-effect-10">
        <div id="content">
          <div className="custom-scoll hidden-sm hidden-md hidden-xs">
            <div className="custom-html">
              <div className="scoll-cate list_diemneo">
                <ul id="nav-scroll">
                  <li className="neo1">
                    <a href="#box-link1">
                      <span>Hot deal</span>
                    </a>
                  </li>
                  <li className="neo2">
                    <a href="#box-link2">
                      <span>Spa</span>
                    </a>
                  </li>
                  <li className="neo3">
                    <a href="#box-link3">
                      <span>Fashion</span>
                    </a>
                  </li>
                  <li className="neo4">
                    <a href="#box-link4">
                      <span>Travel</span>
                    </a>
                  </li>
                  <li className="neo5">
                    <a href="#box-link5">
                      <span>Digital</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="so-page-builder">
            <div
              className="container page-builder-ltr"
              style={{ marginTop: "20px" }}
            >
              <div className="row row_a90w  row-style">
                {/* <!-- Menu left--> */}
                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 col_vnxd  menu-left">
                  <div className="row row_f8gy  ">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 col_gafz col-style megamenu-style-dev megamenu-dev">
                      <div className="responsive">
                        <div className="so-vertical-menu no-gutter">
                          <nav className="navbar-default">
                            <div className=" container-megamenu  container   vertical  ">
                              <div id="menuHeading">
                                <div className="megamenuToogle-wrapper">
                                  <div className="megamenuToogle-pattern">
                                    <div className="container">
                                      <div>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                      </div>
                                      <span className="title-mega">
                                        All Categories
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="navbar-header">
                                <span className="title-navbar hidden-lg hidden-md">
                                  {" "}
                                  All Categories{" "}
                                </span>
                                <button
                                  type="button"
                                  id="show-verticalmenu"
                                  data-toggle="collapse"
                                  className="navbar-toggle"
                                >
                                  <span className="icon-bar"></span>
                                  <span className="icon-bar"></span>
                                  <span className="icon-bar"></span>
                                </button>
                              </div>
                              <div className="vertical-wrapper">
                                <span
                                  id="remove-verticalmenu"
                                  className="fa fa-times"
                                ></span>
                                <div className="megamenu-pattern">
                                  <div className="container">
                                    <ul
                                      className="megamenu"
                                      data-transition="slide"
                                      data-animationtime="300"
                                    >
                                      <li className="item-vertical  style1">
                                        <p className="close-menu"></p>
                                        <a href="#" className="clearfix">
                                          <span>
                                            <strong>
                                              <img src={icon6} alt="" />
                                              Hot Deal
                                            </strong>
                                          </span>
                                        </a>
                                      </li>
                                      <li className="item-vertical  vertical-style2 with-sub-menu hover">
                                        <p className="close-menu"></p>
                                        <a className="clearfix">
                                          <span>
                                            <strong>
                                              <img src={icon1} alt="" />
                                              Electronics
                                            </strong>
                                          </span>
                                          <b className="fa fa-caret-right"></b>
                                        </a>
                                        <div
                                          className="sub-menu"
                                          data-subwidth="100"
                                        >
                                          <div className="content">
                                            <div className="row">
                                              <div className="col-sm-12">
                                                <div className="html item-1">
                                                  <div className="row">
                                                    <div className="col-lg-7 col-md-7 col-sm-8">
                                                      <div className="item-3 col-lg-6 col-md-6 icon-1">
                                                        <a
                                                          href="#"
                                                          title="Mobile &amp; Table"
                                                        >
                                                          Mobile &amp; Table
                                                        </a>
                                                        <ul>
                                                          <li>
                                                            <a
                                                              href="#"
                                                              title="Laptops &amp; Tablets"
                                                            >
                                                              Laptops &amp;
                                                              Tablets
                                                            </a>
                                                          </li>
                                                          <li>
                                                            <a
                                                              href="#"
                                                              title="Computer Accessories"
                                                            >
                                                              Computer
                                                              Accessories
                                                            </a>
                                                          </li>
                                                        </ul>
                                                      </div>
                                                      <div className="item-3 col-lg-6 col-md-6 cat-child icon-2 parent">
                                                        <a
                                                          href="#"
                                                          title="Sound"
                                                        >
                                                          Sound
                                                        </a>
                                                        <ul>
                                                          <li className="">
                                                            <a
                                                              href="#"
                                                              title="Bluetooth Speakers"
                                                            >
                                                              Bluetooth Speakers
                                                            </a>
                                                          </li>
                                                          <li className="">
                                                            <a
                                                              href="#"
                                                              title="Wireless Speakers"
                                                            >
                                                              Wireless Speakers
                                                            </a>
                                                          </li>
                                                        </ul>
                                                      </div>
                                                      <div className="item-3 col-lg-6 col-md-6 cat-child icon-3 parent">
                                                        <a
                                                          href="#"
                                                          title="Headphone"
                                                        >
                                                          Headphone
                                                        </a>
                                                        <ul>
                                                          <li className="">
                                                            <a
                                                              href="#"
                                                              title="VGA and CPU"
                                                            >
                                                              VGA and CPU
                                                            </a>
                                                          </li>
                                                          <li className="">
                                                            <a
                                                              href="#"
                                                              title="Desna Jacket"
                                                            >
                                                              Desna Jacket
                                                            </a>
                                                          </li>
                                                        </ul>
                                                      </div>
                                                      <div className="item-3 col-lg-6 col-md-6 cat-child icon-4 parent">
                                                        <a
                                                          href="#"
                                                          title="Video &amp; Camera"
                                                        >
                                                          Video &amp; Camera
                                                        </a>
                                                        <ul>
                                                          <li className="">
                                                            <a
                                                              href="#"
                                                              title="Camera New"
                                                            >
                                                              Camera New
                                                            </a>
                                                          </li>
                                                          <li className="">
                                                            <a
                                                              href="#"
                                                              title="Video You"
                                                            >
                                                              Video You
                                                            </a>
                                                          </li>
                                                        </ul>
                                                      </div>
                                                      <div className="item-3 col-lg-6 col-md-6 cat-child icon-5 parent">
                                                        <a
                                                          href="#"
                                                          title="Mobile &amp; Table"
                                                        >
                                                          USB &amp; HDD
                                                        </a>
                                                        <ul>
                                                          <li className="">
                                                            <a
                                                              href="#"
                                                              title="Usb Computer"
                                                            >
                                                              USB Computer
                                                            </a>
                                                          </li>
                                                          <li className="">
                                                            <a
                                                              href="#"
                                                              title="HDD Computer"
                                                            >
                                                              HDD Computer
                                                            </a>
                                                          </li>
                                                        </ul>
                                                      </div>
                                                      <div className="item-3 col-lg-6 col-md-6 icon-6">
                                                        <a
                                                          href="#"
                                                          title="Cell &amp; Cable"
                                                        >
                                                          Cell &amp; Cable
                                                        </a>
                                                        <ul>
                                                          <li className="">
                                                            <a
                                                              href="#"
                                                              title="Cell Computers"
                                                            >
                                                              Cell Computers
                                                            </a>
                                                          </li>
                                                          <li className="">
                                                            <a
                                                              href="#"
                                                              title="Cable Com"
                                                            >
                                                              Cable Com
                                                            </a>
                                                          </li>
                                                        </ul>
                                                      </div>
                                                      <div className="item-3 col-lg-6 col-md-6 icon-7">
                                                        <a
                                                          href="#"
                                                          title="Cell &amp; Cable"
                                                        >
                                                          Laptop
                                                        </a>
                                                        <ul>
                                                          <li className="">
                                                            <a
                                                              href="#"
                                                              title="Computer Headsets"
                                                            >
                                                              Computer Headsets
                                                            </a>
                                                          </li>
                                                          <li className="">
                                                            <a
                                                              href="#"
                                                              title="Headphone Earpads"
                                                            >
                                                              Headphone Earpads
                                                            </a>
                                                          </li>
                                                        </ul>
                                                      </div>
                                                      <div className="item-3 col-lg-6 col-md-6 cat-child icon-8 parent">
                                                        <a
                                                          href="#"
                                                          title="Case"
                                                        >
                                                          Case
                                                        </a>
                                                        <ul>
                                                          <li className="">
                                                            <a
                                                              href="#"
                                                              title="Case Computer"
                                                            >
                                                              Case Computer
                                                            </a>
                                                          </li>
                                                          <li className="">
                                                            <a
                                                              href="#"
                                                              title="Vafar Comfaoe"
                                                            >
                                                              Vafar Comfaoe
                                                            </a>
                                                          </li>
                                                        </ul>
                                                      </div>
                                                    </div>
                                                    <div className="img-banner col-lg-5 col-md-5 col-sm-4">
                                                      <a href="#">
                                                        <img
                                                          src={megamenu}
                                                          alt="banner"
                                                        />
                                                      </a>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </li>

                                      <li className="item-vertical">
                                        <p className="close-menu"></p>
                                        <a href="#" className="clearfix">
                                          <span>
                                            <strong>
                                              <img src={icon3} alt="" />
                                              Book Stationery
                                            </strong>
                                          </span>
                                        </a>
                                      </li>

                                      <li className="item-vertical">
                                        <p className="close-menu"></p>
                                        <a className="clearfix">
                                          <span>
                                            <strong>
                                              <img src={icon5} alt="" />
                                              Sport &amp; Entertaiment
                                            </strong>
                                          </span>
                                        </a>
                                      </li>

                                      <li className="item-vertical">
                                        <p className="close-menu"></p>
                                        <a href="#" className="clearfix">
                                          <span>
                                            <strong>
                                              <img src={icon9} alt="" />
                                              Real House
                                            </strong>
                                          </span>
                                        </a>
                                      </li>
                                      <li className="item-vertical">
                                        <p className="close-menu"></p>
                                        <a href="#" className="clearfix">
                                          <span>
                                            <strong>
                                              <img src={icon6} alt="" />
                                              Mom &amp; Baby
                                            </strong>
                                          </span>
                                        </a>
                                      </li>

                                      <li className="loadmore">
                                        <i className="fa fa-plus-square"></i>
                                        <span className="more-view">
                                          {" "}
                                          More Categories
                                        </span>
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
                  </div>
                </div>
                {/* <!--- SLider right-->   */}
                <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12 col_anla  slider-right">
                  <div className="row row_ci4f  ">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 col_dg1b block block_1">
                      <div className="module sohomepage-slider so-homeslider-ltr  ">
                        <div className="modcontent">
                          <div id="sohomepage-slider1">
                            <div
                              className="so-homeslider yt-content-slider full_slider owl-drag"
                              data-rtl="yes"
                              data-autoplay="yes"
                              data-autoheight="no"
                              data-delay="4"
                              data-speed="0.6"
                              data-margin="10"
                              data-items_column00="1"
                              data-items_column0="1"
                              data-items_column1="1"
                              data-items_column2="1"
                              data-items_column3="1"
                              data-items_column4="1"
                              data-arrows="yes"
                              data-pagination="yes"
                              data-lazyload="yes"
                              data-loop="yes"
                              data-hoverpause="yes"
                            >
                              <div className="item">
                                <a
                                  href=" #   "
                                  title="slide 1 - 1"
                                  target="_self"
                                >
                                  <img
                                    className="responsive"
                                    src={slider1}
                                    alt="slide 1 - 1"
                                  />
                                </a>
                                <div className="sohomeslider-description"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-lg-12 col-md-12 col-sm-12 col-xs-12 col_hmsd block block_2"
                      style={{ marginTop: "20px" }}
                    >
                      <div className="home1-banner-1 clearfix">
                        <div className="item-1 col-lg-6 col-md-6 col-sm-6 banners">
                          <div>
                            <a title="Static Image" href="#">
                              <img src={banner1} alt="Static Image" />
                            </a>
                          </div>
                        </div>
                        <div className="item-2 col-lg-6 col-md-6 col-sm-6 banners">
                          <div>
                            <a title="Static Image" href="#">
                              <img src={banner2} alt="Static Image" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <section id="box-link1" class="section-style">
              <div
                class="container page-builder-ltr"
                style={{ marginTop: "20px" }}
              >
                <div class="row row-style row_a1">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col_a1c  block block_3 title_neo1">
                    <div class="module so-deals-1tr home1_deals so-deals">
                      <div class="head-title">
                        <h2 class="modtitle font-ct">
                          <span>Hot Deals</span>
                        </h2>
                        <div class="cs-item-timer">
                          <div class="Countdown-1"></div>
                        </div>
                      </div>
                      <div class="modcontent">
                        <div class="so-deal modcontent products-list grid clearfix clearfix preset00-3 preset01-3 preset02-2 preset03-2 preset04-1  button-type1  style2">
                          <div
                            class="category-slider-inner products-list yt-content-slider row"
                            data-rtl="yes"
                            data-autoplay="yes"
                            data-autoheight="no"
                            data-delay="4"
                            data-speed="0.6"
                            data-margin="30"
                            data-items_column00="3"
                            data-items_column0="3"
                            data-items_column1="3"
                            data-items_column2="2"
                            data-items_column3="2"
                            data-items_column4="1"
                            data-arrows="no"
                            data-pagination="no"
                            data-lazyload="yes"
                            data-loop="yes"
                            data-hoverpause="yes"
                          >
                            <div class="item col-md-4 col-sm-6 col-xs-12">
                              <div class="transition product-layout">
                                <div class="product-item-container ">
                                  <div class="left-block so-quickview">
                                    <div class="image">
                                      <a href="#" target="_self">
                                        <img
                                          src={travel}
                                          alt="Canada Travel One or Two European Facials at  Studio"
                                          class="img-responsive"
                                        />
                                      </a>
                                      <div class="text-location">
                                        <span>Ha Lan</span>
                                      </div>
                                    </div>
                                    <div class="box-label">
                                      <span class="label-product label-sale">
                                        Sale
                                      </span>
                                    </div>
                                    <div class="button-group">
                                      <div class="button-inner so-quickview">
                                        <a
                                          class="lt-image hidden"
                                          data-product="35"
                                          href="#"
                                          target="_self"
                                          title="Bougainvilleas on Lombard Street,  San Francisco, Tokyo"
                                        ></a>
                                        <a
                                          class="btn-button btn-quickview quickview quickview_handler"
                                          href="quickview.html"
                                          title="Quick View"
                                          data-title="Quick View"
                                          data-fancybox-type="iframe"
                                        >
                                          <i class="fa fa-search"></i>
                                        </a>
                                        <button
                                          class="wishlist btn-button"
                                          type="button"
                                          data-toggle="tooltip"
                                          title=""
                                          onclick="wishlist.add('35');"
                                          data-original-title="Add to Wish List"
                                        >
                                          <i class="fa fa-heart"></i>
                                        </button>
                                        <button
                                          class="compare btn-button"
                                          type="button"
                                          data-toggle="tooltip"
                                          title=""
                                          onclick="compare.add('35');"
                                          data-original-title="Compare this Product"
                                        >
                                          <i class="fa fa-exchange"></i>
                                        </button>
                                        <button
                                          class="addToCart btn-button"
                                          type="button"
                                          data-toggle="tooltip"
                                          title=""
                                          onclick="cart.add('35');"
                                          data-original-title="Add to Cart"
                                        >
                                          {" "}
                                          <span class="hidden">
                                            Add to Cart
                                          </span>
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="right-block">
                                    <div class="caption">
                                      <h4>
                                        <a
                                          href="product.html"
                                          target="_self"
                                          title="Canada Travel One or Two European Facials at  Studio"
                                        >
                                          Canada Travel One or Two European
                                          Facials at Studio
                                        </a>
                                      </h4>
                                      <div class="total-price clearfix">
                                        <div class="price price-left">
                                          <span class="price-new">$86.00</span>
                                          <span class="price-old">$122.00</span>
                                        </div>
                                        <div class="price-sale price-right">
                                          <span class="discount">
                                            -30%
                                            <strong>OFF</strong>
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="item col-md-4 col-sm-6 col-xs-12">
                              <div class="transition product-layout">
                                <div class="product-item-container ">
                                  <div class="left-block so-quickview">
                                    <div class="image">
                                      <a href="product.html" target="_self">
                                        <img
                                          src={travel5}
                                          alt="Chicago Tour Departure / Pattaya / Solimania..."
                                          class="img-responsive"
                                        />
                                      </a>
                                      <div class="text-location">
                                        <span>Canada</span>
                                      </div>
                                    </div>
                                    <div class="box-label">
                                      <span class="label-product label-sale">
                                        Sale
                                      </span>
                                    </div>
                                    <div class="button-group">
                                      <div class="button-inner so-quickview">
                                        <a
                                          class="lt-image hidden"
                                          data-product="35"
                                          href="#"
                                          target="_self"
                                          title="Bougainvilleas on Lombard Street,  San Francisco, Tokyo"
                                        ></a>
                                        <a
                                          class="btn-button btn-quickview quickview quickview_handler"
                                          href="quickview.html"
                                          title="Quick View"
                                          data-title="Quick View"
                                          data-fancybox-type="iframe"
                                        >
                                          <i class="fa fa-search"></i>
                                        </a>
                                        <button
                                          class="wishlist btn-button"
                                          type="button"
                                          data-toggle="tooltip"
                                          title=""
                                          onclick="wishlist.add('35');"
                                          data-original-title="Add to Wish List"
                                        >
                                          <i class="fa fa-heart"></i>
                                        </button>
                                        <button
                                          class="compare btn-button"
                                          type="button"
                                          data-toggle="tooltip"
                                          title=""
                                          onclick="compare.add('35');"
                                          data-original-title="Compare this Product"
                                        >
                                          <i class="fa fa-exchange"></i>
                                        </button>
                                        <button
                                          class="addToCart btn-button"
                                          type="button"
                                          data-toggle="tooltip"
                                          title=""
                                          onclick="cart.add('35');"
                                          data-original-title="Add to Cart"
                                        >
                                          {" "}
                                          <span class="hidden">
                                            Add to Cart
                                          </span>
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="right-block">
                                    <div class="caption">
                                      <h4>
                                        <a
                                          href="product.html"
                                          target="_self"
                                          title="Chicago Tour Departure / Pattaya / Solimania/ Tokyo/ Canada"
                                        >
                                          Chicago Tour Departure / Pattaya /
                                          Solimania...
                                        </a>
                                      </h4>
                                      <div class="total-price clearfix">
                                        <div class="price price-left">
                                          <span class="price-new">$108.80</span>
                                          <span class="price-old">$122.00</span>
                                        </div>
                                        <div class="price-sale price-right">
                                          <span class="discount">
                                            -11%
                                            <strong>OFF</strong>
                                          </span>
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
                    </div>
                    <div>
                      <div class="home1-banner-2 clearfix">
                        <div class="item-1 col-lg-6 col-md-6 col-sm-6 banners">
                          <div>
                            <a title="Static Image" href="#">
                              <img src={banner3} alt="Static Image" />
                            </a>
                          </div>
                        </div>
                        <div class="item-2 col-lg-6 col-md-6 col-sm-6 banners">
                          <div>
                            <a title="Static Image" href="#">
                              <img src={banner4} alt="Static Image" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section id="box-link2" class="section-style">
              <div
                class="container page-builder-ltr"
                style={{ marginTop: "20px" }}
              >
                <div class="row row-style row_a2">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col_1bi4  col-style block block_5 title_neo2">
                    <div class="module so-listing-tabs-ltr default-nav clearfix img-float label-1 home-lt1">
                      <div class="head-title font-ct">
                        <h2 class="modtitle">JOBS</h2>
                      </div>
                      <div class="modcontent">
                        <div
                          id="so_listing_tabs_1"
                          class="so-listing-tabs first-load"
                        >
                          <div class="ltabs-wrap">
                            <div
                              class="ltabs-tabs-container"
                              data-delay="300"
                              data-duration="600"
                              data-effect="starwars"
                              data-ajaxurl=""
                              data-type_source="0"
                              data-lg="4"
                              data-md="3"
                              data-sm="3"
                              data-xs="2"
                              data-margin="0"
                            >
                              {/* <!--Begin Tabs--> */}
                              <div class="ltabs-tabs-wrap">
                                <span class="ltabs-tab-selected"></span>
                                <span class="ltabs-tab-arrow">▼</span>
                                <div class="item-sub-cat">
                                  <ul class="ltabs-tabs cf">
                                    <li
                                      class="ltabs-tab tab-sel"
                                      data-category-id="1"
                                      data-active-content=".items-category-1"
                                    >
                                      {" "}
                                      <span class="ltabs-tab-label">
                                        Best Seller
                                      </span>{" "}
                                    </li>
                                    <li
                                      class="ltabs-tab "
                                      data-category-id="2"
                                      data-active-content=".items-category-2"
                                    >
                                      {" "}
                                      <span class="ltabs-tab-label">
                                        New Arrivals
                                      </span>{" "}
                                    </li>
                                    <li
                                      class="ltabs-tab "
                                      data-category-id="3"
                                      data-active-content=".items-category-3"
                                    >
                                      {" "}
                                      <span class="ltabs-tab-label">
                                        Most Rating
                                      </span>{" "}
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              {/* <!-- End Tabs--> */}
                            </div>

                            <div class="wap-listing-tabs ltabs-items-container products-list grid">
                              {/* <!--Begin Items--> */}
                              <div
                                class="ltabs-items ltabs-items-selected items-category-1 ltabs-process"
                                data-total="16"
                              >
                                <div class="ltabs-items-inner ltabs-slider row">
                                  <div class="ltabs-item col-lg-3 col-md-4 col-sm-4 col-xs-12">
                                    <div class="item-inner product-layout transition product-grid">
                                      <div class="product-item-container">
                                        <div class="left-block">
                                          <div class="image product-image-container ">
                                            <a
                                              class="lt-image"
                                              href="#"
                                              target="_self"
                                              title="Anantara Dhigu Resort &amp;amp; Spa, Maldives Hair Spa"
                                            >
                                              <img
                                                src={spa1}
                                                alt="Anantara Dhigu Resort &amp;amp; Spa, Maldives Hair Spa"
                                              />
                                            </a>
                                          </div>
                                          <div class="box-label">
                                            <span class="label-product label-sale">
                                              Sale
                                            </span>
                                          </div>
                                        </div>
                                        <div class="right-block">
                                          <div class="caption">
                                            <h4>
                                              <a
                                                href="product.html"
                                                title="Anantara Dhigu Resort &amp;amp; Spa, Maldives Hair Spa"
                                                target="_self"
                                              >
                                                Anantara Dhigu Resort &amp;amp;
                                                Spa, Maldives Hair Spa
                                              </a>
                                            </h4>
                                            <div class="total-price clearfix">
                                              <div class="price price-left">
                                                <span class="price-new">
                                                  $86.00
                                                </span>
                                                <span class="price-old">
                                                  $98.00
                                                </span>
                                              </div>
                                              <div class="price-sale price-right">
                                                <span class="discount 123">
                                                  -13%<strong>OFF</strong>
                                                </span>
                                              </div>
                                            </div>
                                          </div>
                                          <div class="button-group">
                                            <div class="button-inner so-quickview">
                                              <a
                                                class="lt-image hidden"
                                                href="product.html"
                                                target="_self"
                                                title="Anantara Dhigu Resort &amp;amp; Spa, Maldives Hair Spa"
                                              ></a>
                                              <a
                                                class="btn-button btn-quickview quickview quickview_handler"
                                                href="quickview.html"
                                                title="Quick View"
                                                data-title="Quick View"
                                                data-fancybox-type="iframe"
                                              >
                                                <i class="fa fa-search"></i>
                                              </a>
                                              <button
                                                class="wishlist btn-button"
                                                type="button"
                                                data-toggle="tooltip"
                                                title=""
                                                onclick="wishlist.add('114');"
                                                data-original-title="Add to Wish List"
                                              >
                                                <i class="fa fa-heart"></i>
                                              </button>
                                              <button
                                                class="compare btn-button"
                                                type="button"
                                                data-toggle="tooltip"
                                                title=""
                                                onclick="compare.add('114');"
                                                data-original-title="Compare this Product"
                                              >
                                                <i class="fa fa-exchange"></i>
                                              </button>
                                              <button
                                                class="addToCart btn-button"
                                                type="button"
                                                data-toggle="tooltip"
                                                title=""
                                                onclick="cart.add('114');"
                                                data-original-title="Add to cart"
                                              >
                                                <span class="hidden">
                                                  Add to cart
                                                </span>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="item-inner product-layout transition product-grid">
                                      <div class="product-item-container">
                                        <div class="left-block">
                                          <div class="image product-image-container ">
                                            <a
                                              class="lt-image"
                                              href="#"
                                              target="_self"
                                              title="Anantara Dhigu Resort &amp;amp; Spa, Maldives Hair Spa"
                                            >
                                              <img
                                                src={spa1}
                                                alt="Anantara Dhigu Resort &amp;amp; Spa, Maldives Hair Spa"
                                              />
                                            </a>
                                          </div>
                                          <div class="box-label">
                                            <span class="label-product label-sale">
                                              Sale
                                            </span>
                                          </div>
                                        </div>
                                        <div class="right-block">
                                          <div class="caption">
                                            <h4>
                                              <a
                                                href="product.html"
                                                title="Anantara Dhigu Resort &amp;amp; Spa, Maldives Hair Spa"
                                                target="_self"
                                              >
                                                Anantara Dhigu Resort &amp;amp;
                                                Spa, Maldives Hair Spa
                                              </a>
                                            </h4>
                                            <div class="total-price clearfix">
                                              <div class="price price-left">
                                                <span class="price-new">
                                                  $86.00
                                                </span>
                                                <span class="price-old">
                                                  $98.00
                                                </span>
                                              </div>
                                              <div class="price-sale price-right">
                                                <span class="discount 123">
                                                  -13%<strong>OFF</strong>
                                                </span>
                                              </div>
                                            </div>
                                          </div>
                                          <div class="button-group">
                                            <div class="button-inner so-quickview">
                                              <a
                                                class="lt-image hidden"
                                                href="#"
                                                target="_self"
                                                title="Anantara Dhigu Resort &amp;amp; Spa, Maldives Hair Spa"
                                              ></a>
                                              <a
                                                class="btn-button btn-quickview quickview quickview_handler"
                                                href="quickview.html"
                                                title="Quick View"
                                                data-title="Quick View"
                                                data-fancybox-type="iframe"
                                              >
                                                <i class="fa fa-search"></i>
                                              </a>
                                              <button
                                                class="wishlist btn-button"
                                                type="button"
                                                data-toggle="tooltip"
                                                title=""
                                                onclick="wishlist.add('114');"
                                                data-original-title="Add to Wish List"
                                              >
                                                <i class="fa fa-heart"></i>
                                              </button>
                                              <button
                                                class="compare btn-button"
                                                type="button"
                                                data-toggle="tooltip"
                                                title=""
                                                onclick="compare.add('114');"
                                                data-original-title="Compare this Product"
                                              >
                                                <i class="fa fa-exchange"></i>
                                              </button>
                                              <button
                                                class="addToCart btn-button"
                                                type="button"
                                                data-toggle="tooltip"
                                                title=""
                                                onclick="cart.add('114');"
                                                data-original-title="Add to cart"
                                              >
                                                <span class="hidden">
                                                  Add to cart
                                                </span>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="ltabs-item col-lg-3 col-md-4 col-sm-4 col-xs-12">
                                    <div class="item-inner product-layout transition product-grid">
                                      <div class="product-item-container">
                                        <div class="left-block">
                                          <div class="image product-image-container ">
                                            <a
                                              class="lt-image"
                                              href="#"
                                              target="_self"
                                              title="Anantara Dhigu Resort &amp;amp; Spa, Maldives Hair Spa"
                                            >
                                              <img
                                                src={spa1}
                                                alt="Anantara Dhigu Resort &amp;amp; Spa, Maldives Hair Spa"
                                              />
                                            </a>
                                          </div>
                                          <div class="box-label">
                                            <span class="label-product label-sale">
                                              Sale
                                            </span>
                                          </div>
                                        </div>
                                        <div class="right-block">
                                          <div class="caption">
                                            <h4>
                                              <a
                                                href="product.html"
                                                title="Anantara Dhigu Resort &amp;amp; Spa, Maldives Hair Spa"
                                                target="_self"
                                              >
                                                Anantara Dhigu Resort &amp;amp;
                                                Spa, Maldives Hair Spa
                                              </a>
                                            </h4>
                                            <div class="total-price clearfix">
                                              <div class="price price-left">
                                                <span class="price-new">
                                                  $86.00
                                                </span>
                                                <span class="price-old">
                                                  $98.00
                                                </span>
                                              </div>
                                              <div class="price-sale price-right">
                                                <span class="discount 123">
                                                  -13%<strong>OFF</strong>
                                                </span>
                                              </div>
                                            </div>
                                          </div>
                                          <div class="button-group">
                                            <div class="button-inner so-quickview">
                                              <a
                                                class="lt-image hidden"
                                                href="#"
                                                target="_self"
                                                title="Anantara Dhigu Resort &amp;amp; Spa, Maldives Hair Spa"
                                              ></a>
                                              <a
                                                class="btn-button btn-quickview quickview quickview_handler"
                                                href="quickview.html"
                                                title="Quick View"
                                                data-title="Quick View"
                                                data-fancybox-type="iframe"
                                              >
                                                <i class="fa fa-search"></i>
                                              </a>
                                              <button
                                                class="wishlist btn-button"
                                                type="button"
                                                data-toggle="tooltip"
                                                title=""
                                                onclick="wishlist.add('114');"
                                                data-original-title="Add to Wish List"
                                              >
                                                <i class="fa fa-heart"></i>
                                              </button>
                                              <button
                                                class="compare btn-button"
                                                type="button"
                                                data-toggle="tooltip"
                                                title=""
                                                onclick="compare.add('114');"
                                                data-original-title="Compare this Product"
                                              >
                                                <i class="fa fa-exchange"></i>
                                              </button>
                                              <button
                                                class="addToCart btn-button"
                                                type="button"
                                                data-toggle="tooltip"
                                                title=""
                                                onclick="cart.add('114');"
                                                data-original-title="Add to cart"
                                              >
                                                <span class="hidden">
                                                  Add to cart
                                                </span>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="item-inner product-layout transition product-grid">
                                      <div class="product-item-container">
                                        <div class="left-block">
                                          <div class="image product-image-container ">
                                            <a
                                              class="lt-image"
                                              href="#"
                                              target="_self"
                                              title="Anantara Dhigu Resort &amp;amp; Spa, Maldives Hair Spa"
                                            >
                                              <img
                                                src={spa1}
                                                alt="Anantara Dhigu Resort &amp;amp; Spa, Maldives Hair Spa"
                                              />
                                            </a>
                                          </div>
                                          <div class="box-label">
                                            <span class="label-product label-sale">
                                              Sale
                                            </span>
                                          </div>
                                        </div>
                                        <div class="right-block">
                                          <div class="caption">
                                            <h4>
                                              <a
                                                href="product.html"
                                                title="Anantara Dhigu Resort &amp;amp; Spa, Maldives Hair Spa"
                                                target="_self"
                                              >
                                                Anantara Dhigu Resort &amp;amp;
                                                Spa, Maldives Hair Spa
                                              </a>
                                            </h4>
                                            <div class="total-price clearfix">
                                              <div class="price price-left">
                                                <span class="price-new">
                                                  $86.00
                                                </span>
                                                <span class="price-old">
                                                  $98.00
                                                </span>
                                              </div>
                                              <div class="price-sale price-right">
                                                <span class="discount 123">
                                                  -13%<strong>OFF</strong>
                                                </span>
                                              </div>
                                            </div>
                                          </div>
                                          <div class="button-group">
                                            <div class="button-inner so-quickview">
                                              <a
                                                class="lt-image hidden"
                                                href="#"
                                                target="_self"
                                                title="Anantara Dhigu Resort &amp;amp; Spa, Maldives Hair Spa"
                                              ></a>
                                              <a
                                                class="btn-button btn-quickview quickview quickview_handler"
                                                href="quickview.html"
                                                title="Quick View"
                                                data-title="Quick View"
                                                data-fancybox-type="iframe"
                                              >
                                                <i class="fa fa-search"></i>
                                              </a>
                                              <button
                                                class="wishlist btn-button"
                                                type="button"
                                                data-toggle="tooltip"
                                                title=""
                                                onclick="wishlist.add('114');"
                                                data-original-title="Add to Wish List"
                                              >
                                                <i class="fa fa-heart"></i>
                                              </button>
                                              <button
                                                class="compare btn-button"
                                                type="button"
                                                data-toggle="tooltip"
                                                title=""
                                                onclick="compare.add('114');"
                                                data-original-title="Compare this Product"
                                              >
                                                <i class="fa fa-exchange"></i>
                                              </button>
                                              <button
                                                class="addToCart btn-button"
                                                type="button"
                                                data-toggle="tooltip"
                                                title=""
                                                onclick="cart.add('114');"
                                                data-original-title="Add to cart"
                                              >
                                                <span class="hidden">
                                                  Add to cart
                                                </span>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="ltabs-item col-lg-3 col-md-4 col-sm-4 col-xs-12">
                                    <div class="item-inner product-layout transition product-grid">
                                      <div class="product-item-container">
                                        <div class="left-block">
                                          <div class="image product-image-container ">
                                            <a
                                              class="lt-image"
                                              href="#"
                                              target="_self"
                                              title="Anantara Dhigu Resort &amp;amp; Spa, Maldives Hair Spa"
                                            >
                                              <img
                                                src={spa1}
                                                alt="Anantara Dhigu Resort &amp;amp; Spa, Maldives Hair Spa"
                                              />
                                            </a>
                                          </div>
                                          <div class="box-label">
                                            <span class="label-product label-sale">
                                              Sale
                                            </span>
                                          </div>
                                        </div>
                                        <div class="right-block">
                                          <div class="caption">
                                            <h4>
                                              <a
                                                href="product.html"
                                                title="Anantara Dhigu Resort &amp;amp; Spa, Maldives Hair Spa"
                                                target="_self"
                                              >
                                                Anantara Dhigu Resort &amp;amp;
                                                Spa, Maldives Hair Spa
                                              </a>
                                            </h4>
                                            <div class="total-price clearfix">
                                              <div class="price price-left">
                                                <span class="price-new">
                                                  $86.00
                                                </span>
                                                <span class="price-old">
                                                  $98.00
                                                </span>
                                              </div>
                                              <div class="price-sale price-right">
                                                <span class="discount 123">
                                                  -13%<strong>OFF</strong>
                                                </span>
                                              </div>
                                            </div>
                                          </div>
                                          <div class="button-group">
                                            <div class="button-inner so-quickview">
                                              <a
                                                class="lt-image hidden"
                                                href="#"
                                                target="_self"
                                                title="Anantara Dhigu Resort &amp;amp; Spa, Maldives Hair Spa"
                                              ></a>
                                              <a
                                                class="btn-button btn-quickview quickview quickview_handler"
                                                href="quickview.html"
                                                title="Quick View"
                                                data-title="Quick View"
                                                data-fancybox-type="iframe"
                                              >
                                                <i class="fa fa-search"></i>
                                              </a>
                                              <button
                                                class="wishlist btn-button"
                                                type="button"
                                                data-toggle="tooltip"
                                                title=""
                                                onclick="wishlist.add('114');"
                                                data-original-title="Add to Wish List"
                                              >
                                                <i class="fa fa-heart"></i>
                                              </button>
                                              <button
                                                class="compare btn-button"
                                                type="button"
                                                data-toggle="tooltip"
                                                title=""
                                                onclick="compare.add('114');"
                                                data-original-title="Compare this Product"
                                              >
                                                <i class="fa fa-exchange"></i>
                                              </button>
                                              <button
                                                class="addToCart btn-button"
                                                type="button"
                                                data-toggle="tooltip"
                                                title=""
                                                onclick="cart.add('114');"
                                                data-original-title="Add to cart"
                                              >
                                                <span class="hidden">
                                                  Add to cart
                                                </span>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="item-inner product-layout transition product-grid">
                                      <div class="product-item-container">
                                        <div class="left-block">
                                          <div class="image product-image-container ">
                                            <a
                                              class="lt-image"
                                              href="#"
                                              target="_self"
                                              title="Anantara Dhigu Resort &amp;amp; Spa, Maldives Hair Spa"
                                            >
                                              <img
                                                src={spa1}
                                                alt="Anantara Dhigu Resort &amp;amp; Spa, Maldives Hair Spa"
                                              />
                                            </a>
                                          </div>
                                          <div class="box-label">
                                            <span class="label-product label-sale">
                                              Sale
                                            </span>
                                          </div>
                                        </div>
                                        <div class="right-block">
                                          <div class="caption">
                                            <h4>
                                              <a
                                                href="product.html"
                                                title="Anantara Dhigu Resort &amp;amp; Spa, Maldives Hair Spa"
                                                target="_self"
                                              >
                                                Anantara Dhigu Resort &amp;amp;
                                                Spa, Maldives Hair Spa
                                              </a>
                                            </h4>
                                            <div class="total-price clearfix">
                                              <div class="price price-left">
                                                <span class="price-new">
                                                  $86.00
                                                </span>
                                                <span class="price-old">
                                                  $98.00
                                                </span>
                                              </div>
                                              <div class="price-sale price-right">
                                                <span class="discount 123">
                                                  -13%<strong>OFF</strong>
                                                </span>
                                              </div>
                                            </div>
                                          </div>
                                          <div class="button-group">
                                            <div class="button-inner so-quickview">
                                              <a
                                                class="lt-image hidden"
                                                href="#"
                                                target="_self"
                                                title="Anantara Dhigu Resort &amp;amp; Spa, Maldives Hair Spa"
                                              ></a>
                                              <a
                                                class="btn-button btn-quickview quickview quickview_handler"
                                                href="quickview.html"
                                                title="Quick View"
                                                data-title="Quick View"
                                                data-fancybox-type="iframe"
                                              >
                                                <i class="fa fa-search"></i>
                                              </a>
                                              <button
                                                class="wishlist btn-button"
                                                type="button"
                                                data-toggle="tooltip"
                                                title=""
                                                onclick="wishlist.add('114');"
                                                data-original-title="Add to Wish List"
                                              >
                                                <i class="fa fa-heart"></i>
                                              </button>
                                              <button
                                                class="compare btn-button"
                                                type="button"
                                                data-toggle="tooltip"
                                                title=""
                                                onclick="compare.add('114');"
                                                data-original-title="Compare this Product"
                                              >
                                                <i class="fa fa-exchange"></i>
                                              </button>
                                              <button
                                                class="addToCart btn-button"
                                                type="button"
                                                data-toggle="tooltip"
                                                title=""
                                                onclick="cart.add('114');"
                                                data-original-title="Add to cart"
                                              >
                                                <span class="hidden">
                                                  Add to cart
                                                </span>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="ltabs-item col-lg-3 col-md-4 col-sm-4 col-xs-12">
                                    <div class="item-inner product-layout transition product-grid">
                                      <div class="product-item-container">
                                        <div class="left-block">
                                          <div class="image product-image-container ">
                                            <a
                                              class="lt-image"
                                              href="#"
                                              target="_self"
                                              title="Anantara Dhigu Resort &amp;amp; Spa, Maldives Hair Spa"
                                            >
                                              <img
                                                src={spa1}
                                                alt="Anantara Dhigu Resort &amp;amp; Spa, Maldives Hair Spa"
                                              />
                                            </a>
                                          </div>
                                          <div class="box-label">
                                            <span class="label-product label-sale">
                                              Sale
                                            </span>
                                          </div>
                                        </div>
                                        <div class="right-block">
                                          <div class="caption">
                                            <h4>
                                              <a
                                                href="product.html"
                                                title="Anantara Dhigu Resort &amp;amp; Spa, Maldives Hair Spa"
                                                target="_self"
                                              >
                                                Anantara Dhigu Resort &amp;amp;
                                                Spa, Maldives Hair Spa
                                              </a>
                                            </h4>
                                            <div class="total-price clearfix">
                                              <div class="price price-left">
                                                <span class="price-new">
                                                  $86.00
                                                </span>
                                                <span class="price-old">
                                                  $98.00
                                                </span>
                                              </div>
                                              <div class="price-sale price-right">
                                                <span class="discount 123">
                                                  -13%<strong>OFF</strong>
                                                </span>
                                              </div>
                                            </div>
                                          </div>
                                          <div class="button-group">
                                            <div class="button-inner so-quickview">
                                              <a
                                                class="lt-image hidden"
                                                href="#"
                                                target="_self"
                                                title="Anantara Dhigu Resort &amp;amp; Spa, Maldives Hair Spa"
                                              ></a>
                                              <a
                                                class="btn-button btn-quickview quickview quickview_handler"
                                                href="quickview.html"
                                                title="Quick View"
                                                data-title="Quick View"
                                                data-fancybox-type="iframe"
                                              >
                                                <i class="fa fa-search"></i>
                                              </a>
                                              <button
                                                class="wishlist btn-button"
                                                type="button"
                                                data-toggle="tooltip"
                                                title=""
                                                onclick="wishlist.add('114');"
                                                data-original-title="Add to Wish List"
                                              >
                                                <i class="fa fa-heart"></i>
                                              </button>
                                              <button
                                                class="compare btn-button"
                                                type="button"
                                                data-toggle="tooltip"
                                                title=""
                                                onclick="compare.add('114');"
                                                data-original-title="Compare this Product"
                                              >
                                                <i class="fa fa-exchange"></i>
                                              </button>
                                              <button
                                                class="addToCart btn-button"
                                                type="button"
                                                data-toggle="tooltip"
                                                title=""
                                                onclick="cart.add('114');"
                                                data-original-title="Add to cart"
                                              >
                                                <span class="hidden">
                                                  Add to cart
                                                </span>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="item-inner product-layout transition product-grid">
                                      <div class="product-item-container">
                                        <div class="left-block">
                                          <div class="image product-image-container ">
                                            <a
                                              class="lt-image"
                                              href="#"
                                              target="_self"
                                              title="Anantara Dhigu Resort &amp;amp; Spa, Maldives Hair Spa"
                                            >
                                              <img
                                                src={spa1}
                                                alt="Anantara Dhigu Resort &amp;amp; Spa, Maldives Hair Spa"
                                              />
                                            </a>
                                          </div>
                                          <div class="box-label">
                                            <span class="label-product label-sale">
                                              Sale
                                            </span>
                                          </div>
                                        </div>
                                        <div class="right-block">
                                          <div class="caption">
                                            <h4>
                                              <a
                                                href="product.html"
                                                title="Anantara Dhigu Resort &amp;amp; Spa, Maldives Hair Spa"
                                                target="_self"
                                              >
                                                Anantara Dhigu Resort &amp;amp;
                                                Spa, Maldives Hair Spa
                                              </a>
                                            </h4>
                                            <div class="total-price clearfix">
                                              <div class="price price-left">
                                                <span class="price-new">
                                                  $86.00
                                                </span>
                                                <span class="price-old">
                                                  $98.00
                                                </span>
                                              </div>
                                              <div class="price-sale price-right">
                                                <span class="discount 123">
                                                  -13%<strong>OFF</strong>
                                                </span>
                                              </div>
                                            </div>
                                          </div>
                                          <div class="button-group">
                                            <div class="button-inner so-quickview">
                                              <a
                                                class="lt-image hidden"
                                                href="product.html"
                                                target="_self"
                                                title="Anantara Dhigu Resort &amp;amp; Spa, Maldives Hair Spa"
                                              ></a>
                                              <a
                                                class="btn-button btn-quickview quickview quickview_handler"
                                                href="quickview.html"
                                                title="Quick View"
                                                data-title="Quick View"
                                                data-fancybox-type="iframe"
                                              >
                                                <i class="fa fa-search"></i>
                                              </a>
                                              <button
                                                class="wishlist btn-button"
                                                type="button"
                                                data-toggle="tooltip"
                                                title=""
                                                onclick="wishlist.add('114');"
                                                data-original-title="Add to Wish List"
                                              >
                                                <i class="fa fa-heart"></i>
                                              </button>
                                              <button
                                                class="compare btn-button"
                                                type="button"
                                                data-toggle="tooltip"
                                                title=""
                                                onclick="compare.add('114');"
                                                data-original-title="Compare this Product"
                                              >
                                                <i class="fa fa-exchange"></i>
                                              </button>
                                              <button
                                                class="addToCart btn-button"
                                                type="button"
                                                data-toggle="tooltip"
                                                title=""
                                                onclick="cart.add('114');"
                                                data-original-title="Add to cart"
                                              >
                                                <span class="hidden">
                                                  Add to cart
                                                </span>
                                              </button>
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
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section id="box-link3" class="section-style">
              <div class="container page-builder-ltr">
                <div class="row row-style row_a3">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col_nvxr  block block_6 title_neo3">
                    <div class="module so-listing-tabs-ltr home1-lt-style2 default-nav clearfix img-float home-lt1">
                      <div class="head-title font-ct">
                        <h2 class="modtitle">SURPLUX</h2>
                      </div>
                      <div class="modcontent">
                        <div
                          id="so_listing_tabs_2"
                          class="so-listing-tabs first-load"
                        >
                          <div class="ltabs-wrap">
                            <div
                              class="ltabs-tabs-container"
                              data-delay="300"
                              data-duration="600"
                              data-effect="starwars"
                              data-ajaxurl=""
                              data-type_source="0"
                              data-lg="3"
                              data-md="3"
                              data-sm="3"
                              data-xs="2"
                              data-margin="0"
                            >
                              <div class="ltabs-tabs-wrap">
                                <span class="ltabs-tab-selected">
                                  Best sellers
                                </span>
                                <span class="ltabs-tab-arrow">▼</span>
                                <div class="item-sub-cat">
                                  <ul class="ltabs-tabs cf">
                                    <li
                                      class="ltabs-tab tab-sel"
                                      data-category-id="4"
                                      data-active-content=".items-category-4"
                                    >
                                      <span class="ltabs-tab-label">
                                        Best sellers
                                      </span>
                                    </li>
                                    <li
                                      class="ltabs-tab"
                                      data-category-id="5"
                                      data-active-content=".items-category-5"
                                    >
                                      <span class="ltabs-tab-label">
                                        New Arrivals
                                      </span>
                                    </li>
                                    <li
                                      class="ltabs-tab"
                                      data-category-id="6"
                                      data-active-content=".items-category-6"
                                    >
                                      <span class="ltabs-tab-label">
                                        Most Rating
                                      </span>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div class="wap-listing-tabs products-list grid">
                              {/* <div class="item-cat-image banners">
                                <div>
                                  <a
                                    href="product.html"
                                    title=""
                                    target="_self"
                                  >
                                    <img
                                      src={spa1}
                                      alt="Anantara Dhigu Resort &amp;amp; Spa, Maldives Hair Spa"
                                    />
                                  </a>
                                </div>
                              </div> */}
                              <div class="ltabs-items-container">
                                <div
                                  class="ltabs-items ltabs-items-selected items-category-4"
                                  data-total="16"
                                >
                                  <div class="ltabs-items-inner ltabs-slider row">
                                    <div class="ltabs-item col-md-3 col-sm-6 col-xs-12">
                                      <div class="item-inner product-layout transition product-grid">
                                        <div class="product-item-container">
                                          <div class="left-block">
                                            <div class="image product-image-container ">
                                              <a
                                                class="lt-image"
                                                href="#"
                                                target="_self"
                                                title="Amazing Yoga Sport Poses Most People Wouldn't Dream "
                                              >
                                                <img
                                                  src={spa1}
                                                  alt="Anantara Dhigu Resort &amp;amp; Spa, Maldives Hair Spa"
                                                />
                                              </a>
                                            </div>
                                            <div class="box-label">
                                              <span class="label-product label-sale">
                                                Sale
                                              </span>
                                            </div>
                                          </div>
                                          <div class="right-block">
                                            <div class="caption">
                                              <h4>
                                                <a
                                                  href="product.html"
                                                  title="Amazing Yoga Sport Poses Most People Wouldn't Dream "
                                                  target="_self"
                                                >
                                                  Amazing Yoga Sport Poses Most
                                                  People Wouldn't Dre..
                                                </a>
                                              </h4>
                                              <div class="total-price clearfix">
                                                <div class="price price-left">
                                                  <span class="price-new">
                                                    $108.80
                                                  </span>
                                                  <span class="price-old">
                                                    $122.00
                                                  </span>
                                                </div>
                                                <div class="price-sale price-right">
                                                  <span class="discount 123">
                                                    -11%<strong>OFF</strong>
                                                  </span>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="button-group">
                                              <div class="button-inner so-quickview">
                                                <a
                                                  class="lt-image hidden"
                                                  href="#"
                                                  target="_self"
                                                  title="Amazing Yoga Sport Poses Most People Wouldn't Dream "
                                                ></a>
                                                <a
                                                  class="btn-button btn-quickview quickview quickview_handler"
                                                  href="quickview.html"
                                                  title="Quick View"
                                                  data-title="Quick View"
                                                  data-fancybox-type="iframe"
                                                >
                                                  <i class="fa fa-search"></i>
                                                </a>
                                                <button
                                                  class="wishlist btn-button"
                                                  type="button"
                                                  data-toggle="tooltip"
                                                  title=""
                                                  onclick="wishlist.add('28');"
                                                  data-original-title="Add to Wish List"
                                                >
                                                  <i class="fa fa-heart"></i>
                                                </button>
                                                <button
                                                  class="compare btn-button"
                                                  type="button"
                                                  data-toggle="tooltip"
                                                  title=""
                                                  onclick="compare.add('28');"
                                                  data-original-title="Compare this Product"
                                                >
                                                  <i class="fa fa-exchange"></i>
                                                </button>
                                                <button
                                                  class="addToCart btn-button"
                                                  type="button"
                                                  data-toggle="tooltip"
                                                  title=""
                                                  onclick="cart.add('28');"
                                                  data-original-title="Add to cart"
                                                >
                                                  <span class="hidden">
                                                    Add to cart
                                                  </span>
                                                </button>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div class="item-inner product-layout transition product-grid">
                                        <div class="product-item-container">
                                          <div class="left-block">
                                            <div class="image product-image-container ">
                                              <a
                                                class="lt-image"
                                                href="#"
                                                target="_self"
                                                title="Est Officia Including Shoes Beautiful Pieces Canaz"
                                              >
                                                <img
                                                  src={spa1}
                                                  alt="Anantara Dhigu Resort &amp;amp; Spa, Maldives Hair Spa"
                                                />
                                              </a>
                                            </div>
                                            <div class="box-label">
                                              <span class="label-product label-sale">
                                                Sale
                                              </span>
                                            </div>
                                          </div>
                                          <div class="right-block">
                                            <div class="caption">
                                              <h4>
                                                <a
                                                  href="product.html"
                                                  title="Est Officia Including Shoes Beautiful Pieces Canaz"
                                                  target="_self"
                                                >
                                                  Est Officia Including Shoes
                                                  Beautiful Pieces Canaz
                                                </a>
                                              </h4>
                                              <div class="total-price clearfix">
                                                <div class="price price-left">
                                                  <span class="price-new">
                                                    $62.00
                                                  </span>
                                                  <span class="price-old">
                                                    $337.99
                                                  </span>
                                                </div>
                                                <div class="price-sale price-right">
                                                  <span class="discount 123">
                                                    -82%<strong>OFF</strong>
                                                  </span>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="button-group">
                                              <div class="button-inner so-quickview">
                                                <a
                                                  class="lt-image hidden"
                                                  href="#"
                                                  target="_self"
                                                  title="Est Officia Including Shoes Beautiful Pieces Canaz"
                                                ></a>
                                                <a
                                                  class="btn-button btn-quickview quickview quickview_handler"
                                                  href="quickview.html"
                                                  title="Quick View"
                                                  data-title="Quick View"
                                                  data-fancybox-type="iframe"
                                                >
                                                  <i class="fa fa-search"></i>
                                                </a>
                                                <button
                                                  class="wishlist btn-button"
                                                  type="button"
                                                  data-toggle="tooltip"
                                                  title=""
                                                  onclick="wishlist.add('28');"
                                                  data-original-title="Add to Wish List"
                                                >
                                                  <i class="fa fa-heart"></i>
                                                </button>
                                                <button
                                                  class="compare btn-button"
                                                  type="button"
                                                  data-toggle="tooltip"
                                                  title=""
                                                  onclick="compare.add('28');"
                                                  data-original-title="Compare this Product"
                                                >
                                                  <i class="fa fa-exchange"></i>
                                                </button>
                                                <button
                                                  class="addToCart btn-button"
                                                  type="button"
                                                  data-toggle="tooltip"
                                                  title=""
                                                  onclick="cart.add('28');"
                                                  data-original-title="Add to cart"
                                                >
                                                  <span class="hidden">
                                                    Add to cart
                                                  </span>
                                                </button>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="ltabs-item col-md-3 col-sm-6 col-xs-12">
                                      <div class="item-inner product-layout transition product-grid">
                                        <div class="product-item-container">
                                          <div class="left-block">
                                            <div class="image product-image-container ">
                                              <a
                                                class="lt-image"
                                                href="#"
                                                target="_self"
                                                title="Girly Summer Outfit Ideas To Upgrade Your Wardrobe"
                                              >
                                                <img
                                                  src={spa1}
                                                  alt="Anantara Dhigu Resort &amp;amp; Spa, Maldives Hair Spa"
                                                />
                                              </a>
                                            </div>
                                          </div>
                                          <div class="right-block">
                                            <div class="caption">
                                              <h4>
                                                <a
                                                  href="product.html"
                                                  title="Girly Summer Outfit Ideas To Upgrade Your Wardrobe"
                                                  target="_self"
                                                >
                                                  Girly Summer Outfit Ideas To
                                                  Upgrade Your Wardrob..
                                                </a>
                                              </h4>
                                              <div class="total-price clearfix">
                                                <div class="price price-left">
                                                  <span class="price-new">
                                                    $128.80
                                                  </span>
                                                  <span class="price-old"></span>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="button-group">
                                              <div class="button-inner so-quickview">
                                                <a
                                                  class="lt-image hidden"
                                                  href="#"
                                                  target="_self"
                                                  title="Girly Summer Outfit Ideas To Upgrade Your Wardrobe"
                                                ></a>
                                                <a
                                                  class="btn-button btn-quickview quickview quickview_handler"
                                                  href="quickview.html"
                                                  title="Quick View"
                                                  data-title="Quick View"
                                                  data-fancybox-type="iframe"
                                                >
                                                  <i class="fa fa-search"></i>
                                                </a>
                                                <button
                                                  class="wishlist btn-button"
                                                  type="button"
                                                  data-toggle="tooltip"
                                                  title=""
                                                  onclick="wishlist.add('28');"
                                                  data-original-title="Add to Wish List"
                                                >
                                                  <i class="fa fa-heart"></i>
                                                </button>
                                                <button
                                                  class="compare btn-button"
                                                  type="button"
                                                  data-toggle="tooltip"
                                                  title=""
                                                  onclick="compare.add('28');"
                                                  data-original-title="Compare this Product"
                                                >
                                                  <i class="fa fa-exchange"></i>
                                                </button>
                                                <button
                                                  class="addToCart btn-button"
                                                  type="button"
                                                  data-toggle="tooltip"
                                                  title=""
                                                  onclick="cart.add('28');"
                                                  data-original-title="Add to cart"
                                                >
                                                  <span class="hidden">
                                                    Add to cart
                                                  </span>
                                                </button>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div class="item-inner product-layout transition product-grid">
                                        <div class="product-item-container">
                                          <div class="left-block">
                                            <div class="image product-image-container ">
                                              <a
                                                class="lt-image"
                                                href="#"
                                                target="_self"
                                                title="Cras idrisusiopsa quo voluptas nulla pariatur shoprer"
                                              >
                                                <img
                                                  src={spa1}
                                                  alt="Anantara Dhigu Resort &amp;amp; Spa, Maldives Hair Spa"
                                                />
                                              </a>
                                            </div>
                                          </div>
                                          <div class="right-block">
                                            <div class="caption">
                                              <h4>
                                                <a
                                                  href="product.html"
                                                  title="Cras idrisusiopsa quo voluptas nulla pariatur shoprer"
                                                  target="_self"
                                                >
                                                  Cras idrisusiopsa quo voluptas
                                                  nulla par...
                                                </a>
                                              </h4>
                                              <div class="total-price clearfix">
                                                <div class="price price-left">
                                                  <span class="price-new">
                                                    $242.00
                                                  </span>
                                                  <span class="price-old"></span>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="button-group">
                                              <div class="button-inner so-quickview">
                                                <a
                                                  class="lt-image hidden"
                                                  href="#"
                                                  target="_self"
                                                  title="Cras idrisusiopsa quo voluptas nulla pariatur shoprer"
                                                ></a>
                                                <a
                                                  class="btn-button btn-quickview quickview quickview_handler"
                                                  href="quickview.html"
                                                  title="Quick View"
                                                  data-title="Quick View"
                                                  data-fancybox-type="iframe"
                                                >
                                                  <i class="fa fa-search"></i>
                                                </a>
                                                <button
                                                  class="wishlist btn-button"
                                                  type="button"
                                                  data-toggle="tooltip"
                                                  title=""
                                                  onclick="wishlist.add('28');"
                                                  data-original-title="Add to Wish List"
                                                >
                                                  <i class="fa fa-heart"></i>
                                                </button>
                                                <button
                                                  class="compare btn-button"
                                                  type="button"
                                                  data-toggle="tooltip"
                                                  title=""
                                                  onclick="compare.add('28');"
                                                  data-original-title="Compare this Product"
                                                >
                                                  <i class="fa fa-exchange"></i>
                                                </button>
                                                <button
                                                  class="addToCart btn-button"
                                                  type="button"
                                                  data-toggle="tooltip"
                                                  title=""
                                                  onclick="cart.add('28');"
                                                  data-original-title="Add to cart"
                                                >
                                                  <span class="hidden">
                                                    Add to cart
                                                  </span>
                                                </button>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="ltabs-item col-md-3 col-sm-6 col-xs-12">
                                      <div class="item-inner product-layout transition product-grid">
                                        <div class="product-item-container">
                                          <div class="left-block">
                                            <div class="image product-image-container ">
                                              <a
                                                class="lt-image"
                                                href="#"
                                                target="_self"
                                                title="Invisible Hidden Spy Earphone Micro Wireless"
                                              >
                                                <img
                                                  src={spa1}
                                                  alt="Anantara Dhigu Resort &amp;amp; Spa, Maldives Hair Spa"
                                                />
                                              </a>
                                            </div>
                                          </div>
                                          <div class="right-block">
                                            <div class="caption">
                                              <h4>
                                                <a
                                                  href="product.html"
                                                  title="Invisible Hidden Spy Earphone Micro Wireless"
                                                  target="_self"
                                                >
                                                  Invisible Hidden Spy Earphone
                                                  Micro Wireless
                                                </a>
                                              </h4>
                                              <div class="total-price clearfix">
                                                <div class="price price-left">
                                                  <span class="price-new">
                                                    $122.00
                                                  </span>
                                                  <span class="price-old"></span>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="button-group">
                                              <div class="button-inner so-quickview">
                                                <a
                                                  class="lt-image hidden"
                                                  href="#"
                                                  target="_self"
                                                  title="Invisible Hidden Spy Earphone Micro Wireless"
                                                ></a>
                                                <a
                                                  class="btn-button btn-quickview quickview quickview_handler"
                                                  href="quickview.html"
                                                  title="Quick View"
                                                  data-title="Quick View"
                                                  data-fancybox-type="iframe"
                                                >
                                                  <i class="fa fa-search"></i>
                                                </a>
                                                <button
                                                  class="wishlist btn-button"
                                                  type="button"
                                                  data-toggle="tooltip"
                                                  title=""
                                                  onclick="wishlist.add('28');"
                                                  data-original-title="Add to Wish List"
                                                >
                                                  <i class="fa fa-heart"></i>
                                                </button>
                                                <button
                                                  class="compare btn-button"
                                                  type="button"
                                                  data-toggle="tooltip"
                                                  title=""
                                                  onclick="compare.add('28');"
                                                  data-original-title="Compare this Product"
                                                >
                                                  <i class="fa fa-exchange"></i>
                                                </button>
                                                <button
                                                  class="addToCart btn-button"
                                                  type="button"
                                                  data-toggle="tooltip"
                                                  title=""
                                                  onclick="cart.add('28');"
                                                  data-original-title="Add to cart"
                                                >
                                                  <span class="hidden">
                                                    Add to cart
                                                  </span>
                                                </button>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div class="item-inner product-layout transition product-grid">
                                        <div class="product-item-container">
                                          <div class="left-block">
                                            <div class="image product-image-container ">
                                              <a
                                                class="lt-image"
                                                href="#"
                                                target="_self"
                                                title="Est Officia Including Shoes Beautiful Pieces Canaz"
                                              >
                                                <img
                                                  src={spa1}
                                                  alt="Anantara Dhigu Resort &amp;amp; Spa, Maldives Hair Spa"
                                                />
                                              </a>
                                            </div>
                                            <div class="box-label">
                                              <span class="label-product label-sale">
                                                Sale
                                              </span>
                                            </div>
                                          </div>
                                          <div class="right-block">
                                            <div class="caption">
                                              <h4>
                                                <a
                                                  href="product.html"
                                                  title="Est Officia Including Shoes Beautiful Pieces Canaz"
                                                  target="_self"
                                                >
                                                  Est Officia Including Shoes
                                                  Beautiful Pieces Canaz
                                                </a>
                                              </h4>
                                              <div class="total-price clearfix">
                                                <div class="price price-left">
                                                  <span class="price-new">
                                                    $98.00
                                                  </span>
                                                  <span class="price-old">
                                                    $122.00
                                                  </span>
                                                </div>
                                                <div class="price-sale price-right">
                                                  <span class="discount 123">
                                                    -20%<strong>OFF</strong>
                                                  </span>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="button-group">
                                              <div class="button-inner so-quickview">
                                                <a
                                                  class="lt-image hidden"
                                                  href="#"
                                                  target="_self"
                                                  title="Est Officia Including Shoes Beautiful Pieces Canaz"
                                                ></a>
                                                <a
                                                  class="btn-button btn-quickview quickview quickview_handler"
                                                  href="quickview.html"
                                                  title="Quick View"
                                                  data-title="Quick View"
                                                  data-fancybox-type="iframe"
                                                >
                                                  <i class="fa fa-search"></i>
                                                </a>
                                                <button
                                                  class="wishlist btn-button"
                                                  type="button"
                                                  data-toggle="tooltip"
                                                  title=""
                                                  onclick="wishlist.add('28');"
                                                  data-original-title="Add to Wish List"
                                                >
                                                  <i class="fa fa-heart"></i>
                                                </button>
                                                <button
                                                  class="compare btn-button"
                                                  type="button"
                                                  data-toggle="tooltip"
                                                  title=""
                                                  onclick="compare.add('28');"
                                                  data-original-title="Compare this Product"
                                                >
                                                  <i class="fa fa-exchange"></i>
                                                </button>
                                                <button
                                                  class="addToCart btn-button"
                                                  type="button"
                                                  data-toggle="tooltip"
                                                  title=""
                                                  onclick="cart.add('28');"
                                                  data-original-title="Add to cart"
                                                >
                                                  <span class="hidden">
                                                    Add to cart
                                                  </span>
                                                </button>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="ltabs-item col-md-3 col-sm-6 col-xs-12">
                                      <div class="item-inner product-layout transition product-grid">
                                        <div class="product-item-container">
                                          <div class="left-block">
                                            <div class="image product-image-container ">
                                              <a
                                                class="lt-image"
                                                href="#"
                                                target="_self"
                                                title="Invisible Hidden Spy Earphone Micro Wireless"
                                              >
                                                <img
                                                  src={spa1}
                                                  alt="Anantara Dhigu Resort &amp;amp; Spa, Maldives Hair Spa"
                                                />
                                              </a>
                                            </div>
                                          </div>
                                          <div class="right-block">
                                            <div class="caption">
                                              <h4>
                                                <a
                                                  href="product.html"
                                                  title="Invisible Hidden Spy Earphone Micro Wireless"
                                                  target="_self"
                                                >
                                                  Invisible Hidden Spy Earphone
                                                  Micro Wireless
                                                </a>
                                              </h4>
                                              <div class="total-price clearfix">
                                                <div class="price price-left">
                                                  <span class="price-new">
                                                    $122.00
                                                  </span>
                                                  <span class="price-old"></span>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="button-group">
                                              <div class="button-inner so-quickview">
                                                <a
                                                  class="lt-image hidden"
                                                  href="#"
                                                  target="_self"
                                                  title="Invisible Hidden Spy Earphone Micro Wireless"
                                                ></a>
                                                <a
                                                  class="btn-button btn-quickview quickview quickview_handler"
                                                  href="quickview.html"
                                                  title="Quick View"
                                                  data-title="Quick View"
                                                  data-fancybox-type="iframe"
                                                >
                                                  <i class="fa fa-search"></i>
                                                </a>
                                                <button
                                                  class="wishlist btn-button"
                                                  type="button"
                                                  data-toggle="tooltip"
                                                  title=""
                                                  onclick="wishlist.add('28');"
                                                  data-original-title="Add to Wish List"
                                                >
                                                  <i class="fa fa-heart"></i>
                                                </button>
                                                <button
                                                  class="compare btn-button"
                                                  type="button"
                                                  data-toggle="tooltip"
                                                  title=""
                                                  onclick="compare.add('28');"
                                                  data-original-title="Compare this Product"
                                                >
                                                  <i class="fa fa-exchange"></i>
                                                </button>
                                                <button
                                                  class="addToCart btn-button"
                                                  type="button"
                                                  data-toggle="tooltip"
                                                  title=""
                                                  onclick="cart.add('28');"
                                                  data-original-title="Add to cart"
                                                >
                                                  <span class="hidden">
                                                    Add to cart
                                                  </span>
                                                </button>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div class="item-inner product-layout transition product-grid">
                                        <div class="product-item-container">
                                          <div class="left-block">
                                            <div class="image product-image-container ">
                                              <a
                                                class="lt-image"
                                                href="#"
                                                target="_self"
                                                title="Est Officia Including Shoes Beautiful Pieces Canaz"
                                              >
                                                <img
                                                  src={spa1}
                                                  alt="Anantara Dhigu Resort &amp;amp; Spa, Maldives Hair Spa"
                                                />
                                              </a>
                                            </div>
                                            <div class="box-label">
                                              <span class="label-product label-sale">
                                                Sale
                                              </span>
                                            </div>
                                          </div>
                                          <div class="right-block">
                                            <div class="caption">
                                              <h4>
                                                <a
                                                  href="product.html"
                                                  title="Est Officia Including Shoes Beautiful Pieces Canaz"
                                                  target="_self"
                                                >
                                                  Est Officia Including Shoes
                                                  Beautiful Pieces Canaz
                                                </a>
                                              </h4>
                                              <div class="total-price clearfix">
                                                <div class="price price-left">
                                                  <span class="price-new">
                                                    $98.00
                                                  </span>
                                                  <span class="price-old">
                                                    $122.00
                                                  </span>
                                                </div>
                                                <div class="price-sale price-right">
                                                  <span class="discount 123">
                                                    -20%<strong>OFF</strong>
                                                  </span>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="button-group">
                                              <div class="button-inner so-quickview">
                                                <a
                                                  class="lt-image hidden"
                                                  href="#"
                                                  target="_self"
                                                  title="Est Officia Including Shoes Beautiful Pieces Canaz"
                                                ></a>
                                                <a
                                                  class="btn-button btn-quickview quickview quickview_handler"
                                                  href="quickview.html"
                                                  title="Quick View"
                                                  data-title="Quick View"
                                                  data-fancybox-type="iframe"
                                                >
                                                  <i class="fa fa-search"></i>
                                                </a>
                                                <button
                                                  class="wishlist btn-button"
                                                  type="button"
                                                  data-toggle="tooltip"
                                                  title=""
                                                  onclick="wishlist.add('28');"
                                                  data-original-title="Add to Wish List"
                                                >
                                                  <i class="fa fa-heart"></i>
                                                </button>
                                                <button
                                                  class="compare btn-button"
                                                  type="button"
                                                  data-toggle="tooltip"
                                                  title=""
                                                  onclick="compare.add('28');"
                                                  data-original-title="Compare this Product"
                                                >
                                                  <i class="fa fa-exchange"></i>
                                                </button>
                                                <button
                                                  class="addToCart btn-button"
                                                  type="button"
                                                  data-toggle="tooltip"
                                                  title=""
                                                  onclick="cart.add('28');"
                                                  data-original-title="Add to cart"
                                                >
                                                  <span class="hidden">
                                                    Add to cart
                                                  </span>
                                                </button>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  class="ltabs-items  items-category-5 grid"
                                  data-total="16"
                                >
                                  <div class="ltabs-loading"></div>
                                </div>
                                <div
                                  class="ltabs-items  items-category-6 grid"
                                  data-total="16"
                                >
                                  <div class="ltabs-loading"></div>
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
            </section>

            <section id="box-link4" class="section-style">
              <div class="container page-builder-ltr">
                <div class="row row-style row_a4">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col_mfpr  block block_7 title_neo4">
                    <div class="module so-listing-tabs-ltr home1-lt-style3 default-nav clearfix img-float home-lt1">
                      <div class="head-title font-ct">
                        <h2 class="modtitle">BUSINESS</h2>
                      </div>
                      <div class="modcontent">
                        <div
                          id="so_listing_tabs_3"
                          class="so-listing-tabs first-load"
                        >
                          <div class="ltabs-wrap">
                            <div
                              class="ltabs-tabs-container"
                              data-delay="300"
                              data-duration="600"
                              data-effect="starwars"
                              data-ajaxurl=""
                              data-type_source="0"
                              data-lg="3"
                              data-md="3"
                              data-sm="3"
                              data-xs="2"
                              data-margin="0"
                            >
                              <div class="ltabs-tabs-wrap">
                                <span class="ltabs-tab-selected">
                                  Best sellers
                                </span>
                                <span class="ltabs-tab-arrow">▼</span>
                                <div class="item-sub-cat">
                                  <ul class="ltabs-tabs cf">
                                    <li
                                      class="ltabs-tab tab-sel"
                                      data-category-id="4"
                                      data-active-content=".items-category-4"
                                    >
                                      <span class="ltabs-tab-label">
                                        Best sellers
                                      </span>
                                    </li>
                                    <li
                                      class="ltabs-tab"
                                      data-category-id="7"
                                      data-active-content=".items-category-7"
                                    >
                                      <span class="ltabs-tab-label">
                                        New Arrivals
                                      </span>
                                    </li>
                                    <li
                                      class="ltabs-tab"
                                      data-category-id="8"
                                      data-active-content=".items-category-8"
                                    >
                                      <span class="ltabs-tab-label">
                                        Most Rating
                                      </span>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div class="wap-listing-tabs products-list grid">
                              {/* <div class="item-cat-image banners">
												<div>
													<a href="product.html" title="" target="_self">
													<img class="categories-loadimage" title="" alt="" src="image/catalog/demo/banners/home1/md-banner-2.jpg">
													</a>
												</div>
											</div> */}
                              <div class="ltabs-items-container">
                                <div
                                  class="ltabs-items ltabs-items-selected items-category-4"
                                  data-total="16"
                                >
                                  <div class="ltabs-items-inner ltabs-slider row">
                                    <div class="ltabs-item col-md-3 col-sm-6 col-xs-12">
                                      <div class="item-inner product-layout transition product-grid">
                                        <div class="product-item-container">
                                          <div class="left-block">
                                            <div class="image product-image-container ">
                                              <a
                                                class="lt-image"
                                                href="#"
                                                target="_self"
                                                title="Bougainvilleas On Lombard Street, San Francisco, Tokyo"
                                              >
                                                <img
                                                  src={spa1}
                                                  alt="Anantara Dhigu Resort &amp;amp; Spa, Maldives Hair Spa"
                                                />
                                              </a>
                                            </div>
                                            <div class="box-label">
                                              <span class="label-product label-sale">
                                                Sale
                                              </span>
                                            </div>
                                          </div>
                                          <div class="right-block">
                                            <div class="caption">
                                              <h4>
                                                <a
                                                  href="product.html"
                                                  title="Bougainvilleas On Lombard Street, San Francisco, Tokyo"
                                                  target="_self"
                                                >
                                                  Bougainvilleas On Lombard
                                                  Street, San Francisco, Tokyo
                                                </a>
                                              </h4>
                                              <div class="total-price clearfix">
                                                <div class="price price-left">
                                                  <span class="price-new">
                                                    $108.80
                                                  </span>
                                                  <span class="price-old">
                                                    $122.00
                                                  </span>
                                                </div>
                                                <div class="price-sale price-right">
                                                  <span class="discount 123">
                                                    -11%<strong>OFF</strong>
                                                  </span>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="button-group">
                                              <div class="button-inner so-quickview">
                                                <a
                                                  class="lt-image hidden"
                                                  href="#"
                                                  target="_self"
                                                  title="Bougainvilleas On Lombard Street, San Francisco, Tokyo"
                                                ></a>
                                                <a
                                                  class="btn-button btn-quickview quickview quickview_handler"
                                                  href="quickview.html"
                                                  title="Quick View"
                                                  data-title="Quick View"
                                                  data-fancybox-type="iframe"
                                                >
                                                  <i class="fa fa-search"></i>
                                                </a>
                                                <button
                                                  class="wishlist btn-button"
                                                  type="button"
                                                  data-toggle="tooltip"
                                                  title=""
                                                  onclick="wishlist.add('28');"
                                                  data-original-title="Add to Wish List"
                                                >
                                                  <i class="fa fa-heart"></i>
                                                </button>
                                                <button
                                                  class="compare btn-button"
                                                  type="button"
                                                  data-toggle="tooltip"
                                                  title=""
                                                  onclick="compare.add('28');"
                                                  data-original-title="Compare this Product"
                                                >
                                                  <i class="fa fa-exchange"></i>
                                                </button>
                                                <button
                                                  class="addToCart btn-button"
                                                  type="button"
                                                  data-toggle="tooltip"
                                                  title=""
                                                  onclick="cart.add('28');"
                                                  data-original-title="Add to cart"
                                                >
                                                  <span class="hidden">
                                                    Add to cart
                                                  </span>
                                                </button>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div class="item-inner product-layout transition product-grid">
                                        <div class="product-item-container">
                                          <div class="left-block">
                                            <div class="image product-image-container ">
                                              <a
                                                class="lt-image"
                                                href="#"
                                                target="_self"
                                                title="Philipin Tour Group Manila/ Pattaya / Mactan "
                                              >
                                                <img
                                                  src={spa1}
                                                  alt="Anantara Dhigu Resort &amp;amp; Spa, Maldives Hair Spa"
                                                />
                                              </a>
                                            </div>
                                            <div class="box-label">
                                              <span class="label-product label-sale">
                                                Sale
                                              </span>
                                            </div>
                                          </div>
                                          <div class="right-block">
                                            <div class="caption">
                                              <h4>
                                                <a
                                                  href="product.html"
                                                  title="Philipin Tour Group Manila/ Pattaya / Mactan "
                                                  target="_self"
                                                >
                                                  Philipin Tour Group Manila/
                                                  Pattaya / Mactan{" "}
                                                </a>
                                              </h4>
                                              <div class="total-price clearfix">
                                                <div class="price price-left">
                                                  <span class="price-new">
                                                    $74.00
                                                  </span>
                                                  <span class="price-old">
                                                    $122.00
                                                  </span>
                                                </div>
                                                <div class="price-sale price-right">
                                                  <span class="discount 123">
                                                    -40%<strong>OFF</strong>
                                                  </span>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="button-group">
                                              <div class="button-inner so-quickview">
                                                <a
                                                  class="lt-image hidden"
                                                  href="#"
                                                  target="_self"
                                                  title="Philipin Tour Group Manila/ Pattaya / Mactan "
                                                ></a>
                                                <a
                                                  class="btn-button btn-quickview quickview quickview_handler"
                                                  href="quickview.html"
                                                  title="Quick View"
                                                  data-title="Quick View"
                                                  data-fancybox-type="iframe"
                                                >
                                                  <i class="fa fa-search"></i>
                                                </a>
                                                <button
                                                  class="wishlist btn-button"
                                                  type="button"
                                                  data-toggle="tooltip"
                                                  title=""
                                                  onclick="wishlist.add('28');"
                                                  data-original-title="Add to Wish List"
                                                >
                                                  <i class="fa fa-heart"></i>
                                                </button>
                                                <button
                                                  class="compare btn-button"
                                                  type="button"
                                                  data-toggle="tooltip"
                                                  title=""
                                                  onclick="compare.add('28');"
                                                  data-original-title="Compare this Product"
                                                >
                                                  <i class="fa fa-exchange"></i>
                                                </button>
                                                <button
                                                  class="addToCart btn-button"
                                                  type="button"
                                                  data-toggle="tooltip"
                                                  title=""
                                                  onclick="cart.add('28');"
                                                  data-original-title="Add to cart"
                                                >
                                                  <span class="hidden">
                                                    Add to cart
                                                  </span>
                                                </button>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="ltabs-item col-md-3 col-sm-6 col-xs-12">
                                      <div class="item-inner product-layout transition product-grid">
                                        <div class="product-item-container">
                                          <div class="left-block">
                                            <div class="image product-image-container ">
                                              <a
                                                class="lt-image"
                                                href="#"
                                                target="_self"
                                                title="Burger King Japan debuts Monster Baby, Double, Canada"
                                              >
                                                <img
                                                  src={spa1}
                                                  alt="Anantara Dhigu Resort &amp;amp; Spa, Maldives Hair Spa"
                                                />
                                              </a>
                                            </div>
                                          </div>
                                          <div class="right-block">
                                            <div class="caption">
                                              <h4>
                                                <a
                                                  href="product.html"
                                                  title="Burger King Japan debuts Monster Baby, Double, Canada"
                                                  target="_self"
                                                >
                                                  Burger King Japan debuts
                                                  Monster Baby, Double, Canada
                                                </a>
                                              </h4>
                                              <div class="total-price clearfix">
                                                <div class="price price-left">
                                                  <span class="price-new">
                                                    $1,202.00
                                                  </span>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="button-group">
                                              <div class="button-inner so-quickview">
                                                <a
                                                  class="lt-image hidden"
                                                  href="#"
                                                  target="_self"
                                                  title="Burger King Japan debuts Monster Baby, Double, Canada"
                                                ></a>
                                                <a
                                                  class="btn-button btn-quickview quickview quickview_handler"
                                                  href="quickview.html"
                                                  title="Quick View"
                                                  data-title="Quick View"
                                                  data-fancybox-type="iframe"
                                                >
                                                  <i class="fa fa-search"></i>
                                                </a>
                                                <button
                                                  class="wishlist btn-button"
                                                  type="button"
                                                  data-toggle="tooltip"
                                                  title=""
                                                  onclick="wishlist.add('28');"
                                                  data-original-title="Add to Wish List"
                                                >
                                                  <i class="fa fa-heart"></i>
                                                </button>
                                                <button
                                                  class="compare btn-button"
                                                  type="button"
                                                  data-toggle="tooltip"
                                                  title=""
                                                  onclick="compare.add('28');"
                                                  data-original-title="Compare this Product"
                                                >
                                                  <i class="fa fa-exchange"></i>
                                                </button>
                                                <button
                                                  class="addToCart btn-button"
                                                  type="button"
                                                  data-toggle="tooltip"
                                                  title=""
                                                  onclick="cart.add('28');"
                                                  data-original-title="Add to cart"
                                                >
                                                  <span class="hidden">
                                                    Add to cart
                                                  </span>
                                                </button>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div class="item-inner product-layout transition product-grid">
                                        <div class="product-item-container">
                                          <div class="left-block">
                                            <div class="image product-image-container ">
                                              <a
                                                class="lt-image"
                                                href="#"
                                                target="_self"
                                                title="Thailand Group Departure / Pattaya / Bangkok"
                                              >
                                                <img
                                                  src={spa1}
                                                  alt="Anantara Dhigu Resort &amp;amp; Spa, Maldives Hair Spa"
                                                />
                                              </a>
                                            </div>
                                          </div>
                                          <div class="right-block">
                                            <div class="caption">
                                              <h4>
                                                <a
                                                  href="product.html"
                                                  title="Thailand Group Departure / Pattaya / Bangkok"
                                                  target="_self"
                                                >
                                                  Thailand Group Departure /
                                                  Pattaya / Bangkok
                                                </a>
                                              </h4>
                                              <div class="total-price clearfix">
                                                <div class="price price-left">
                                                  <span class="price-new">
                                                    $122.00
                                                  </span>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="button-group">
                                              <div class="button-inner so-quickview">
                                                <a
                                                  class="lt-image hidden"
                                                  href="#"
                                                  target="_self"
                                                  title="Thailand Group Departure / Pattaya / Bangkok"
                                                ></a>
                                                <a
                                                  class="btn-button btn-quickview quickview quickview_handler"
                                                  href="quickview.html"
                                                  title="Quick View"
                                                  data-title="Quick View"
                                                  data-fancybox-type="iframe"
                                                >
                                                  <i class="fa fa-search"></i>
                                                </a>
                                                <button
                                                  class="wishlist btn-button"
                                                  type="button"
                                                  data-toggle="tooltip"
                                                  title=""
                                                  onclick="wishlist.add('28');"
                                                  data-original-title="Add to Wish List"
                                                >
                                                  <i class="fa fa-heart"></i>
                                                </button>
                                                <button
                                                  class="compare btn-button"
                                                  type="button"
                                                  data-toggle="tooltip"
                                                  title=""
                                                  onclick="compare.add('28');"
                                                  data-original-title="Compare this Product"
                                                >
                                                  <i class="fa fa-exchange"></i>
                                                </button>
                                                <button
                                                  class="addToCart btn-button"
                                                  type="button"
                                                  data-toggle="tooltip"
                                                  title=""
                                                  onclick="cart.add('28');"
                                                  data-original-title="Add to cart"
                                                >
                                                  <span class="hidden">
                                                    Add to cart
                                                  </span>
                                                </button>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="ltabs-item col-md-3 col-sm-6 col-xs-12">
                                      <div class="item-inner product-layout transition product-grid">
                                        <div class="product-item-container">
                                          <div class="left-block">
                                            <div class="image product-image-container ">
                                              <a
                                                class="lt-image"
                                                href="#"
                                                target="_self"
                                                title="Chicago Tour Departure / Pattaya / Solimania..."
                                              >
                                                <img
                                                  src={spa1}
                                                  alt="Anantara Dhigu Resort &amp;amp; Spa, Maldives Hair Spa"
                                                />
                                              </a>
                                            </div>
                                            <div class="box-label">
                                              <span class="label-product label-sale">
                                                Sale
                                              </span>
                                            </div>
                                          </div>
                                          <div class="right-block">
                                            <div class="caption">
                                              <h4>
                                                <a
                                                  href="product.html"
                                                  title="Chicago Tour Departure / Pattaya / Solimania/ Tokyo/ Canada"
                                                  target="_self"
                                                >
                                                  Chicago Tour Departure /
                                                  Pattaya / Solimania...
                                                </a>
                                              </h4>
                                              <div class="total-price clearfix">
                                                <div class="price price-left">
                                                  <span class="price-new">
                                                    $108.80
                                                  </span>
                                                  <span class="price-old">
                                                    $122.00
                                                  </span>
                                                </div>
                                                <div class="price-sale price-right">
                                                  <span class="discount 123">
                                                    -11%<strong>OFF</strong>
                                                  </span>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="button-group">
                                              <div class="button-inner so-quickview">
                                                <a
                                                  class="lt-image hidden"
                                                  href="#"
                                                  target="_self"
                                                  title="Chicago Tour Departure / Pattaya / Solimania/ Tokyo/ Canada"
                                                ></a>
                                                <a
                                                  class="btn-button btn-quickview quickview quickview_handler"
                                                  href="quickview.html"
                                                  title="Quick View"
                                                  data-title="Quick View"
                                                  data-fancybox-type="iframe"
                                                >
                                                  <i class="fa fa-search"></i>
                                                </a>
                                                <button
                                                  class="wishlist btn-button"
                                                  type="button"
                                                  data-toggle="tooltip"
                                                  title=""
                                                  onclick="wishlist.add('28');"
                                                  data-original-title="Add to Wish List"
                                                >
                                                  <i class="fa fa-heart"></i>
                                                </button>
                                                <button
                                                  class="compare btn-button"
                                                  type="button"
                                                  data-toggle="tooltip"
                                                  title=""
                                                  onclick="compare.add('28');"
                                                  data-original-title="Compare this Product"
                                                >
                                                  <i class="fa fa-exchange"></i>
                                                </button>
                                                <button
                                                  class="addToCart btn-button"
                                                  type="button"
                                                  data-toggle="tooltip"
                                                  title=""
                                                  onclick="cart.add('28');"
                                                  data-original-title="Add to cart"
                                                >
                                                  <span class="hidden">
                                                    Add to cart
                                                  </span>
                                                </button>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div class="item-inner product-layout transition product-grid">
                                        <div class="product-item-container">
                                          <div class="left-block">
                                            <div class="image product-image-container ">
                                              <a
                                                class="lt-image"
                                                href="#"
                                                target="_self"
                                                title="Tokyo Temple on Elevated Area Under Blue Sky and White"
                                              >
                                                <img
                                                  src={spa1}
                                                  alt="Anantara Dhigu Resort &amp;amp; Spa, Maldives Hair Spa"
                                                />
                                              </a>
                                            </div>
                                          </div>
                                          <div class="right-block">
                                            <div class="caption">
                                              <h4>
                                                <a
                                                  href="product.html"
                                                  title="Tokyo Temple on Elevated Area Under Blue Sky and White"
                                                  target="_self"
                                                >
                                                  Tokyo Temple on Elevated Area
                                                  Under Blue Sky and White
                                                </a>
                                              </h4>
                                              <div class="total-price clearfix">
                                                <div class="price price-left">
                                                  <span class="price-new">
                                                    $122.00
                                                  </span>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="button-group">
                                              <div class="button-inner so-quickview">
                                                <a
                                                  class="lt-image hidden"
                                                  href="#"
                                                  target="_self"
                                                  title="Tokyo Temple on Elevated Area Under Blue Sky and White"
                                                ></a>
                                                <a
                                                  class="btn-button btn-quickview quickview quickview_handler"
                                                  href="quickview.html"
                                                  title="Quick View"
                                                  data-title="Quick View"
                                                  data-fancybox-type="iframe"
                                                >
                                                  <i class="fa fa-search"></i>
                                                </a>
                                                <button
                                                  class="wishlist btn-button"
                                                  type="button"
                                                  data-toggle="tooltip"
                                                  title=""
                                                  onclick="wishlist.add('28');"
                                                  data-original-title="Add to Wish List"
                                                >
                                                  <i class="fa fa-heart"></i>
                                                </button>
                                                <button
                                                  class="compare btn-button"
                                                  type="button"
                                                  data-toggle="tooltip"
                                                  title=""
                                                  onclick="compare.add('28');"
                                                  data-original-title="Compare this Product"
                                                >
                                                  <i class="fa fa-exchange"></i>
                                                </button>
                                                <button
                                                  class="addToCart btn-button"
                                                  type="button"
                                                  data-toggle="tooltip"
                                                  title=""
                                                  onclick="cart.add('28');"
                                                  data-original-title="Add to cart"
                                                >
                                                  <span class="hidden">
                                                    Add to cart
                                                  </span>
                                                </button>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="ltabs-item col-md-3 col-sm-6 col-xs-12">
                                      <div class="item-inner product-layout transition product-grid">
                                        <div class="product-item-container">
                                          <div class="left-block">
                                            <div class="image product-image-container ">
                                              <a
                                                class="lt-image"
                                                href="#"
                                                target="_self"
                                                title="Chicago Tour Departure / Pattaya / Solimania..."
                                              >
                                                <img
                                                  src={spa1}
                                                  alt="Anantara Dhigu Resort &amp;amp; Spa, Maldives Hair Spa"
                                                />
                                              </a>
                                            </div>
                                            <div class="box-label">
                                              <span class="label-product label-sale">
                                                Sale
                                              </span>
                                            </div>
                                          </div>
                                          <div class="right-block">
                                            <div class="caption">
                                              <h4>
                                                <a
                                                  href="product.html"
                                                  title="Chicago Tour Departure / Pattaya / Solimania/ Tokyo/ Canada"
                                                  target="_self"
                                                >
                                                  Chicago Tour Departure /
                                                  Pattaya / Solimania...
                                                </a>
                                              </h4>
                                              <div class="total-price clearfix">
                                                <div class="price price-left">
                                                  <span class="price-new">
                                                    $108.80
                                                  </span>
                                                  <span class="price-old">
                                                    $122.00
                                                  </span>
                                                </div>
                                                <div class="price-sale price-right">
                                                  <span class="discount 123">
                                                    -11%<strong>OFF</strong>
                                                  </span>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="button-group">
                                              <div class="button-inner so-quickview">
                                                <a
                                                  class="lt-image hidden"
                                                  href="#"
                                                  target="_self"
                                                  title="Chicago Tour Departure / Pattaya / Solimania/ Tokyo/ Canada"
                                                ></a>
                                                <a
                                                  class="btn-button btn-quickview quickview quickview_handler"
                                                  href="quickview.html"
                                                  title="Quick View"
                                                  data-title="Quick View"
                                                  data-fancybox-type="iframe"
                                                >
                                                  <i class="fa fa-search"></i>
                                                </a>
                                                <button
                                                  class="wishlist btn-button"
                                                  type="button"
                                                  data-toggle="tooltip"
                                                  title=""
                                                  onclick="wishlist.add('28');"
                                                  data-original-title="Add to Wish List"
                                                >
                                                  <i class="fa fa-heart"></i>
                                                </button>
                                                <button
                                                  class="compare btn-button"
                                                  type="button"
                                                  data-toggle="tooltip"
                                                  title=""
                                                  onclick="compare.add('28');"
                                                  data-original-title="Compare this Product"
                                                >
                                                  <i class="fa fa-exchange"></i>
                                                </button>
                                                <button
                                                  class="addToCart btn-button"
                                                  type="button"
                                                  data-toggle="tooltip"
                                                  title=""
                                                  onclick="cart.add('28');"
                                                  data-original-title="Add to cart"
                                                >
                                                  <span class="hidden">
                                                    Add to cart
                                                  </span>
                                                </button>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div class="item-inner product-layout transition product-grid">
                                        <div class="product-item-container">
                                          <div class="left-block">
                                            <div class="image product-image-container ">
                                              <a
                                                class="lt-image"
                                                href="#"
                                                target="_self"
                                                title="Tokyo Temple on Elevated Area Under Blue Sky and White"
                                              >
                                                <img
                                                  src={spa1}
                                                  alt="Anantara Dhigu Resort &amp;amp; Spa, Maldives Hair Spa"
                                                />
                                              </a>
                                            </div>
                                          </div>
                                          <div class="right-block">
                                            <div class="caption">
                                              <h4>
                                                <a
                                                  href="product.html"
                                                  title="Tokyo Temple on Elevated Area Under Blue Sky and White"
                                                  target="_self"
                                                >
                                                  Tokyo Temple on Elevated Area
                                                  Under Blue Sky and White
                                                </a>
                                              </h4>
                                              <div class="total-price clearfix">
                                                <div class="price price-left">
                                                  <span class="price-new">
                                                    $122.00
                                                  </span>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="button-group">
                                              <div class="button-inner so-quickview">
                                                <a
                                                  class="lt-image hidden"
                                                  href="#"
                                                  target="_self"
                                                  title="Tokyo Temple on Elevated Area Under Blue Sky and White"
                                                ></a>
                                                <a
                                                  class="btn-button btn-quickview quickview quickview_handler"
                                                  href="quickview.html"
                                                  title="Quick View"
                                                  data-title="Quick View"
                                                  data-fancybox-type="iframe"
                                                >
                                                  <i class="fa fa-search"></i>
                                                </a>
                                                <button
                                                  class="wishlist btn-button"
                                                  type="button"
                                                  data-toggle="tooltip"
                                                  title=""
                                                  onclick="wishlist.add('28');"
                                                  data-original-title="Add to Wish List"
                                                >
                                                  <i class="fa fa-heart"></i>
                                                </button>
                                                <button
                                                  class="compare btn-button"
                                                  type="button"
                                                  data-toggle="tooltip"
                                                  title=""
                                                  onclick="compare.add('28');"
                                                  data-original-title="Compare this Product"
                                                >
                                                  <i class="fa fa-exchange"></i>
                                                </button>
                                                <button
                                                  class="addToCart btn-button"
                                                  type="button"
                                                  data-toggle="tooltip"
                                                  title=""
                                                  onclick="cart.add('28');"
                                                  data-original-title="Add to cart"
                                                >
                                                  <span class="hidden">
                                                    Add to cart
                                                  </span>
                                                </button>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  class="ltabs-items  items-category-7 grid"
                                  data-total="16"
                                >
                                  <div class="ltabs-loading"></div>
                                </div>
                                <div
                                  class="ltabs-items  items-category-8 grid"
                                  data-total="16"
                                >
                                  <div class="ltabs-loading"></div>
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
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Index;
