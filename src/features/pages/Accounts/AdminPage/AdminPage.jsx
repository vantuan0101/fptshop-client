import clsx from "clsx";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import style from "./adminpage.module.scss";
import HeaderAdmin from './components/HeaderAdmin/HeaderAdmin';
import SideBarAdmin from './components/SideBarAdmin/SideBarAdmin';
const AdminPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClickOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={clsx(style.contain)}>
      <div className={clsx(style.sidebar)}>{!isOpen && <SideBarAdmin />}</div>
      <div className={clsx(style.main)}>
        <HeaderAdmin isOpen={isOpen} handleClickOpen={handleClickOpen} />
        <Outlet />
      </div>
    </div>
  );
};

export default AdminPage;
