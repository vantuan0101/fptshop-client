import React from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import saleImage from "./../../../../../assets/image/top-head-banner.webp";
import style from "./sale.module.scss";
import SliderSale from "./Slider/SliderSale";
import item1 from "./../../../../../assets/image/sale/item1.webp";
import item2 from "./../../../../../assets/image/sale/item1.webp";
import item31 from "./../../../../../assets/image/sale/item31.webp";
import item32 from "./../../../../../assets/image/sale/item32.webp";
const Sale = () => {
  return (
    <div className={clsx(style.sale)}>
      <div className={clsx(style.saleCount)}>
        <Link to="/khuyen-mai" className={clsx(style.saleCount)}>
          <img src={saleImage} alt="SaleImage" />
        </Link>
      </div>
      <div className={clsx(style.fsale)}>
        <div className={clsx(style.fsale_wrap)}>
          <div className={clsx(style.fsale_left)}>
            <SliderSale />
            <ul>
              <li>iPhone 13 Pro Max giảm đến 10 triệu</li>
              <li>Galaxy Z Fold3 | Z Flip3 giảm đến 9 triệu</li>
              <li>Redmi 10 tặng Loa Bluetooth cực xịn</li>
              <li>OPPO A95 | Reno6 Z giá chỉ 5.990.000Đ</li>
              <li>Quạt giảm cực sốc đến 50%++</li>
            </ul>
          </div>
          <div className={clsx(style.fsale_right)}>
            <div className={clsx(style.fsale_item)}>
              <img src={item1} alt="" />
            </div>
            <div className={clsx(style.fsale_item)}>
              <img src={item2} alt="" />
            </div>
            <div className={clsx(style.fsale_voucher)}>
              <div className={clsx(style.fsale_heading)}>
                <p>Thông tin nỗi bật</p>
                <Link to='/'>Xem tất cả</Link>
              </div>
              <div className={clsx(style.fsale_gift)}>
                <div>
                  <img src={item31} alt="" />
                </div>
                <p>Nhận ngay Voucher 50.000Đ</p>
              </div>
              <div className={clsx(style.fsale_gift)}>
                <div>
                  <img src={item32} alt="" />
                </div>
                <p>Xiaomi 11T Pro 256GB tặng Coolpad</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sale;
