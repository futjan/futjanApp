import React from "react";
import { Link } from "react-router-dom";
function HeaderSurplusType() {
  return (
    <>
      <div className="sub-menu" id="sub-menu">
        <div id="sub-menu-content">
          <h4 style={{ padding: "0 15px" }}>Business Type</h4>
          <div>
            <ul className="row-list">
              <li className="col-md-3 col-sm-4 col-xs-6 type-ul-li-nav">
                <Link
                  className="subcategory_item"
                  to="/surplus"
                  state={{
                    type: "Bakery",
                  }}
                >
                  Bakery
                </Link>
              </li>
              <li className="col-md-3 col-sm-4 col-xs-6 type-ul-li-nav">
                <Link
                  className="subcategory_item"
                  to="/surplus"
                  state={{ type: "Beverage Shop" }}
                >
                  Beverage Shop
                </Link>
              </li>
              <li className="col-md-3 col-sm-4 col-xs-6 type-ul-li-nav">
                <Link
                  className="subcategory_item"
                  to="/surplus"
                  state={{
                    type: "Convenience store",
                  }}
                >
                  Convenience store
                </Link>
              </li>
              <li className="col-md-3 col-sm-4 col-xs-6 type-ul-li-nav">
                <Link
                  className="subcategory_item"
                  to="/surplus"
                  state={{
                    type: "Fruit/Vegetable store",
                  }}
                >
                  Fruit/Vegetable store
                </Link>
              </li>
              <li className="col-md-3 col-sm-4 col-xs-6 type-ul-li-nav">
                <Link
                  className="subcategory_item"
                  to="/surplus"
                  state={{
                    type: "Hotel",
                  }}
                >
                  Hotel
                </Link>
              </li>
              <li className="col-md-3 col-sm-4 col-xs-6 type-ul-li-nav">
                <Link
                  className="subcategory_item"
                  to="/surplus"
                  state={{
                    type: "Pastry shop",
                  }}
                >
                  Pastry shop
                </Link>
              </li>
              <li className="col-md-3 col-sm-4 col-xs-6 type-ul-li-nav">
                <Link
                  className="subcategory_item"
                  to="/surplus"
                  state={{
                    type: "Producers/Manufacturers",
                  }}
                >
                  Producers/Manufacturers
                </Link>
              </li>
              <li className="col-md-3 col-sm-4 col-xs-6 type-ul-li-nav">
                <Link
                  className="subcategory_item"
                  to="/surplus"
                  state={{ type: "Restaurant" }}
                >
                  Restaurant
                </Link>
              </li>
              <li className="col-md-3 col-sm-4 col-xs-6 type-ul-li-nav">
                <Link
                  className="subcategory_item"
                  to="/surplus"
                  state={{ type: "Supermarkets" }}
                >
                  Supermarkets
                </Link>
              </li>

              <li className="col-md-3 col-sm-4 col-xs-6 type-ul-li-nav">
                <Link
                  className="subcategory_item"
                  to="/surplus"
                  state={{ type: "Takeaway" }}
                >
                  Takeaway
                </Link>
              </li>
              <li className="col-md-3 col-sm-4 col-xs-6 type-ul-li-nav">
                <Link
                  className="subcategory_item"
                  to="/surplus"
                  state={{ type: "Wholesalers" }}
                >
                  Wholesalers
                </Link>
              </li>
              <li className="col-md-3 col-sm-4 col-xs-6 type-ul-li-nav">
                <Link
                  className="subcategory_item"
                  to="/surplus"
                  state={{ type: "Cafe" }}
                >
                  Cafe
                </Link>
              </li>
              <li className="col-md-3 col-sm-4 col-xs-6 type-ul-li-nav">
                <Link
                  className="subcategory_item"
                  to="/surplus"
                  state={{ type: "Other" }}
                >
                  Other
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
export default React.memo(HeaderSurplusType);
