import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import InputField from "../../../components/Field/InputField/InputField";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import clsx from "clsx";
import style from "./checkout.module.scss";
import { useSelector } from "react-redux";
import productApi from "../../../api/productApi";
import { useNavigate } from "react-router-dom";
const schema = yup
  .object({
    fullName: yup.string().required("Vui lòng nhập tên"),
    phone: yup
      .number()
      .positive()
      .required("Xin vui lòng nhập số điện thoại")
      .typeError("Xin vui lòng nhập số điện thoại")
      .min(4, "Số điện thoại không hợp lệ"),
    email: yup
      .string()
      .email("Vui  lòng nhập email")
      .required("Vui lòng nhập email"),
    address: yup.string().required("Vui lòng nhập địa chỉ"),
  })
  .required();
const Checkout = () => {
  const { carts } = useSelector((state) => state.cart);
  // console.log(carts);
  let navigate = useNavigate();
  const methods = useForm({ resolver: yupResolver(schema) });
  const onSubmit = async (data) => {
    // console.log(data);
    try {
      await productApi.postOrder({ data, carts });
      carts.forEach(async (item) => {
        const sold = item.sold + 1;
        await productApi.updateProductById(item.typeProduct, item.id, { sold });
      });
      navigate("/checkout/success" );
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className={clsx(style.main)}
        encType="multipart/form-data"
      >
        <h3 className={clsx(style.heading)}>Vui lòng nhập địa chỉ</h3>
        <InputField
          name="fullName"
          label="Tên người nhận"
          className={clsx(style.input)}
        />
        <InputField name="email" className={clsx(style.input)} />
        <InputField
          name="address"
          label="Địa chỉ"
          className={clsx(style.input)}
        />
        <InputField
          name="phone"
          typeInput="number"
          label="Số điện thoại"
          className={clsx(style.input)}
        />
        <input type="submit" className={clsx(style.submit)} />
      </form>
    </FormProvider>
  );
};

export default Checkout;
