import clsx from 'clsx';
import React from "react";
import { AiOutlineBars } from "react-icons/ai";
import { Link } from "react-router-dom";
import CartField from "../../../Field/Cart/CartField";
import style from './logo.module.scss';
const LogoHeader = ({handleClickMenu}) => {
  return (
    <>
    <div className={clsx(style.fTopWrap)}>
      <div className={clsx(style.fMLogo)}>
        <div className={clsx(style.fMBar)} onClick={()=>handleClickMenu()}>
          <AiOutlineBars />
        </div>
        <Link to="/" className={clsx(style.fLogo)}>
          <i></i>
        </Link>
      </div>
      <div className={clsx(style.fMMenu)}>
        <a href="tel:+18006601" className={clsx(style.hotline)}>
          <span>Gọi Miễn Phí</span>
          <strong>1800 6611</strong>
        </a>
        <Link to="/cart" className={clsx(style.cart)}>
          <CartField />
        </Link>
      </div>
      </div>

    </>
  );
};

export default LogoHeader;
