import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderField = ({
  children,
  className,
  dots = false,
  slidesToShow = 1,
}) => {
  const settings = {
    dots,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    infinite: true,
    speed: 500,
    slidesToShow,
    slidesToScroll: slidesToShow,
    arrows: true,

    responsive: [
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          dots,
          slidesToShow: 1,
          slidesToScroll: 1,
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
