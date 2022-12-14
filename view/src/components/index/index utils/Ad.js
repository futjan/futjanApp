import React from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useSelector } from "react-redux";
import "react-lazy-load-image-component/src/effects/blur.css";
import fileURL from "../../../utils/fileURL";
import capitalizeFirstLetter from "../../../utils/captilizeFirstLetter";
import Skeleton from "react-loading-skeleton";

const Ad = (props) => {
  const currency = useSelector((state) => state.currency);
  switch (props.type) {
    case "surplus":
      return (
        <>
          {props &&
          props.type === "surplus" &&
          props.sur &&
          Object.keys(props.sur).length > 0 ? (
            <div
              className={
                props.cssStyle
                  ? props.cssStyle
                  : "ltabs-item col-lg-3 col-md-4 col-sm-6 col-xs-12"
              }
            >
              <div className="item-inner product-layout transition product-grid">
                <div className="product-item-container">
                  <div className="left-block">
                    <div className="image product-image-container ad-image-container">
                      <Link
                        to={`/surplus-detail/${props.sur._id}`}
                        title="Lorem Ipsum dolor at vero eos et iusto odi  with Premium "
                      >
                        <LazyLoadImage
                          alt={props.sur.title}
                          effect="blur"
                          src={fileURL(props.sur.images && props.sur.images[0])}
                          height="242px"
                          width="100%"
                        />
                      </Link>
                    </div>
                    {props.sur.discount && props.sur.discount > 0 ? (
                      <div className="box-label">
                        <span className="label-product label-sale">Sale</span>
                      </div>
                    ) : null}
                  </div>
                  <div className="right-block">
                    <div className="caption">
                      <h4 style={{ marginBottom: "0", marginTop: "3px" }}>
                        <Link
                          to={`/surplus-detail/${props.sur._id}`}
                          className="d-flex justify-content-flexstart lign-items-center"
                        >
                          {props.sur.title && props.sur.title.length > 50
                            ? capitalizeFirstLetter(
                                props.sur.title.substring(0, 50) + "..."
                              )
                            : props.sur.title &&
                              capitalizeFirstLetter(props.sur.title)}
                        </Link>
                      </h4>
                      <div>
                        <i className="fa fa-tasks"></i>
                        <small>
                          {props.sur.category &&
                            capitalizeFirstLetter(props.sur.category)}
                        </small>
                      </div>
                      <div>
                        <i className="fa fa-map-marker"></i>
                        <small>
                          {props.sur.city &&
                            capitalizeFirstLetter(props.sur.city)}
                        </small>
                      </div>
                      <div className="total-price clearfix">
                        <div className="price price-left d-block">
                          {props.sur.originalPrice &&
                          props.sur.offeredPrice > 0 ? (
                            <span className="price-new">
                              {currency.loading !== false ? (
                                <Skeleton height="15px" width="150px" />
                              ) : (
                                `${currency.symbol} ${
                                  props.sur &&
                                  props.sur.currency === currency.symbol
                                    ? props.sur.offeredPrice.toFixed(2)
                                    : (
                                        props.sur.offeredPrice * currency.rate
                                      ).toFixed(2)
                                }`
                              )}{" "}
                            </span>
                          ) : (
                            <span className="price-new">
                              {currency.loading !== false ? (
                                <Skeleton height="15px" width="150px" />
                              ) : (
                                `${currency.symbol} ${
                                  props.sur &&
                                  props.sur.currency === currency.symbol
                                    ? props.sur.originalPrice.toFixed(2)
                                    : (
                                        props.sur.originalPrice * currency.rate
                                      ).toFixed(2)
                                }
                           `
                              )}
                            </span>
                          )}{" "}
                          {props.sur.originalPrice &&
                          props.sur.offeredPrice > 0 ? (
                            <span className="price-old">
                              {currency.loading !== false ? (
                                <Skeleton height="15px" width="150px" />
                              ) : (
                                `
                            
                            ${currency.symbol} ${
                                  props.sur &&
                                  props.sur.currency === currency.symbol
                                    ? props.sur.originalPrice.toFixed(2)
                                    : (
                                        props.sur.originalPrice * currency.rate
                                      ).toFixed(2)
                                }`
                              )}
                            </span>
                          ) : null}
                        </div>
                        {props.sur.discount && props.sur.discount > 0 ? (
                          <div className="price-sale price-right">
                            <span className="discount">
                              -{props.sur.discount}%<strong>OFF</strong>
                            </span>
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </>
      );
    case "job":
      return (
        <>
          {props &&
          props.type === "job" &&
          props.job &&
          Object.keys(props.job).length > 0 ? (
            <div
              className={
                props.cssStyle
                  ? props.cssStyle
                  : "ltabs-item col-lg-3 col-md-4 col-sm-6 col-xs-12"
              }
            >
              <div className="item-inner product-layout transition product-grid">
                <div className="product-item-container">
                  <div className="left-block">
                    <div className="image product-image-container ad-image-container">
                      <Link
                        to={`/job-detail/${props.job._id}`}
                        title="Lorem Ipsum dolor at vero eos et iusto odi  with Premium "
                      >
                        <LazyLoadImage
                          alt={props.job.title}
                          effect="blur"
                          src={fileURL(props.job.images && props.job.images[0])}
                          height="242px"
                          width="100%"
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="right-block">
                    <div className="caption">
                      <h4 style={{ marginBottom: "0", marginTop: "3px" }}>
                        <Link
                          to={`/job-detail/${props.job._id}`}
                          className="d-flex align-items-center justify-content-flexstart"
                        >
                          {props.job.title && props.job.title.length > 50
                            ? capitalizeFirstLetter(
                                props.job.title.substring(0, 50) + "..."
                              )
                            : props.job.title &&
                              capitalizeFirstLetter(props.job.title)}
                        </Link>
                      </h4>
                      <div>
                        <i className="fa fa-briefcase"></i>
                        <small>
                          {props.job.subCategory &&
                            capitalizeFirstLetter(props.job.subCategory)}
                        </small>
                      </div>
                      <div>
                        <i className="fa fa-map-marker"></i>
                        <small>
                          {props.job.city &&
                            capitalizeFirstLetter(props.job.city)}
                        </small>
                      </div>
                      <div style={{ height: "35px", lineHeight: "12px" }}>
                        <i className="fa fa-money"></i>
                        <small>
                          {props.job.minSalary * currency.rate > 0 &&
                          props.job.maxSalary * currency.rate > 0
                            ? ` ${props.job && currency.symbol} ${
                                props.job.currency === currency.symbol
                                  ? props.job.minSalary.toFixed(2)
                                  : (
                                      props.job.minSalary * currency.rate
                                    ).toFixed(2)
                              } - ${
                                props.job.currency === currency.symbol
                                  ? props.job.maxSalary.toFixed(2)
                                  : (
                                      props.job.maxSalary * currency.rate
                                    ).toFixed(2)
                              } / ${props.job.salaryType}
                              `
                            : props.job.salaryType}
                        </small>
                      </div>

                      <div className="clearfix" style={{ minHeight: "35px" }}>
                        <span className="job-type-span">
                          {props.job.type &&
                            capitalizeFirstLetter(props.job.type)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </>
      );
    case "business":
      return (
        <>
          {props &&
          props.type === "business" &&
          props.sur &&
          Object.keys(props.sur).length > 0 ? (
            <div
              className={
                props.cssStyle
                  ? props.cssStyle
                  : "ltabs-item col-lg-3 col-md-4 col-sm-6 col-xs-12"
              }
            >
              <div className="item-inner product-layout transition product-grid">
                <div className="product-item-container">
                  <div className="left-block">
                    <div className="image product-image-container ad-image-container">
                      <Link
                        to={`/business-detail/${props.sur._id}`}
                        title="Lorem Ipsum dolor at vero eos et iusto odi  with Premium "
                      >
                        <LazyLoadImage
                          alt={props.sur.title}
                          effect="blur"
                          src={fileURL(props.sur.images && props.sur.images[0])}
                          height="242px"
                          width="100%"
                        />
                      </Link>
                    </div>
                    {props.sur.discount && props.sur.discount > 0 ? (
                      <div className="box-label">
                        <span className="label-product label-sale">Sale</span>
                      </div>
                    ) : null}
                  </div>
                  <div className="right-block">
                    <div className="caption">
                      <h4 style={{ marginBottom: "0", marginTop: "3px" }}>
                        <Link
                          to={`/business-detail/${props.sur._id}`}
                          className="d-flex justify-content-flexstart align-items-center"
                        >
                          {props.sur.title && props.sur.title.length > 50
                            ? capitalizeFirstLetter(
                                props.sur.title.substring(0, 50) + "..."
                              )
                            : props.sur.title &&
                              capitalizeFirstLetter(props.sur.title)}
                        </Link>
                      </h4>
                      <div>
                        <i className="fa fa-tasks"></i>
                        <small>
                          {props.sur.businessType &&
                            capitalizeFirstLetter(props.sur.businessType)}
                        </small>
                      </div>
                      <div>
                        <i className="fa fa-map-marker"></i>
                        <small>
                          {props.sur.city &&
                            capitalizeFirstLetter(props.sur.city)}
                        </small>
                      </div>
                      <div className="total-price clearfix">
                        <div className="price price-left d-block">
                          {props.sur.offeredPrice &&
                            props.sur.offeredPrice > 0 && (
                              <span className="price-new">
                                {currency.loading !== false ? (
                                  <Skeleton height="15px" width="150px" />
                                ) : (
                                  `${currency.symbol} ${
                                    props.sur &&
                                    props.sur.currency === currency.symbol
                                      ? props.sur.offeredPrice.toFixed(2)
                                      : (
                                          props.sur.offeredPrice * currency.rate
                                        ).toFixed(2)
                                  }`
                                )}{" "}
                              </span>
                            )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </>
      );
    default:
      return null;
  }
  return <>{}</>;
};
export default React.memo(Ad);
