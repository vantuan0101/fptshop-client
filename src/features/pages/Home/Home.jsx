import clsx from "clsx";
import React from "react";
import style from "./home.module.scss";

import QCImgae from "./../../../assets/image/637942216677907682_F-H7_1200x100.webp";
import Catelogy from "./components/catelogy/Catelogy";
import HotSale from "./components/Product/HotSale/HotSale";
import Sale from "./components/Sale/Sale";
import HotProduct  from "./components/Product/HotProduct/HotProduct";
const Home = () => {
  
  return (
    <>
      
      <div className={clsx(style.home)}>
        <Sale />
        <Catelogy />
        <div className={clsx(style.home_qc)}>
          <img src={QCImgae} alt="QCImgae" />
        </div>
        <HotSale />
        <HotProduct nameHotProduct="Điện thoại" pathProduct="dien-thoai"/>
        <HotProduct nameHotProduct="Laptop" pathProduct="laptop"/>
        <HotProduct nameHotProduct="Desktop" pathProduct="desktop"/>
        <HotProduct nameHotProduct="Máy tính bảng" pathProduct="may-tinh-bang"/>
      </div>
    </>
  );
};

export default Home;
