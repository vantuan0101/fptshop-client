import React, { useEffect, useState } from "react";
import clsx from "clsx";
import style from "./productdetails.module.scss";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import productApi from "../../../api/productApi";
import SliderField from "../../../components/Slider/Slider";
import { FcOk } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { addCart } from "../../../app/cartSlice";
const ProductDetails = ({ nameProduct, pathName }) => {
  let { id } = useParams();
  const [product, setProduct] = useState([]);
  const dispatch = useDispatch();
  let navigate  = useNavigate();
  useEffect(() => {
    const fetcData = async () => {
      const res = await productApi.getProductById(pathName, id);
      setProduct(res.data);
    };
    fetcData();
  }, []);
  // console.log(product);
  const handleBuyClick = () => {
    dispatch(addCart(product));
    navigate("/checkout");
  };
  return (
    <div className={clsx(style.main)}>
      <div className={clsx(style.container)}>
        <div className={clsx(style.link)}>
          <NavLink to="/">Trang chủ /</NavLink>
          <NavLink to={`/${pathName}`}>{nameProduct} /</NavLink>
          <NavLink to={`/${pathName}/${id}`} className={({isActive}) => isActive ? clsx(style.active) : undefined }>{product.brand}</NavLink>
        </div>
        <div className={clsx(style.contain)}>
          <div className={clsx(style.name)}>{product.name}</div>
          <div className={clsx(style.products)}>
            <div className={clsx(style.image)}>
              <SliderField>
                {product?.image?.url?.map((item, index) => (
                  <div key={item} className={clsx(style.image_item)}>
                    <img
                      src={item}
                      alt={item}
                      className={clsx(style.image_img)}
                    />
                  </div>
                ))}
              </SliderField>
            </div>
            <div className={clsx(style.dsc)}>
              <div className={clsx(style.cost)}>
                <div>{product?.price - product?.discountValue} ₫</div>
                <div>{product?.price} ₫</div>
              </div>
              <div className={clsx(style.discount)}>
                <div className={clsx(style.discount_check)}>
                  <input defaultChecked type="radio" name="discounnt" />
                  <label htmlFor="discount">{product?.discount}</label>
                </div>
                <div className={clsx(style.discount_more)}>
                  <div>Ưu đãi thêm</div>
                  <ul className={clsx(style.listmore)}>
                    <li>
                      <div>
                        <FcOk />
                      </div>
                      <div>
                        <span>
                          Đặc quyền dành cho Tân Sinh viên: Giảm thêm đến 10% +
                          Tặng thêm 1 năm bảo hành{" "}
                        </span>
                        <a href="https://fptshop.com.vn/tiep-suc-mua-thi">
                          Xem chi tiết
                        </a>
                      </div>
                    </li>
                    <li>
                      <div>
                        <FcOk />
                      </div>

                      <div>
                        <span>Tặng Balo Gaming cao cấp </span>
                      </div>
                    </li>
                    <li>
                      <div>
                        <FcOk />
                      </div>
                      <div>
                        <span>Tặng Chuột Gaming GM03 </span>
                      </div>
                    </li>
                    <li>
                      <a>Xem thêm 3 ưu đãi khác&nbsp;</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className={clsx(style.payment)}>
                <h3>Thanh toán qua : </h3>
                {product.payment}
              </div>
              <div className={clsx(style.buy)}>
                <button onClick={handleBuyClick}>
                  <div>Mua ngay</div>
                  <p>Giao hàng miễn phí hoặc nhận tại shop</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
