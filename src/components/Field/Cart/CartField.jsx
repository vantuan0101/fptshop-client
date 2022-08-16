import React from "react";
import style from './cartField.module.scss';
import clsx from "clsx";
import {
    AiFillShopping
} from "react-icons/ai";

const CartField = () => {
   
  return (
    <>
      <AiFillShopping />
      <span className={clsx(style.cart)}>Giỏ hàng</span>
    </>
  );
};

export default CartField;
