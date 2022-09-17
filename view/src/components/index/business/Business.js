import React, { useEffect } from "react";

import { getBusinesses } from "../../actions/businessAction";
import { useDispatch, useSelector } from "react-redux";
import Skeleton from "react-loading-skeleton";
import Ad from "../index utils/Ad";
import { Link } from "react-router-dom";
const BusinessSection = () => {
  // initialize hooks
  const dispatch = useDispatch();
  // get state from store
  const business = useSelector((state) => state.business);
  // useEffect
  useEffect(() => {
    dispatch(getBusinesses(1, 8, "", "", "", "", "", ""));
  }, []);
  return (
    <section id="box-link2" className="section-style">
      <div className="container page-builder-ltr mt-4">
        <div className="row row-style row_a2">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 col_1bi4  col-style block block_5 title_neo2">
            <div className="module so-listing-tabs-ltr default-nav clearfix img-float label-1 home-lt1">
              <div className="form-group clearfix index-surplus">
                <Link
                  className="title-category d-flex justify-content-between align-items-center"
                  to="/business"
                >
                  <span className="mb-1"> Business</span>
                </Link>
              </div>

              <div className="modcontent">
                <div className="products-list">
                  {business.loading === true ? (
                    <div className="d-block overflow-hidden ">
                      {["", "", "", "", "", "", "", ""].map((item, i) => (
                        <div
                          className="col-lg-3 col-md-4 col-sm-4 col-xs-12 p-3 d-flex justify-content-center align-items-center"
                          key={"surplus-skeleton" + i}
                        >
                          <Skeleton count={1} width="240px" height="300px" />
                        </div>
                      ))}
                    </div>
                  ) : business.businesses.length === 0 ? (
                    <div className="index-page-empty-text">
                      <h5>0 Surplus found</h5>
                    </div>
                  ) : null}

                  {business.loading === false && business.businesses.length > 0
                    ? business.businesses.map((busin) => (
                        <Ad
                          key={busin._id}
                          sur={busin}
                          type="business"
                          cssStyle="ltabs-item col-lg-3 col-md-4 col-sm-6 col-xs-6"
                        />
                      ))
                    : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default React.memo(BusinessSection);
