import clsx from "clsx";
import React, { useEffect, useState } from "react";
import brandApi from "../../../../../../api/brandApi";
import style from "../filter.module.scss";


const BrandFilter = ({ pathName , handleLeftFilter }) => {
  const [brandList, setBrandList] = useState([]);

  useEffect(() => {
    brandApi.getAllBrand(pathName).then((res) => setBrandList(res.data));
  }, []);

  // console.log(filters);
  return (
    <div className={clsx(style.main)}>
      <h3>Hãng sản xuất</h3>
      <ul className={clsx(style.list)}>
        <li className={clsx(style.items)}>
          <input
            type="checkbox"
            value=""
            defaultChecked
            id="tat-ca"
            onChange={(e) => handleLeftFilter(e, "hang-san-xuat")}
          />
          <label htmlFor="tat-ca">Tất cả</label>
        </li>
        {brandList?.map((item) => (
          <li key={item.id} className={clsx(style.items)}>
            <input
              type="checkbox"
              value={item.name}
              id={item.id}
              onChange={(e) => handleLeftFilter(e, "hang-san-xuat")}
            />
            <label htmlFor={item.id}>{item.name}</label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BrandFilter;
