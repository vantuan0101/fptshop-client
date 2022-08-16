import clsx from "clsx";
import React from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useSelector } from "react-redux";
import style from "./headeradmin.module.scss";
const HeaderAdmin = ({isOpen ,handleClickOpen}) => {
  const { first_name, last_name ,avatar } = useSelector((state) => state.user.user);
  const urlAvatar = JSON.parse(avatar)
  // console.log(urlAvatar)
  return (
    <div className={clsx(style.contain)}>
      <div className={clsx(style.header)}>
        <div onClick={handleClickOpen}>
          {isOpen ? <AiOutlineMenu /> : <AiOutlineClose />}
        </div>

        <div className={clsx(style.account)}>
          <div className={clsx(style.avatar)}>
            <img
              src={urlAvatar.url}
              alt="avatar"
            />
          </div>
          <div className={clsx(style.name)}>{last_name} {first_name}</div>
        </div>
      </div>
    </div>
  );
};

export default HeaderAdmin;
