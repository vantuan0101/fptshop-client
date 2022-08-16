import React from "react";
import SliderField from "../../../../../components/Slider/Slider";
import item1 from "./../../../../..//assets/image/product/item1.webp";
import item2 from "./../../../../..//assets/image/product/item2.webp";
import item3 from "./../../../../..//assets/image/product/item3.webp";
import item4 from "./../../../../..//assets/image/product/item4.webp";
import item5 from "./../../../../..//assets/image/product/item5.webp";
import clsx from "clsx";
import style from "./silderproduct.module.scss";
const SilderProduct = () => {
  return (
    <div className={clsx(style.banner)}>
      <SliderField>
        <div className={clsx(style.banner_item)}>
          <img src={item1} alt="item1" />
        </div>
        <div className={clsx(style.banner_item)}>
          <img src={item2} alt="item2" />
        </div>
        <div className={clsx(style.banner_item)}>
          <img src={item3} alt="item3" />
        </div>
        <div className={clsx(style.banner_item)}>
          <img src={item4} alt="item4" />
        </div>
        <div className={clsx(style.banner_item)}>
          <img src={item5} alt="item5" />
        </div>
      </SliderField>
    </div>
  );
};

export default SilderProduct;
