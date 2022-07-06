import React from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import fileURL from "../../../utils/fileURL";
import capitalizeFirstLetter from "../../../utils/captilizeFirstLetter";

const Ad = (props) => {
  return (
    <>
      {props &&
      props.type === "surplus" &&
      props.sur &&
      Object.keys(props.sur).length > 0 ? (
        <div className="ltabs-item col-lg-3 col-md-4 col-sm-4 col-xs-12">
          <div className="item-inner product-layout transition product-grid">
            <div className="product-item-container">
              <div className="left-block">
                <div
                  className="image product-image-container "
                  style={{ height: "210px", overflow: "hidden" }}
                >
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
                  <h4>
                    <Link to={`/surplus-detail/${props.sur._id}`}>
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
                      {props.sur.city && capitalizeFirstLetter(props.sur.city)}
                    </small>
                  </div>
                  <div className="total-price clearfix">
                    <div className="price price-left">
                      {props.sur.originalPrice && props.sur.offeredPrice > 0 ? (
                        <span className="price-new">
                          {props.sur && props.sur.currency}{" "}
                          {props.sur.offeredPrice}
                        </span>
                      ) : (
                        <span className="price-new">
                          {props.sur && props.sur.currency}
                          {props.sur.originalPrice}
                        </span>
                      )}{" "}
                      {props.sur.originalPrice && props.sur.offeredPrice > 0 ? (
                        <span className="price-old">
                          {props.sur && props.sur.currency}{" "}
                          {props.sur.originalPrice}
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

      {props &&
      props.type === "job" &&
      props.job &&
      Object.keys(props.job).length > 0 ? (
        <div className="ltabs-item col-lg-3 col-md-4 col-sm-4 col-xs-12">
          <div className="item-inner product-layout transition product-grid">
            <div className="product-item-container">
              <div className="left-block">
                <div
                  className="image product-image-container "
                  style={{ height: "210px", overflow: "hidden" }}
                >
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
                  <h4>
                    <Link to={`/job-detail/${props.job._id}`}>
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
                    <i className="fa fa-money"></i>
                    <small>
                      {props.job.minSalary > 0 && props.job.maxSalary > 0
                        ? ` ${props.job && props.job.currency} ${
                            props.job.minSalary
                          } - ${props.job.maxSalary} / ${props.job.salaryType}`
                        : props.job.salaryType}
                    </small>
                  </div>

                  <div className="clearfix" style={{ minHeight: "35px" }}>
                    <span className="job-type-span">
                      {props.job.type && capitalizeFirstLetter(props.job.type)}
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
};
export default React.memo(Ad);
