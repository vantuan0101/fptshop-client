import clsx from "clsx";
import React from "react";
import { AiFillDatabase, AiOutlineUser } from "react-icons/ai";
import style from "./sidebaradmin.module.scss";
const SideBarAdmin = () => {
  return (
    <div className={clsx(style.sidebar)}>
      <div className={clsx(style.sidebar_header)}>
        <a href="/" className={clsx(style.logo)}>
          <i></i>
        </a>
      </div>
      <ul className={clsx(style.sidebar_menu)}>
        <a href="/accounts/admin/users">
          <AiOutlineUser />
          <span>Quản lý người dùng</span>
        </a>
        <a href="/accounts/admin/catelogies">
          <AiFillDatabase />
          <span>Quản lý catelogies</span>
        </a>
        <a href="/accounts/admin/dien-thoai">
          <AiFillDatabase />
          <span>Quản lý điện thoại</span>
        </a>
        <a href="/accounts/admin/may-tinh-bang">
          <AiFillDatabase />
          <span>Quản lý máy tính bảng</span>
        </a>
        <a href="/accounts/admin/desktop">
          <AiFillDatabase />
          <span>Quản lý Desktop</span>
        </a>
        <a href="/accounts/admin/laptop">
          <AiFillDatabase />
          <span>Quản lý Laptop</span>
        </a>
        <a href="/accounts/admin/phu-kien">
          <AiFillDatabase />
          <span>Quản lý Phụ kiện</span>
        </a>
      </ul>
    </div>
  );
};

export default SideBarAdmin;
