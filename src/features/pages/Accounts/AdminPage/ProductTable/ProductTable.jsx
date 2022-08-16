import clsx from "clsx";
import React, { useState } from "react";
import { FaPen, FaTrash } from "react-icons/fa";
import productApi from "../../../../../api/productApi";
import useGetAllApi from "../../../../../hook/useGetAllApi";
import AddModal from "./AddModal/AddModal";
import EditModal from "./EditModal/EditModal";
import style from "./producttable.module.scss";
const ProductTable = ({ nameTable }) => {
 
  const [isModalOpen, setIsModalOpen] = useState({
    statusEditModal: false,
    statusAddModal: false,
    product: null,
  });
  const productList = useGetAllApi(`${nameTable}`);
    // console.log(productList);
  const handleClickEdit = (product) => {
    // console.log(product);
    setIsModalOpen((prev) => ({
      ...prev,
      statusEditModal: !isModalOpen.statusEditModal,
      product: product,
    }));
  };
  const handleClickAddUser = () => {
    setIsModalOpen((prev) => ({
      ...prev,
      statusAddModal: !isModalOpen.statusAddModal,
    }));
  };
  const handleClickDelete = async (id) => {
    try {
      await productApi.deleteProductById(`${nameTable}`, id);
      alert("Xóa thành công");
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={clsx(style.main)}>
      <div
        className={clsx(
          style.modal,
          isModalOpen.statusAddModal || isModalOpen.statusEditModal
            ? style.isShow
            : ""
        )}
        onClick={handleClickAddUser}
      ></div>
      {isModalOpen.statusAddModal && (
        <AddModal handleClickAddUser={handleClickAddUser} nameTable={nameTable}/>
      )}
      {isModalOpen.statusEditModal && (
        <EditModal
          product={isModalOpen.product}
          handleClickEdit={handleClickEdit}
          nameTable={nameTable}
        />
      )}
      <div className={clsx(style.add)} onClick={handleClickAddUser}>
        Thêm {nameTable}
      </div>
      <ul className={clsx(style.name, style.common)}>
        <li>Hãng</li>
        <li>Tên {nameTable}</li>
        <li>Discount</li>
        <li>Giá</li>
        <li>Thanh toán</li>
        <li>Chức Năng</li>
      </ul>
      <div className={clsx(style.list)}>
        {productList?.map((product, index) => (
          <ul className={clsx(style.list_items, style.common)} key={product.id}>
            <li>{product.brand}</li>
            <li>{product.name}</li>
            <li>{product.discount}</li>
            <li>{product.price}</li>
            <li>{product.payment}</li>
            <li className={clsx(style.list_btn)}>
              <div
                className={clsx(style.edit)}
                onClick={() => handleClickEdit(product)}
              >
                <FaPen />
              </div>
              <div
                className={clsx(style.delete)}
                onClick={() => handleClickDelete(product.id)}
              >
                <FaTrash />
              </div>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default ProductTable;
