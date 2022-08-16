import { yupResolver } from "@hookform/resolvers/yup";
import clsx from "clsx";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import authApi from "../../../../api/authApi";

import InputField from "../../../../components/Field/InputField/InputField";
import { schemaCreateUser } from "../../../../components/formControll/yupCreateUser/yupCreateUser";
import style from "./register.module.scss";

const schema = schemaCreateUser();
const Register = () => {
  const methods = useForm({
    resolver: yupResolver(schema),
  }) 


  let navigate = useNavigate();

  const handleSubmitForm = async (dataForm) => {
    try {
      const newUser = await authApi.register(dataForm);
      // console.log(newUser);
      if (newUser.errCode === 0) {
        navigate("/user/verify");
      } else {
        alert("Đăng ký thất bại");
      }
    } catch (error) {
      methods.setError("email", {
        type: "focus",
        message: "Email này đã được sử dụng",
      });
    }
    // console.log(data);
  };
  return (
    <FormProvider {...methods}>
      <div className={clsx(style.contain)}>
        <a href="/">Home</a>
        <form
          onSubmit={methods.handleSubmit(handleSubmitForm)}
          className={clsx(style.form)}
        >
          <div className={clsx(style.heading)}>Đăng ký tài khoản FPTShop</div>
          <div className={clsx(style.name)}>
            <InputField
              name="first_name"
              label="Tên"
              typeInput="text"
              
            />
            <InputField
              name="last_name"
              label="Họ và tên lót"
              typeInput="text"
              
            />
          </div>
          <InputField
            name="email"
            typeInput="text"
            
          />
          <InputField
            name="phone"
            typeInput="number"
            
          />
          <InputField
            name="password"
            typeInput="password"
            
          />
          <InputField
            name="confirm_password"
            typeInput="password"
            
          />
          <button type="submit" className={clsx(style.input)}>
            Đăng ký
          </button>
        </form>
      </div>
    </FormProvider>
  );
};

export default Register;
