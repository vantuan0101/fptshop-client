/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from "clsx";
import queryString from "query-string";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import useGetAllApi from "../../../../hook/useGetAllApi";
import LeftProducts from "../components/LeftProduct";
import RightProduct from "../components/RightProduct";
import SilderProduct from "../components/SliderProduct/SilderProduct";
import style from "./productpage.module.scss";
const ProductPages = ({ nameProduct, pathName }) => {
  const [filters, setFilters] = useState({
    trang: null,
    limit: null,
    sort: null, //ban-chay-nhat
    "hang-san-xuat": [],
    "muc-gia": [],
  });

  const resultFilters = queryString.stringify(filters, {
    skipNull: true,
    arrayFormat: "comma",
  });

  // console.log(resultFilters);

  const productList = useGetAllApi(`${pathName}?${resultFilters}`);
  // console.log(productList);
  const handleSort = (e) => {
    e.preventDefault();
    const sort = e.target.getAttribute("data-value") || e.target.value;
    setFilters((prev) => ({ ...prev, sort }));
    // navigate(`/dien-thoai?${resultFilters}`);
  };
  const handleLeftFilter = (e, nameOptionFilter) => {
    const name = `${nameOptionFilter}`;
    if (e.target.checked) {
      setFilters((prev) => ({
        ...prev,
        [name]: [...filters[name], e.target.value],
      }));
    } else {
      setFilters((prev) => ({
        ...prev,
        [name]: filters[name].filter((item) => item !== e.target.value),
      }));
    }
  };
  // console.log(resultFilters);

  return (
    <div className={clsx(style.main)}>
      <div className={clsx(style.path)}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? clsx(style.active) : undefined
          }
        >
          Trang chủ /{" "}
        </NavLink>
        <NavLink
          to={`/${pathName}`}
          className={({ isActive }) =>
            isActive ? clsx(style.active) : undefined
          }
        >
          {nameProduct}
        </NavLink>
      </div>
      <SilderProduct />
      <div className={clsx(style.container)}>
        <LeftProducts pathName={pathName} handleLeftFilter={handleLeftFilter} />
        <RightProduct
          nameProduct={nameProduct}
          pathName={pathName}
          productList={productList}
          handleSort={handleSort}
        />
      </div>
    </div>
  );
};

export default ProductPages;
