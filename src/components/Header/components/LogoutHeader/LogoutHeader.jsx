import React from "react";
import clsx from "clsx";
import style from './logoutheader.module.scss';
import authApi from "../../../../api/authApi";
import { useDispatch } from "react-redux";
import { removeUser } from "../../../../app/userSlice";
const LogoutHeader = ({className}) => {
    const dispatch = useDispatch();
    const handleClickLogout = async()=>{
        window.localStorage.removeItem("token");
        await authApi.logout();
        dispatch(removeUser())
        window.location.reload();
      }
  return (
    <div className={clsx(style.fLogout , className)} onClick={handleClickLogout}>
      <span>Đăng Xuất</span>
    </div>
  );
};

export default LogoutHeader;
