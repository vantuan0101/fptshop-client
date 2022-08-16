import React, { useState } from "react";
import style from "./sidebar.module.scss";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { FaAngleUp } from "react-icons/fa";
const SideBar = ({ item }) => {
  const [show, setShow] = useState({
    status: false,
    id: null,
  });
  const handleClickBarMobile = (id) => {
    setShow((prev) => ({ status: !prev.status, id }));
  };
  // console.log(show);
  return (
    <>
      <li className={clsx(style.fMenuItem)}>
        <div className={clsx(style.fMenuShow)}>
          <Link to={`/${item.path}`}>{item.name}</Link>
          <div
            onClick={() => handleClickBarMobile(item.id)}
            style={{
              transform: show.id === item.id && show.status ? "rotateX(180deg)" : "rotateX(0deg)",
            }}
          >
            <FaAngleUp />
          </div>
        </div>
        <div
          className={clsx(
            style.fMenuMore,
            show.id === item.id && show.status ? style.isOpen : ""
          )}
        >
          <div>
            {item.catelogy?.map((catedetails, index) => (
              <div key={index}>
                <p>{catedetails.name}</p>
                <ul>
                  {catedetails?.details.map((cate, index) => (
                    <li key={index}>
                      <Link to={`/${item.path}/${cate?.path}`}>
                        {cate.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </li>
    </>
  );
};

export default SideBar;
