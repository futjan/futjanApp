import React, { useEffect } from "react";

import { getSurpluses } from "../../actions/surplusAction";
import { useDispatch, useSelector } from "react-redux";
import Skeleton from "react-loading-skeleton";
import Ad from "../index utils/Ad";
import { Link } from "react-router-dom";
const SurplusSection = () => {
  // initialize hooks
  const dispatch = useDispatch();
  // get state from store
  const surplus = useSelector((state) => state.surplus);
  // useEffect
  useEffect(() => {
    dispatch(getSurpluses(1, 8, "", "", "", "", "", "", "", ""));
  }, []);
  return (
    <section id="box-link2" className="section-style">
      <div className="container page-builder-ltr mt-4">
        <div className="row row-style row_a2">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 col_1bi4  col-style block block_5 title_neo2">
            <div className="module so-listing-tabs-ltr default-nav clearfix img-float label-1 home-lt1">
              <div className="form-group clearfix index-surplus">
                <Link
                  className="title-category "
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                  to="/surplus"
                >
                  <span style={{ marginBottom: "5px" }}> Surplus</span>
                </Link>
              </div>

              <div className="modcontent">
                <div className="products-list">
                  {surplus.loading === true ? (
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
                  ) : surplus.surpluses.length === 0 ? (
                    <div className="index-page-empty-text">
                      <h5>0 Surplus found</h5>
                    </div>
                  ) : null}

                  {surplus.loading === false && surplus.surpluses.length > 0
                    ? surplus.surpluses.map((sur) => (
                        <Ad
                          key={sur._id}
                          sur={sur}
                          type="surplus"
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
export default React.memo(SurplusSection);
