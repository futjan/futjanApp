import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import surplusImageSkeleton from "../image/catalog/demo/food/1.jpg";
import { getSurplusById } from "../actions/surplusAction";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./skeleton.css";

function DetailSurplus() {
  // initialize hooks
  const dispatch = useDispatch();
  const surplusFromStore = useSelector((state) => state.surplus);
  console.log(surplusFromStore.surplus);
  // useEffect
  useEffect(() => {
    dispatch(getSurplusById(params.id));
  }, []);
  const params = useParams();
  console.log(params.id);
  return (
    <div class="container product-detail" style={{ marginTop: "30px" }}>
      <div class="row">
        <div id="content" class="col-md-12 col-sm-12 col-xs-12">
          <div class="product-view product-detail">
            <div class="product-view-inner clearfix">
              {surplusFromStore.loading === true ? (
                <div className="content-product-left  col-md-5 col-sm-6 col-xs-12">
                  <Skeleton count={1} className="skeleton-card-detail" />
                </div>
              ) : (
                <div class="content-product-left  col-md-5 col-sm-6 col-xs-12">
                  <div class="large-image  class-honizol">
                    <div class="box-label"></div>
                    <img
                      class="product-image-zoom"
                      src={surplusImageSkeleton}
                      data-zoom-image="image/catalog/demo/product/electronic/27.jpg"
                      title="Canada Travel One or Two European Facials at  Studio"
                      alt="Canada Travel One or Two European Facials at  Studio"
                    />
                  </div>
                </div>
              )}

              {surplusFromStore.loading === true ? (
                <div className="content-product-right col-md-7 col-sm-6 col-xs-12">
                  <Skeleton count={1} className="skeleton-p" />
                  <Skeleton count={1} className="skeleton-price-detail" />
                  <br />
                  <Skeleton count={1} className="skeleton-price-detail" />
                  <Skeleton count={1} className="skeleton-price-detail" />

                  <br />
                  <br />
                  <Skeleton count={1} className="skeleton-price-detail" />
                  <Skeleton count={1} className="skeleton-price-detail" />
                  <Skeleton count={1} className="skeleton-price-detail" />
                  <Skeleton count={1} className="skeleton-price-detail" />
                  <Skeleton count={1} className="skeleton-price-detail" />
                </div>
              ) : (
                <div class="content-product-right col-md-7 col-sm-6 col-xs-12">
                  <div class="countdown_box">
                    <div class="countdown_inner">
                      <div class="Countdown-1"></div>
                    </div>
                  </div>
                  <div class="title-product">
                    {surplusFromStore.surplus &&
                      surplusFromStore.surplus.name && (
                        <h1>{surplusFromStore.surplus.name}</h1>
                      )}
                  </div>
                  <div class="box-review">
                    <div class="rating">
                      <div class="rating-box">
                        <span class="fa fa-stack">
                          <i class="fa fa-star-o fa-stack-1x"></i>
                        </span>
                        <span class="fa fa-stack">
                          <i class="fa fa-star-o fa-stack-1x"></i>
                        </span>
                        <span class="fa fa-stack">
                          <i class="fa fa-star-o fa-stack-1x"></i>
                        </span>
                        <span class="fa fa-stack">
                          <i class="fa fa-star-o fa-stack-1x"></i>
                        </span>
                        <span class="fa fa-stack">
                          <i class="fa fa-star-o fa-stack-1x"></i>
                        </span>
                      </div>
                    </div>
                    <a
                      class="reviews_button"
                      // onclick="$('a[href=\'#tab-review\']').trigger('click'); return false;"
                    >
                      0 reviews
                    </a>{" "}
                    /{" "}
                    <a
                      class="write_review_button"
                      // onclick="$('a[href=\'#tab-review\']').trigger('click'); return false;"
                    >
                      Write a review
                    </a>
                  </div>
                  <div
                    class="product_page_price price"
                    itemscope=""
                    itemtype="http://data-vocabulary.org/Offer"
                  >
                    <span class="price-new">
                      {surplusFromStore.surplus.originalPrice &&
                      surplusFromStore.surplus.offeredPrice > 0 ? (
                        <span id="price-special">
                          ${surplusFromStore.surplus.offeredPrice}
                        </span>
                      ) : (
                        <span id="price-special">
                          ${surplusFromStore.surplus.originalPrice}
                        </span>
                      )}
                    </span>
                    {surplusFromStore.surplus.originalPrice &&
                    surplusFromStore.surplus.offeredPrice > 0 ? (
                      <span class="price-old" id="price-old">
                        ${surplusFromStore.surplus.originalPrice}
                      </span>
                    ) : null}
                    <div class="price-tax">
                      <span>Ex Tax:</span> $70.00
                    </div>
                  </div>
                  <div class="product-box-desc">
                    <div class="inner-box-desc">
                      <div class="model">
                        <span>Category: </span>{" "}
                        {surplusFromStore.surplus &&
                          surplusFromStore.surplus.category}
                      </div>
                      <div class="model">
                        <span>Type: </span>{" "}
                        {surplusFromStore.surplus &&
                          surplusFromStore.surplus.businessType}
                      </div>
                      <div class="model">
                        <span>Company: </span>{" "}
                        {surplusFromStore.surplus &&
                          surplusFromStore.surplus.company}
                      </div>
                      <div class="model">
                        <span>Product Code: </span>{" "}
                        {surplusFromStore.surplus &&
                          surplusFromStore.surplus.postCode}
                      </div>
                      <div class="model">
                        <span>City: </span>{" "}
                        {surplusFromStore.surplus &&
                          surplusFromStore.surplus.city}
                      </div>
                      <div class="model">
                        <span>Country: </span>{" "}
                        {surplusFromStore.surplus &&
                          surplusFromStore.surplus.country}
                      </div>
                      <div class="model">
                        <span>Contact: </span>{" "}
                        {surplusFromStore.surplus &&
                          surplusFromStore.surplus.contact}
                      </div>

                      {/* <div class="stock">
                     <span>Availability:</span>{" "}
                     <i class="fa fa-check-square-o"></i>In Stock
                   </div> */}
                    </div>
                  </div>
                  <div class="short_description form-group">
                    <h3>OverView</h3>
                  </div>
                  <div id="product">
                    <div class="box-cart clearfix">
                      <div class="form-group box-info-product">
                        <div class="option quantity">
                          {/* <div class="input-group quantity-control" unselectable="on" style="user-select: none;">
               <input class="form-control" type="text" name="quantity" value="1">
               <input type="hidden" name="product_id" value="108">
               <span class="input-group-addon product_quantity_down fa fa-caret-down"></span>
               <span class="input-group-addon product_quantity_up fa fa-caret-up"></span>
              </div>
             </div> */}
                          {/* <div class="cart">
              <input type="button" value="Add to Cart" class="addToCart btn btn-mega btn-lg " data-toggle="tooltip" title="" onclick="cart.add('30');" data-original-title="Add to cart"/>
             </div> */}
                          <div class="add-to-links wish_comp">
                            <ul class="blank">
                              <li class="wishlist">
                                <a onclick="wishlist.add(108);">
                                  <i class="fa fa-heart"></i>
                                </a>
                              </li>
                              <li class="compare">
                                <a onclick="compare.add(108);">
                                  <i class="fa fa-random"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="clearfix"></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default DetailSurplus;
