import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderField = ({ children, className, dots = false, slidesToShow }) => {
  const settings = {
    dots,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow || 4,
    slidesToScroll: slidesToShow || 4,
    arrows: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: slidesToShow || 3,
          slidesToScroll: slidesToShow || 3,
          infinite: true,
          dots,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: slidesToShow || 2,
          slidesToScroll: slidesToShow || 2,
          initialSlide: slidesToShow || 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          dots,
          slidesToShow: slidesToShow || 1,
          slidesToScroll: slidesToShow || 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings} className={className}>
      {children}
    </Slider>
  );
};

export default SliderField;
