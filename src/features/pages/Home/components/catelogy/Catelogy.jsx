import React from "react";
import { useSelector } from "react-redux";
import clsx from "clsx";
import style from "./catelogy.module.scss";
const Catelogy = () => {
  const catelogyList = useSelector((state) => state.apiCatelogy);
  const catelogyListRender = catelogyList.categoryList.data;
  // console.log(catelogyList.categoryList.data);
  return (
    <div className={clsx(style.contain)}>
      <ul className={clsx(style.catelogy)}>
        {catelogyListRender?.map((item) => (
          <li key={item.id} className={clsx(style.catelogy_item)}>
            <div>
              <img src={item.imageIcon} alt={item.name} />
            </div>
            <div>{item.name}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Catelogy;
