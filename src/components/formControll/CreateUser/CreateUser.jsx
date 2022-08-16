import { yupResolver } from "@hookform/resolvers/yup";
import clsx from "clsx";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import userApi from "../../../api/userApi";
import InputFiled from "../../Field/InputField/InputField";
import { schemaCreateUser } from "../yupCreateUser/yupCreateUser";
import style from "./createuser.module.scss";
const schema = schemaCreateUser();
const CreateUser = ({ className }) => {
  // console.log(isAddUser);
  // const {
  //   register,
  //   handleSubmit,
  //   setError,
  //   formState: { errors },
  // } = useForm({
  //   resolver: yupResolver(schema),
  // });
  const defaultValues = {
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
    type_user: "",
    avatar: "",
  };
  const methods = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });
  const handleSubmitForm = async (data) => {
    // console.log(data);
    try {
      const { first_name, last_name, phone, email, password, avatar } = data;
      const newUser = await userApi.addUser({
        first_name,
        last_name,
        phone,
        email,
        password,
        avatar,
      });
      if (newUser.errCode === 0) {
        alert("Create User Success");
        window.location.reload();
      }
      // console.log(newUser);
    } catch (error) {
      methods.setError("email", {
        type: "focus",
        message: "Email này đã được sử dụng",
      });
    }
  };
  return (
    <>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(handleSubmitForm)}
          className={clsx(style.form, className ? className : "")}
        >
          <div className={clsx(style.name)}>
            <InputFiled name="first_name" label="Tên" typeInput="text" />
            <InputFiled
              name="last_name"
              label="Họ và tên lót"
              typeInput="text"
            />
          </div>
          <InputFiled name="email" typeInput="email" />
          <InputFiled name="phone" label="Số điện thoại" typeInput="number" />
          <InputFiled name="password" label="Mật khẩu" typeInput="password" />
          <InputFiled
            name="confirm_password"
            label="Xác nhận mật khẩu"
            typeInput="password"
          />
          <InputFiled name="avatar" typeInput="file" />

          <button type="submit" className={clsx(style.input)}>
            Đăng ký
          </button>
        </form>
      </FormProvider>
    </>
  );
};

export default CreateUser;
