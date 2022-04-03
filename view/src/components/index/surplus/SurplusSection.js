import React, { useEffect } from "react";
// import spa1 from "../../image/catalog/demo/product/spa/5-270x270.jpg";
import { Link } from "react-router-dom";
import { getSurpluses } from "../../actions/surplusAction";
import { useDispatch, useSelector } from "react-redux";
import fileURL from "../../../utils/fileURL";
import capitalizeFirstLetter from "../../../utils/captilizeFirstLetter";
import "react-loading-skeleton/dist/skeleton.css";
import Skeleton from "react-loading-skeleton";
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
      <div className="container page-builder-ltr" style={{ marginTop: "20px" }}>
        <div className="row row-style row_a2">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 col_1bi4  col-style block block_5 title_neo2">
            <div className="module so-listing-tabs-ltr default-nav clearfix img-float label-1 home-lt1">
              <div className="head-title font-ct">
                <h2 className="modtitle">Surplus</h2>
              </div>
              <div className="modcontent">
                <div>
                  {surplus.loading === true ? (
                    <div style={{ display: "block", overflow: "hidden" }}>
                      {["", "", "", "", "", "", "", ""].map((item) => (
                        <div
                          className="col-lg-3 col-md-4 col-sm-4 col-xs-12"
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            padding: "15px",
                          }}
                        >
                          <Skeleton count={1} width="240px" height="300px" />
                        </div>
                      ))}
                    </div>
                  ) : surplus.surpluses.length === 0 ? (
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        minHeight: "300px",
                        textShadow: "0px 2px 8px rgb(0 0 0 / 30%)",
                      }}
                    >
                      <h5>0 Surplus found</h5>
                    </div>
                  ) : null}

                  {surplus.loading === false && surplus.surpluses.length > 0
                    ? surplus.surpluses.map((sur) => (
                        <div className="ltabs-item col-lg-3 col-md-4 col-sm-4 col-xs-12">
                          <div className="item-inner product-layout transition product-grid">
                            <div className="product-item-container">
                              <div className="left-block">
                                <div className="image product-image-container ">
                                  <Link
                                    to={`/surplus-detail/${sur._id}`}
                                    title="Lorem Ipsum dolor at vero eos et iusto odi  with Premium "
                                  >
                                    <img
                                      src={fileURL(sur.images && sur.images[0])}
                                      alt="Anantara Dhigu Resort &amp;amp; Spa, Maldives Hair Spa"
                                    />
                                  </Link>
                                </div>
                                {sur.discount && sur.discount > 0 ? (
                                  <div className="box-label">
                                    <span className="label-product label-sale">
                                      Sale
                                    </span>
                                  </div>
                                ) : null}
                              </div>
                              <div className="right-block">
                                <div className="caption">
                                  <h4>
                                    <Link to={`/surplus-detail/${sur._id}`}>
                                      {sur.name && sur.name.length > 50
                                        ? capitalizeFirstLetter(
                                            sur.name.substring(0, 50) + "..."
                                          )
                                        : sur.name &&
                                          capitalizeFirstLetter(sur.name)}
                                    </Link>
                                  </h4>
                                  <div>
                                    <i class="fa fa-tasks"></i>
                                    <small>
                                      {sur.category &&
                                        capitalizeFirstLetter(sur.category)}
                                    </small>
                                  </div>
                                  <div>
                                    <i class="fa fa-map-marker"></i>
                                    <small>
                                      {sur.city &&
                                        capitalizeFirstLetter(sur.city)}
                                    </small>
                                  </div>
                                  <div className="total-price clearfix">
                                    <div className="price price-left">
                                      {sur.originalPrice &&
                                      sur.offeredPrice > 0 ? (
                                        <span className="price-new">
                                          ${sur.offeredPrice}
                                        </span>
                                      ) : (
                                        <span className="price-new">
                                          ${sur.originalPrice}
                                        </span>
                                      )}{" "}
                                      {sur.originalPrice &&
                                      sur.offeredPrice > 0 ? (
                                        <span className="price-old">
                                          ${sur.originalPrice}
                                        </span>
                                      ) : null}
                                    </div>
                                    {sur.discount && sur.discount > 0 ? (
                                      <div className="price-sale price-right">
                                        <span className="discount">
                                          -{sur.discount}%<strong>OFF</strong>
                                        </span>
                                      </div>
                                    ) : null}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
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
