import clsx from "clsx";
import React from "react";
import { FaTimes } from "react-icons/fa";
import CreateUser from "../../../../../../../components/formControll/CreateUser/CreateUser";
import style from "./addmodal.module.scss";

const AddModal = ({isAddUser, handleClickAddUser,className }) => {
  return (
    <>
      <div className={clsx(style.main , className ? className : '')} >
        <div className={clsx(style.contain)}>
          <div className={clsx(style.close)}>
            <div onClick={handleClickAddUser}>
              <FaTimes />
            </div>
          </div>
          <h3 className={clsx(style.name)}>Add User</h3>
          <CreateUser  className={clsx(style.form)} />
        </div>
      </div>
    </>
  );
};

export default AddModal;
