import React from "react";
import BrandFilter from "./BrandFilter";
import clsx from "clsx";
import style from "./leftproduct.module.scss";
import PriceFilter from "./PriceFilter/PriceFilter";
const LeftProducts = ({pathName, handleLeftFilter }) => {
  return (
    <>
      <div className={clsx(style.filter)}>
        <BrandFilter  pathName={pathName} handleLeftFilter={handleLeftFilter} />
        <PriceFilter handleLeftFilter={handleLeftFilter} />
      </div>
    </>
  );
};

export default LeftProducts;
