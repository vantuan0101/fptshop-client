import React, { useEffect, useState } from "react";
import clsx from "clsx";
import style from "./catelogiesTable.module.scss";
import catelogiesApi from "../../../../../api/catelogiesApi";
import { FaPen, FaTrash } from "react-icons/fa";
import AddModal from "./AddCate";
import EditModal from "./EditCate";
const CatelogiesTable = () => {
  const [isModalOpen, setIsModalOpen] = useState({
    statusEditModal: false,
    statusAddModal: false,
    catelogies: null,
    currentCatelogies: null,
  });
  useEffect(() => {
    const res = catelogiesApi.getAll();
    res.then((res) => {
      setIsModalOpen((prev) => ({ ...prev, catelogies: res.data }));
    });
  }, []);
  //   console.log(isModalOpen.catelogies);
  const handleClickAdd = () => {
    setIsModalOpen((prev) => ({
      ...prev,
      statusAddModal: !isModalOpen.statusAddModal,
    }));
  };
  const handleClickEdit = (catelogies) => {
    setIsModalOpen((prev) => ({
      ...prev,
      statusEditModal: !isModalOpen.statusEditModal,
      currentCatelogies: catelogies,
    }));
  };
  return (
    <div className={clsx(style.main)}>
      {isModalOpen.statusAddModal && (
        <AddModal handleClickAdd={handleClickAdd} />
      )}
      {isModalOpen.statusEditModal && (
        <EditModal
          catelogies={isModalOpen.currentCatelogies}
          handleClickEdit={handleClickEdit}
        />
      )}

      <div className={clsx(style.add)} onClick={handleClickAdd}>
        Thêm
      </div>
      <ul className={clsx(style.name, style.common)}>
        <li>Tên</li>
        <li>Chức năng</li>
      </ul>
      <div className={clsx(style.list)}>
        {isModalOpen.catelogies?.map((catelogies, index) => (
          <ul className={clsx(style.list_items)} key={catelogies.id}>
            <li>{catelogies.name}</li>
            <li className={clsx(style.list_btn)}>
              <div className={clsx(style.edit)}>
                <FaPen onClick={() => handleClickEdit(catelogies)} />
              </div>
              <div className={clsx(style.delete)}>
                <FaTrash />
              </div>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default CatelogiesTable;
