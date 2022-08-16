import React from "react";
import clsx from "clsx";
import style from "./productlist.module.scss";
import { Link } from "react-router-dom";
const ProductListPage = ({ productList ,pathName }) => {
  return (
    <ul className={clsx(style.items)}>
      {productList?.map((product, index) => (
        <li key={product.id} className={clsx(style.item)}>
          <Link
            to={`/${pathName}/${product.id}`}
            className={clsx(style.item_contain)}
          >
            <div className={clsx(style.item_image)}>
              <img src={product.thumbnail} alt={product.name} />
            </div>
            <div className={clsx(style.item_name)}>{product.name}</div>
            {product.options && (
              <div className={clsx(style.item_options)}>
                {product.options?.map((option, index) => (
                  <div
                    key={index}
                    style={{
                      width: `calc(100% / ${product.options?.length})`,
                    }}
                  >
                    <strong>{option}</strong>
                  </div>
                ))}
              </div>
            )}

            <div className={clsx(style.item_price)}>
              <div>
                {product.price} ₫
                <div
                  className={clsx(style.progress_bar)}
                  style={{ width: "70%" }}
                ></div>
              </div>
              <div>{product.price} ₫</div>
            </div>
            <div className={clsx(style.item_payment)}>{product.payment}</div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ProductListPage;
