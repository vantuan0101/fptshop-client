import clsx from "clsx";
import React from "react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import SliderField from "../../../../../../components/Slider/Slider";
import slider1 from "./../../../../../../assets/image/sale/slider1.webp";
import slider2 from "./../../../../../../assets/image/sale/slider2.webp";
import slider3 from "./../../../../../../assets/image/sale/slider3.webp";
import slider4 from "./../../../../../../assets/image/sale/slider4.webp";
import style from "./sliderSale.module.scss";
const SliderSale = () => {
  return (
    <SliderField className={clsx(style.slider)} slidesToShow={1}>
      <div className={clsx(style.sliderItem)}>
        <img src={slider1} alt="slider 1" />
      </div>
      <div className={clsx(style.sliderItem)}>
        <img src={slider2} alt="slider 1" />
      </div>
      <div className={clsx(style.sliderItem)}>
        <img src={slider3} alt="slider 1" />
      </div>
      <div className={clsx(style.sliderItem)}>
        <img src={slider4} alt="slider 1" />
      </div>
    </SliderField>
  );
};

export default SliderSale;
