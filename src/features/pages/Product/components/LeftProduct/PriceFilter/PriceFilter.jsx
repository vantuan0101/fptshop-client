import React from "react";
import clsx from "clsx";
import style from "../filter.module.scss";
const PriceFilter = ({ handleLeftFilter }) => {
  const priceList = [
    {
      name: "Dưới 2 triệu",
      value: "duoi-2-trieu",
    },
    {
      name: "Từ 2 - 4 triệu",
      value: "tu-2-4-trieu",
    },
    {
      name: "Từ 4 - 7 triệu",
      value: "tu-4-7-trieu",
    },
    {
      name: "Từ 7 - 13 triệu",
      value: "tu-7-13-trieu",
    },
    {
      name: "Trên 13 - 20 triệu",
      value: "tren-13-trieu",
    },
  ];
  return (
    <div className={clsx(style.main)}>
      <h3>Mức Giá</h3>
      <ul className={clsx(style.list)}>
        {priceList?.map((item) => (
          <li key={item.value} className={clsx(style.items)}>
            <input
              type="checkbox"
              value={item.value}
              id={item.value}
              onChange={(e) => handleLeftFilter(e, "muc-gia")}
            />
            <label htmlFor={item.value}>{item.name}</label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PriceFilter;
