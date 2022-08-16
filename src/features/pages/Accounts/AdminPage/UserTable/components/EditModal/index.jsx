import clsx from "clsx";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { FaTimes } from "react-icons/fa";
import userApi from "../../../../../../../api/userApi";
import InputField from "../../../../../../../components/Field/InputField/InputField";
import style from "./editmodal.module.scss";
const EditModal = ({ currentUser, handleEditUser }) => {
  // console.log(currentUser);
  const defaultValues = {
    first_name: currentUser?.first_name || "",
    last_name: currentUser?.last_name || "",
    phone: currentUser?.phone || "",
    email: currentUser?.email || "",
    type_user: currentUser?.type_user || "",
    avatar: currentUser?.avatar || "",
  };
  const methods = useForm({
    defaultValues,
  });

  const handleSubmitForm = async (data) => {
    const result = await userApi.updateUserById(currentUser.id, data);
    console.log(result);
    window.location.reload();
  };
  return (
    <FormProvider {...methods}>
      <div className={clsx(style.main)}>
        <form
          className={clsx(style.form)}
          onSubmit={methods.handleSubmit(handleSubmitForm)}
        >
          <div className={clsx(style.form_close)}>
            <FaTimes onClick={handleEditUser} />
          </div>
          <div className={clsx(style.form_group)}>
            <h3 className={clsx(style.form_heading)}>Edit USer</h3>
            <div className={clsx(style.form_name)}>
              <InputField
                name="first_name"
                label="Tên"
                className={clsx(style.form_field)}
              />
              <InputField
                label="Họ và tên lót"
                name="last_name"
                className={clsx(style.form_field)}
              />
            </div>
            <InputField name="phone" typeInput="number" className={clsx(style.form_field)} />
            <InputField name="email" typeInput="email" className={clsx(style.form_field)} />
            <InputField
              name="type_user"
              label="Loại người dùng"
              className={clsx(style.form_field)}
            />
            <InputField
              name="avatar"
              label="Avatar"
              typeInput="file"
              className={clsx(style.form_field)}
            />
          </div>
          <button className={clsx(style.form_btn)} type="submit">
            Save
          </button>
        </form>
      </div>
    </FormProvider>
  );
};

export default EditModal;
