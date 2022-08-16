import clsx from "clsx";
import React from "react";
import { useSelector } from "react-redux";
import style from "./userpage.module.scss";
const UserPage = () => {
  const { first_name, last_name } = useSelector((state) => state.user.user);
  return (
    <div className={clsx(style.contain)}>
      <div className={clsx(style.name)}>
        <h3 style={{marginTop : '100px'}}>
          Xin chào {last_name} {first_name}
        </h3>
      </div>
    </div>
  );
};

export default UserPage;
