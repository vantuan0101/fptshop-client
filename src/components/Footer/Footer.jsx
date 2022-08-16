import React from "react";
import clsx from "clsx";
import style from "./footer.module.scss";
import { FaCcApplePay, FaCcMastercard, FaCcVisa } from "react-icons/fa";
const Footer = () => {
  return (
    <div className={clsx(style.main)}>
      <div className={clsx(style.contain)}>
        <div className={clsx(style.policy)}>
          <ul className={clsx(style.policy_items)}>
            <li>
              <a href="#">Giới thiệu về công ty</a>
            </li>
            <li>
              <a href="#">Câu hỏi thường gặp mua hàng</a>
            </li>
            <li>
              <a href="#">Chính sách bảo mật</a>
            </li>
            <li>
              <a href="#">Quy chế hoạt động</a>
            </li>
            <li>
              <a href="#">Kiểm tra hóa đơn điện tử</a>
            </li>
            <li>
              <a href="#">Tra cứu thông tin bảo hành</a>
            </li>
          </ul>
          <ul className={clsx(style.policy_items)}>
            <li>
              <a href="#">Tin tuyển dụng</a>
            </li>
            <li>
              <a href="#">Tin khuyến mãi</a>
            </li>
            <li>
              <a href="#">Hướng dẫn mua online</a>
            </li>
            <li>
              <a href="#">Hướng dẫn mua trả góp</a>
            </li>
            <li>
              <a href="#">Chính sách trả góp</a>
            </li>
          </ul>
          <ul className={clsx(style.policy_items)}>
            <li>
              <a href="#">Hệ thống cửa hàng</a>
            </li>
            <li>
              <a href="#">Hệ thống bảo hành</a>
            </li>
            <li>
              <a href="#">Bán hàng doanh nghiệp</a>
            </li>
            <li>
              <a href="#">Giới thiệu máy đổi trả</a>
            </li>
            <li>
              <a href="#">Chính sách đổi trả</a>
            </li>
          </ul>
        </div>
        <div className={clsx(style.contact)}>
          <ul className={clsx(style.contact_phone)}>
            <li>
              <p >Tư vấn mua hàng (Miễn phí)</p>
              <a href="tel:18006601" title="">
                1800 6601{" "}
              </a>
              <span>(Nhánh 1)</span>
            </li>
            <li>
              <p >Hỗ trợ kỹ thuật</p>
              <a href="tel:18006601" title="">
                1800 6601{" "}
              </a>
              <span>(Nhánh 2)</span>
            </li>
            <li>
              <p >Góp ý, khiếu nại dịch vụ (8h00-22h00)</p>
              <a href="tel:18006616" title="">
                1800 6616
              </a>
            </li>
          </ul>
          <div className={clsx(style.more)}>
            <ul className={clsx(style.more_item)}>
              <li>
                <p>Hỗ trợ thanh toán:</p>
                <div>
                  <FaCcVisa />
                  <FaCcMastercard />
                  <FaCcApplePay />
                </div>
              </li>
            </ul>
            
          </div>
        </div>
      </div>
      <div className={clsx(style.fs_ftbott)} >© 2007 - 2021 Công Ty Cổ Phần Bán Lẻ Kỹ Thuật Số FPT / Địa chỉ: 261 - 263 Khánh Hội, P2, Q4, TP. Hồ Chí Minh / GPĐKKD số 0311609355 do Sở KHĐT TP.HCM cấp ngày 08/03/2012. GP số 47/GP-TTĐT do sở TTTT TP HCM cấp ngày 02/07/2018. Điện thoại: (028)73023456. Email: fptshop@fpt.com.vn. Chịu trách nhiệm nội dung: Nguyễn Trịnh Nhật Linh.</div>
    </div>
  );
};

export default Footer;
