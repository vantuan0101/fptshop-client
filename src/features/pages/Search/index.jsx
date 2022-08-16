import React from "react";
import queryString from "query-string";
import { useEffect } from "react";
import productApi from "../../../api/productApi";
import { useState } from "react";
import ProductListPage from "../Product/components/RightProduct/ProductListPage";
import clsx from "clsx";
import style from "./search.module.scss";
const SearchPage = () => {
  const queryParams = queryString.parse(window.location.search);
  // console.log(queryParams);
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const result = async () => {
      const res = await productApi.getSearch({ q: queryParams.q });
      setProduct(res.data);
    };
    result();
  }, []);
  // console.log(product);
  return (
    <div className={clsx(style.main)}>
      <div className={clsx(style.header)}>
        <h3 className={clsx(style.heading)}>
          Kết quả tìm kiếm sản phẩm : <span>{queryParams.q}</span>
        </h3>
      </div>
      <ProductListPage productList={product} />
    </div>
  );
};

export default SearchPage;
