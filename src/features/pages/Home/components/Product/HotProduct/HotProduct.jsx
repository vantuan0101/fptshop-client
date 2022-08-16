import React, { useEffect, useState } from "react";
import clsx from "clsx";
import style from "./hotproduct.module.scss";
import productApi from "../../../../../../api/productApi";
import { Link } from "react-router-dom";
const HotProduct = ({nameHotProduct ,pathProduct}) => {
  const [listHotProduct, setListHotProduct] = useState([]);
  useEffect(() => {
    productApi.getHotProduct(pathProduct).then((res) => setListHotProduct(res.data));
  }, []);
  // console.log(listHotProduct);
  return (
    <div className={clsx(style.main)}>
      <div className={clsx(style.header)}>
        <div>{nameHotProduct} Hot</div>
        <Link to={`${pathProduct}`}>Xem tất cả</Link>
      </div>
      <ul className={clsx(style.products)}>
        {listHotProduct?.map((item) => (
          <Link to={`/${pathProduct}/${item.id}`} key={item.id} className={clsx(style.items)}>
            <li  className={clsx(style.item)}>
              <div className={clsx(style.item_top)}>
                <div className={clsx(style.image)}>
                  <img src={item.thumbnail.url} alt={item.name} />
                </div>
                <div className={clsx(style.name)}>{item.name}</div>
                <div className={clsx(style.cost)}>
                  <div>{item.price -  item.discountValue} ₫
                  <div
                  className={clsx(style.progress_bar)}
                  style={{ width: "70%" }}
                ></div>
                  </div>
                  <div>{item.price} ₫</div>
                </div>
              </div>
              <div className={clsx(style.item_bot)}>
                <div>Cấu hình demo</div>
                <div className={clsx(style.payment)}>{item.payment}</div>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default HotProduct;
