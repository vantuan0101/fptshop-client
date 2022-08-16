import React, { useEffect, useState } from "react";
import SliderField from "../../../../../../components/Slider/Slider";
import clsx from "clsx";
import style from "./hotsale.module.scss";
import productApi from "../../../../../../api/productApi";
import { Link } from "react-router-dom";

const HotSale = () => {
  const [productHotSale, setProductHotSale] = useState([]);
  useEffect(() => {
    productApi.getHotSale().then((res) => setProductHotSale(res.data));
  }, []);
  // console.log(productHotSale);

  return (
    <div className={clsx(style.contain)}>
      <div className={clsx(style.heading)}>Khuyến mãi Hot</div>
      <SliderField className={style.HotSale} slidesToShow={4}>
        {productHotSale?.map((product, index) => {
          return (
            <Link to="/" className={clsx(style.sliderItem)} key={index}>
              <div className={clsx(style.sliderWrap)}>
                <div className={clsx(style.sliderImage)}>
                  <img src={product.thumbnail.url} alt={product.name} />
                </div>
                <div className={clsx(style.sliderName)}>{product.name}</div>
                <div className={clsx(style.sliderPrice)}>
                  <div>
                    {product.price - product.discountValue} ₫
                    <div
                      className={clsx(style.progress_bar)}
                      style={{ width: "70%" }}
                    ></div>
                  </div>
                  <div>{product.price} ₫</div>
                </div>
                <div className={clsx(style.sliderPayment)}>
                  {product.payment}
                </div>
              </div>
            </Link>
          );
        })}
      </SliderField>
    </div>
  );
};

export default HotSale;
