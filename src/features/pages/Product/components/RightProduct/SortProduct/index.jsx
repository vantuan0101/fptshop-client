/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import clsx from "clsx";
import style from "./sortproduct.module.scss";
const SortProducts = ({ handleSort }) => {
  return (
    <div className={clsx(style.product_sort)}>
      <div className={clsx(style.sort_left)}>
        <span>Ưu tiên xem: </span>
        <ul className={clsx(style.btn_group)}>
          <li>
            <a data-value="ban-chay-nhat" onClick={(e) => handleSort(e)}>
              Bán chạy nhất
            </a>
          </li>
          <li>
            <a data-value="tra-gop-0" onClick={(e) => handleSort(e)}>
              Trả góp 0%
            </a>
          </li>
          <li>
            <a data-value="desc" onClick={(e) => handleSort(e)}>
              Giá thấp
            </a>
          </li>
          <li>
            <a data-value="asc" onClick={(e) => handleSort(e)}>
              Giá cao
            </a>
          </li>
          <li>
            <a data-value="uu-dai-online" onClick={(e) => handleSort(e)}>
              Ưu đãi online
            </a>
          </li>
        </ul>
      </div>
      <select
        name="sort"
        id="sort"
        className={clsx(style.sort_right)}
        onChange={(e) => handleSort(e)}
      >
        <option value="">Sắp xếp</option>
        <option value="ban-chay-nhat">Bán chạy nhất</option>
        <option value="tra-gop-0">Trả góp 0%</option>
        <option value="desc">Giá thấp</option>
        <option value="asc">Giá cao</option>
        <option value="uu-dai-online">Ưu đãi online</option>
      </select>
    </div>
  );
};

export default SortProducts;
