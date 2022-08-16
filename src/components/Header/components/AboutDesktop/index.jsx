import clsx from "clsx";
import React from "react";
import { AiFillFile, AiFillMoneyCollect } from "react-icons/ai";
import { Link } from "react-router-dom";
import CartField from "../../../Field/Cart/CartField";
import LoginHeader from "../LoginHeader/LoginHeader";
import LogoutHeader from "../LogoutHeader/LogoutHeader";
import style from "./aboutDesktop.module.scss";
const AboutDesktop = () => {
  return (
    <div className={clsx(style.fInfo)}>
      <Link to="/news">
        <AiFillFile />
        <span>Thông tin hay</span>
      </Link>
      <Link to="services">
        <AiFillMoneyCollect />
        <span>Thanh toán & tiện ích</span>
      </Link>
      <LoginHeader />
      <LogoutHeader className={clsx(style.fLogout)}/>
      <Link to="/carts">
        <CartField />
      </Link>
    </div>
  );
};

export default AboutDesktop;
