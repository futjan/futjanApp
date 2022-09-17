import React, { useState, useMemo } from "react";
import Carousel from "react-multi-carousel";
import { LazyLoadImage } from "react-lazy-load-image-component";
import fileURL from "../../utils/fileURL";
import { useSelector } from "react-redux";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3,
  },
};

const SurplusDetailImageSection = () => {
  const [activeImage, setActiveImage] = useState(0);
  const [mapAndImage, setMapAndImage] = useState("image");
  const [zoomModal, setZoomModal] = useState(false);
  const [zoomImage, setZoomImage] = useState("");

  const surplusFromStore = useSelector((state) => state.surplus);

  const imageSlider = useMemo(
    () => (
      <Carousel responsive={responsive}>
        {surplusFromStore.surplus.images &&
          surplusFromStore.surplus.images.map((image, i) => (
            <div className="owl2-item p-1" key={i}>
              <LazyLoadImage
                effect="blur"
                src={fileURL(image)}
                className={
                  i === activeImage
                    ? "detail-page-slide active"
                    : "detail-page-slide"
                }
                onClick={() => setActiveImage(i)}
                alt={image}
              />
            </div>
          ))}
      </Carousel>
    ),
    [activeImage]
  );

  const selectedImage = useMemo(
    () => (
      <>
        <LazyLoadImage
          effect="blur"
          className="product-image-zoom"
          src={fileURL(
            surplusFromStore.surplus.images &&
              surplusFromStore.surplus.images[activeImage]
          )}
          title={surplusFromStore.surplus && surplusFromStore.surplus.title}
          alt={surplusFromStore.surplus && surplusFromStore.surplus.title}
        />
        <div
          className="image-zoom-icon-container"
          onClick={() => {
            setZoomImage(surplusFromStore.surplus.images[activeImage]);
            setZoomModal(true);
          }}
        >
          <i
            className="fa fa-search-plus"
            style={{ color: "#fff", fontSize: "18px" }}
          ></i>
        </div>
      </>
    ),
    [activeImage]
  );
  return (
    <div className="content-product-left  col-md-6 col-sm-6 col-xs-12">
      <div className="d-flex justify-content-center align-items-center w-100">
        <div
          className={
            mapAndImage === "image" || mapAndImage === "map"
              ? "image-map-tabs map"
              : "image-map-tabs"
          }
          onClick={() => setMapAndImage("image")}
        >
          Image
        </div>
        <div
          className={
            mapAndImage === "image" || mapAndImage === "map"
              ? "image-map-tabs map"
              : "image-map-tabs"
          }
          onClick={() => setMapAndImage("map")}
        >
          Map
        </div>
      </div>
      <div className="large-image  class-honizol d-flex  justify-content-center align-items-center p-4">
        {mapAndImage === "image" ? (
          selectedImage
        ) : (
          <>
            <iframe
              src="https://www.google.com/maps/d/embed?mid=1DfFcv3jAM8NAeioBjW_CHwtKL3A&ehbc=2E312F"
              width="100%"
              height="500"
            ></iframe>
          </>
        )}
      </div>
      {mapAndImage === "image" ? (
        <div
          id="thumb-slider"
          className="full_slider category-slider-inner products-list yt-content-slider"
        >
          {surplusFromStore.surplus &&
            surplusFromStore.surplus.images &&
            imageSlider}
        </div>
      ) : null}
      {zoomModal === true ? (
        <div
          className={
            zoomImage === true
              ? " zoom-modal modal-opacity-0 d-flex justify-content-center align-items-center p-2"
              : "zoom-modal modal-opacity-1 d-flex justify-content-center align-items-center p-2"
          }
        >
          <i
            className="fa fa-times image-zoom-out-btn"
            onClick={() => setZoomModal(false)}
          ></i>
          <LazyLoadImage
            effect="blur"
            src={fileURL(zoomImage)}
            alt={zoomImage}
          />
        </div>
      ) : null}
    </div>
  );
};
export default SurplusDetailImageSection;
