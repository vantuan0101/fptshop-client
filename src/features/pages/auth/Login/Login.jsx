import { yupResolver } from "@hookform/resolvers/yup";
import clsx from "clsx";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import authApi from "../../../../api/authApi";
import { addUser } from "../../../../app/userSlice";
import InputFiled from "../../../../components/Field/InputField/InputField";
import style from "./login.module.scss";

const schema = yup.object({
  email: yup
    .string()
    .email("Email không hợp lê")
    .max(255)
    .required("Xin vui lòng nhập email"),
  password: yup.string().max(255).required("Vui lòng nhập password"),
});
const Login = () => {
  const methods = useForm({
    resolver: yupResolver(schema),
  });

  let navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmitForm = async (data) => {
    // console.log(data);
    try {
      const user = await authApi.login(data);
      // console.log(user);
      if (user.errCode === 0) {
        // console.log("Login Thanh Cong");
        if (user.data.statusValidate) {
          window.localStorage.setItem("token", JSON.stringify(user.token));
          // console.log(user.data)
          // console.log('w' ,JSON.parse(user.data.avatar))

          dispatch(addUser(user.data));
          // navigate("/");
        } else {
          navigate("/user/verify");
        }
      } else {
        methods.setError("password", {
          type: "focus",
          message: "Email hoac Password không đúng",
        })
        methods.setError("email", {
          type: "focus",
          message: "Email hoac Password không đúng",
        });
      }
    } catch (error) {
      // console.log(error);
      methods.setError("password", {
        type: "focus",
        message: "Email hoac Password không đúng",
      })
      methods.setError("email", {
        type: "focus",
        message: "Email hoac Password không đúng",
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
          <div className={clsx(style.heading)}>Welcome FPTShop</div>
          <InputFiled name="email" typeInput="text" />
          <InputFiled name="password" typeInput="password" />
          <div className={clsx(style.tools)}>
            <button type="submit" className={clsx(style.input)}>
              Đăng Nhập
            </button>
            <Link className={clsx(style.input)} to="/register">
              Đăng ký
            </Link>
          </div>
          {/* <input className={clsx(style.input)} type="submit" /> */}
        </form>
      </div>
    </FormProvider>
  );
};

export default Login;
