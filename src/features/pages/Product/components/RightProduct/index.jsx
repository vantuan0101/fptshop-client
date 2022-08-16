import React from "react";
import clsx from "clsx";
import style from "./products.module.scss";
import SortProducts from "./SortProduct";
import ProductListPage from "./ProductListPage";
const RightProduct = ({nameProduct, pathName,productList, handleSort }) => {
  // console.log(productList);
  return (
    <div className={clsx(style.product)}>
      <div className={clsx(style.result_fil)}>
        <h3>{nameProduct}</h3>
        <div>Result Filter</div>
      </div>
      <div className={clsx(style.product_list)}>
        <SortProducts handleSort={handleSort} />
        <ProductListPage pathName={pathName} productList={productList} />
      </div>
    </div>
  );
};

export default RightProduct;
