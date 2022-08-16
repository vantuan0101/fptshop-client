import React, { useEffect, useState } from "react";
import clsx from "clsx";
import style from "./usertable.module.scss";
import { FaPen, FaTrash } from "react-icons/fa";
import AddModal from "./components/AddModal/AddModal";
import EditModal from "./components/EditModal";
import userApi from "../../../../../api/userApi";
const UserTable = () => {
  const [isAddUser, setIsAddUser] = useState(false);
  const [idEditUser, setIdEditUser] = useState({
    status: false,
    id: null,
  });
  const [userList, setUserList] = useState([]);
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const result = async () => {
      try {
        const res = await userApi.getAll();
        // console.log(res.data);
        setUserList(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    result();
  }, []);
  // console.log(userList);
  const handleClickAddUser = () => {
    setIsAddUser(!isAddUser);
  };
  const handleEditUser = (user) => {
    setIdEditUser((prev) => ({ status: !prev.status, id: user.id }));
    setCurrentUser(user);
  };
  const handleDeleteUser = (id) => {
    const result = async () => {
      try {
        await userApi.deletedUserById(id);
        alert("Delete success");
        window.location.reload();
      } catch (error) {
        console.log(error);
      }
    };
    result();
  };
  return (
    <>
      <div className={clsx(style.main)}>
        <div
          className={clsx(style.modal, isAddUser ? style.isShow : "")}
          onClick={handleClickAddUser}
        ></div>
        <AddModal
          isAddUser={isAddUser}
          handleClickAddUser={handleClickAddUser}
          className={clsx(style.addmodal, isAddUser ? style.isShow : "")}
        />
        {idEditUser.status && (
          <EditModal
            currentUser={currentUser}
            handleEditUser={handleEditUser}
          />
        )}

        <div className={clsx(style.add)} onClick={handleClickAddUser}>
          Thêm User
        </div>
        <div className={clsx(style.heading)}>
          <div>Tên</div>
          <div>Họ</div>
          <div>Email</div>
          <div>Phone</div>
          <div>Type</div>
          <div>Chức năng</div>
        </div>

        <div className={clsx(style.user)}>
          {userList.map((user, index) => (
            <div className={clsx(style.items)} key={user.id}>
              <div>{user.first_name}</div>
              <div>{user.last_name}</div>
              <div>{user.email}</div>
              <div>0{user.phone}</div>
              <div>{user.type_user}</div>
              <div className={clsx(style.options)}>
                <div className={clsx(style.edit)}>
                  <FaPen onClick={() => handleEditUser(user)} />
                </div>
                <div
                  className={clsx(style.delete)}
                  onClick={() => handleDeleteUser(user.id)}
                >
                  <FaTrash />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default UserTable;
