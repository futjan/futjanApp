import React from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "./index utils/slider.css";
import Slide1 from "../image/slide1.jpeg";
import Slide2 from "../image/slide2.jpeg";
import Slide3 from "../image/slide3.jpeg";

const Slider1 = () => {
  return (
    <Slider
      infinite={true}
      autoplay={3000}
      className="slider-wrapper"
      // nextButton={<h3>{">"}</h3>}
    >
      {[Slide1, Slide2, Slide3].map((item, index) => (
        <div
          key={index}
          className="slider-content"
          style={{
            background: `url(${item}) no-repeat center center`,
            width: "100%",
            height: "400px",
          }}
        ></div>
      ))}
    </Slider>
  );
};
export default React.memo(Slider1);
