import React from "react";
import clsx from "clsx";
import style from "./productlist.module.scss";
import { Link } from "react-router-dom";
import { formatCurrency } from "../../../../../../utils/formatCurrency";
const ProductListPage = ({ productList }) => {
  // console.log(productList);
  return (
    <ul className={clsx(style.items)}>
      {productList?.map((product, index) => (
        <li key={product.name} className={clsx(style.item)}>
          <Link
            to={`/${productList.typeProduct}/${product.id}`}
            className={clsx(style.item_contain)}
          >
            <div className={clsx(style.item_image)}>
              <img src={product.thumbnail.url} alt={product.name} />
            </div>
            <div className={clsx(style.item_name)}>{product.name}</div>
            {product.options && (
              <div className={clsx(style.item_options)}>
                {product.options?.map((option, index) => (
                  <div
                    key={option}
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
                {formatCurrency(product.price - product.discountValue)}
                <div
                  className={clsx(style.progress_bar)}
                  style={{ width: "70%" }}
                ></div>
              </div>
              <div> {formatCurrency(product.price)}</div>
            </div>
            <div className={clsx(style.item_payment)}>{product.payment}</div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ProductListPage;
