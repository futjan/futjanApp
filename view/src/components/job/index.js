import React from "react";
import { Link } from "react-router-dom";
import upworkLogo from "../image/upworkLogo.png";

const Index = () => {
  return (
    <div className="res layout-1" style={{ marginTop: "30px" }}>
      <div id="wrapper" className="wrapper-fluid banners-effect-10">
        <div className="container product-detail">
          <div className="row">
            <aside className="col-md-3 col-sm-4 col-xs-12 content-aside right_column sidebar-offcanvas">
              <span id="close-sidebar" className="fa fa-times"></span>
              <div className="module so_filter_wrap filter-horizontal">
                <h3 className="modtitle">
                  <span>Search BY</span>
                </h3>
                <div className="modcontent">
                  <ul>
                    <li className="so-filter-options" data-option="search">
                      <div className="so-filter-heading">
                        <div className="so-filter-heading-text">
                          <span>Keyword</span>
                        </div>
                        <i className="fa fa-chevron-down"></i>
                      </div>

                      <div className="so-filter-content-opts">
                        <div className="so-filter-content-opts-container">
                          <div className="so-filter-option" data-type="search">
                            <div className="so-option-container">
                              <div
                                className="input-group"
                                style={{ width: "100%" }}
                              >
                                <input
                                  type="text"
                                  className="form-control"
                                  name="text_search"
                                  id="text_search"
                                  // value={keyword}
                                  // onChange={(e) => onChangeAutoFieldName(e)}
                                />
                                {/* {renderNameSuggustion()} */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="so-filter-options" data-option="search">
                      <div className="so-filter-heading">
                        <div className="so-filter-heading-text">
                          <span>Country</span>
                        </div>
                        <i className="fa fa-chevron-down"></i>
                      </div>

                      <div className="so-filter-content-opts">
                        <div className="so-filter-content-opts-container">
                          <div className="so-filter-option" data-type="search">
                            <div className="so-option-container">
                              <div
                                className="input-group"
                                style={{ width: "100%" }}
                              >
                                {/* <Countries
                                setCountry={setCountry}
                                country={country}
                              /> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="so-filter-options" data-option="search">
                      <div className="so-filter-heading">
                        <div className="so-filter-heading-text">
                          <span>State / County</span>
                        </div>
                        <i className="fa fa-chevron-down"></i>
                      </div>

                      <div className="so-filter-content-opts">
                        <div className="so-filter-content-opts-container">
                          <div className="so-filter-option" data-type="search">
                            <div className="so-option-container">
                              <div
                                className="input-group"
                                style={{ width: "100%" }}
                              >
                                {/* <County
                                country={country}
                                setCounty={setCounty}
                                county={county}
                              /> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="so-filter-options" data-option="search">
                      <div className="so-filter-heading">
                        <div className="so-filter-heading-text">
                          <span>City</span>
                        </div>
                        <i className="fa fa-chevron-down"></i>
                      </div>

                      <div className="so-filter-content-opts">
                        <div className="so-filter-content-opts-container">
                          <div className="so-filter-option" data-type="search">
                            <div className="so-option-container">
                              <div
                                className="input-group"
                                style={{ width: "100%" }}
                              >
                                {/* <Cities
                                setCity={setCity}
                                county={county}
                                country={country}
                                city={city}
                              /> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="so-filter-options" data-option="search">
                      <div className="so-filter-heading">
                        <div className="so-filter-heading-text">
                          <span>Business Type</span>
                        </div>
                        <i className="fa fa-chevron-down"></i>
                      </div>

                      <div className="so-filter-content-opts">
                        <div className="so-filter-content-opts-container">
                          <div className="so-filter-option" data-type="search">
                            <div className="so-option-container">
                              <div
                                className="input-group"
                                style={{ width: "100%" }}
                              >
                                <select
                                  className="form-control"
                                  // onChange={(e) =>
                                  //   setBusinessType(e.target.value)
                                  // }
                                  // value={businessType}
                                >
                                  <option value="">Choose type</option>
                                  <option value="Bakery">Bakery</option>
                                  <option value="Beverage Shop">
                                    Beverage Shop
                                  </option>
                                  <option value="Convenience store">
                                    Convenience store
                                  </option>
                                  <option value="Cafe">Cafe</option>
                                  <option value="Fruit/Vegetable store">
                                    Fruit/Vegetable store
                                  </option>
                                  <option value="Hotel">Hotel</option>
                                  <option value="Pastry shop">
                                    Pastry shop
                                  </option>
                                  <option value="Producers/Manufacturers">
                                    Producers/Manufacturers
                                  </option>
                                  <option value="Restaurant">Restaurant</option>
                                  <option value="Supermarkets">
                                    Supermarkets
                                  </option>
                                  <option value="Takeaway">Takeaway</option>
                                  <option value="Wholesalers">
                                    Wholesalers
                                  </option>
                                  <option value="Other">Other </option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="so-filter-options" data-option="search">
                      <div className="so-filter-heading">
                        <div className="so-filter-heading-text">
                          <span>Category</span>
                        </div>
                        <i className="fa fa-chevron-down"></i>
                      </div>

                      <div className="so-filter-content-opts">
                        <div className="so-filter-content-opts-container">
                          <div className="so-filter-option" data-type="search">
                            <div className="so-option-container">
                              <div
                                className="input-group"
                                style={{ width: "100%" }}
                              >
                                <select
                                  className="form-control"
                                  // onChange={(e) => setCategory(e.target.value)}
                                  // value={category}
                                >
                                  <option value="">Choose Category</option>
                                  <option value="Baked Goods">
                                    Baked Goods
                                  </option>
                                  <option value="Groceries">Groceries</option>
                                  <option value="Meals">Meals</option>
                                  <option value="Other">Other</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <div className="clear_filter">
                    <button
                      className="btn btn-default inverse"
                      id="btn_resetAll"
                      // onClick={() => callSurplusesAPI(page, limit, sort)}
                    >
                      <span
                        className="hidden fa fa-times"
                        aria-hidden="true"
                      ></span>{" "}
                      Search
                    </button>

                    <button
                      className="btn btn-default inverse"
                      id="btn_resetAll"
                      // onClick={() => clearState()}
                    >
                      <span
                        className="hidden fa fa-times"
                        aria-hidden="true"
                      ></span>{" "}
                      Reset All
                    </button>
                  </div>
                </div>
              </div>
            </aside>
            <a
              href="javascript:void(0)"
              className="open-sidebar hidden-lg hidden-md"
            >
              <i className="fa fa-bars"></i>Sidebar
            </a>
            <div
              className="products-category  col-md-9 col-sm-12 col-xs-12"
              style={{ padding: "0" }}
            >
              <div className="form-group clearfix">
                <h3
                  className="title-category "
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span>Job</span>
                  <Link
                    className="clearfix"
                    to="/user-panel"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                      fontSize: "14px",
                      fontWeight: "100",
                    }}
                  >
                    <i
                      className="fa fa-thumb-tack"
                      style={{
                        fontSize: "20px",
                        padding: "0",
                        marginBottom: "3px",
                      }}
                    ></i>
                    Post Ad
                  </Link>
                </h3>
              </div>
              <div className="products-category">
                <div className="product-filter filters-panel">
                  <div
                    className="row"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <div className="col-sm-3 view-mode hidden-sm hidden-xs">
                      <h4 style={{ margin: "0", fontWeight: "100" }}>
                        Category :{" "}
                        <span>
                          {/* {searchedCategory.length > 0
                          ? searchedCategory.toUpperCase()
                          : "All"} */}
                          All
                        </span>
                      </h4>
                    </div>
                    <div className="short-by-show form-inline text-right col-md-9  col-sm-11">
                      <div className="form-group short-by">
                        <label className="control-label" htmlFor="input-sort">
                          Sort By:
                        </label>
                        <select
                          id="input-sort"
                          className="form-control"
                          // value={sort}
                          // onChange={(e) => {
                          //   setSort(e.target.value);
                          //   callSurplusesAPI(page, limit, e.target.value);
                          // }}
                        >
                          <option value="" selected="selected">
                            Default
                          </option>

                          <option value="originalPrice">
                            Original Price (Low to High)
                          </option>
                          <option value="-originalPrice">
                            Original Price (High to Low)
                          </option>

                          <option value="offeredPrice">
                            Offered Price (Low to High)
                          </option>
                          <option value="-offeredPrice">
                            Offered Price (High to Low)
                          </option>
                          <option value="discount">
                            Discount (Low to High)
                          </option>
                          <option value="-discount">
                            Discount (High to Low)
                          </option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label className="control-label" htmlFor="input-limit">
                          Show:
                        </label>
                        <select
                          id="input-limit"
                          className="form-control"
                          // value={limit}
                          // onChange={(e) => {
                          //   if (
                          //     page * (e.target.value * 1) >
                          //     surplusFromStore.totalDocs
                          //   ) {
                          //     setLimit(e.target.value * 1);
                          //     setPage(
                          //       Math.ceil(
                          //         surplusFromStore.totalDocs /
                          //           (e.target.value * 1)
                          //       )
                          //     );
                          //     callSurplusesAPI(
                          //       Math.ceil(
                          //         surplusFromStore.totalDocs /
                          //           (e.target.value * 1)
                          //       ),
                          //       e.target.value * 1,
                          //       sort
                          //     );
                          //   } else {
                          //     setLimit(e.target.value * 1);
                          //     callSurplusesAPI(page, e.target.value, sort);
                          //   }
                          // }}
                        >
                          <option value="5">5</option>
                          <option value="10">10</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="show-result-info">
                  <i className="fa fa-rss"></i>
                  <p>0 results found </p>
                </div>

                <div className="products-list grid row number-col-3 so-filter-gird">
                  {/* {surplusFromStore.surpluses.length > 0
                  ? surplusFromStore.surpluses.map((sur) => ( */}
                  <div className="product-layout col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <div className="job-container">
                      <div className="job-image-container">
                        <img src={upworkLogo} alt="logo" width="55" />
                      </div>
                      <div className="job-detail">
                        <h5>Senior Product Designer</h5>
                        <p>
                          <i className="fa fa-briefcase"></i> Job type
                        </p>
                        <p>
                          {" "}
                          <i className="fa fa-money"></i> Min - Max / day
                        </p>
                        <span className="job-type-span">Part time</span>
                        <span className="job-promotion-type">Featured</span>
                      </div>
                    </div>
                  </div>
                  <div className="product-layout col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <div className="job-container">
                      <div className="job-image-container">
                        <img src={upworkLogo} alt="logo" width="55" />
                      </div>
                      <div className="job-detail">
                        <h5>Senior Product Designer</h5>
                        <p>
                          <i className="fa fa-briefcase"></i> Job type
                        </p>
                        <p>
                          {" "}
                          <i className="fa fa-money"></i> Min - Max / day
                        </p>
                        <span className="job-type-span">Part time</span>
                        <span className="job-promotion-type">Featured</span>
                      </div>
                    </div>
                  </div>
                  <div className="product-layout col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <div className="job-container">
                      <div className="job-image-container">
                        <img src={upworkLogo} alt="logo" width="55" />
                      </div>
                      <div className="job-detail">
                        <h5>Senior Product Designer</h5>
                        <p>
                          <i className="fa fa-briefcase"></i> Job type
                        </p>
                        <p>
                          {" "}
                          <i className="fa fa-money"></i> Min - Max / day
                        </p>
                        <span className="job-type-span">Part time</span>
                        <span className="job-promotion-type">Featured</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="product-filter product-filter-bottom filters-panel">
                  <div className="col-sm-6 text-left">
                    <ul className="pagination">
                      {/* {paginationUI.length > 5 && page > 1 ? (
                      <li
                        onClick={() => {
                          if (page > 1) {
                            setPage(page - 1);
                            callSurplusesAPI(page - 1, limit, sort);
                          }
                        }}
                      >
                        <a href="#">&lt;</a>
                      </li>
                    ) : null} */}

                      {/* {paginationUI.length > 0
                      ? paginationUI.map((pag, i) =>
                          i + 1 > 5 ? null : (
                            <li
                              className={i + 1 === page ? "active" : ""}
                              style={{ cursor: "pointer" }}
                              onClick={() => {
                                setPage(i + 1);
                                callSurplusesAPI(i + 1, limit, sort);
                              }}
                              key={i}
                            >
                              <span>{i + 1}</span>
                            </li>
                          )
                        )
                      : null} */}
                      {/* {paginationUI.length > 5 ? (
                      <li
                        onClick={() => {
                          if (page <= surplusFromStore.totalDocs / limit) {
                            setPage(page + 1);
                            callSurplusesAPI(page + 1, limit, sort);
                          }
                        }}
                      >
                        <a href="#">&gt;</a>
                      </li>
                    ) : null} */}
                    </ul>
                  </div>
                  <div className="col-sm-6 text-right">
                    {/* Showing {page * limit - limit + 1} to{" "}
                  {(page - 1) * limit + limit > surplusFromStore.totalDocs
                    ? surplusFromStore.totalDocs
                    : (page - 1) * limit + limit}{" "}
                  of {surplusFromStore.totalDocs} ({page} Pages) */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
