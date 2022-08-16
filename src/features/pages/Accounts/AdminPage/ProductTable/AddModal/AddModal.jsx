import clsx from "clsx";
import React from "react";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { FaTimes } from "react-icons/fa";
import Select from "react-select";
import productApi from "../../../../../../api/productApi";
import InputField from "../../../../../../components/Field/InputField/InputField";
import useGetAllBrand from "../../../../../../hook/useGetAllBrand";
import { defaultValuesAddModal, optionsBoolean, optionsProduct } from "../common";

import style from "./addmodal.module.scss";
const AddModal = ({ handleClickAddUser, className, nameTable }) => {
  // console.log(product);

  const methods = useForm({
    defaultValues: defaultValuesAddModal,
  });
  const resultBrand = useGetAllBrand(nameTable)?.reduce((acc, cur) => {
    acc.push({ label: cur.name, value: cur.id });
    return acc;
  },[]);
  // console.log(resultBrand);

  const handleSubmitForm = async (data) => {
console.log(data)
    const options = data?.options
      ? data?.options
          ?.reduce((acc, cur) => {
            acc.push(cur.value);
            return acc;
          }, [])
          .toString()
      : '';
    // console.log(options);
    try {
      const formData = new FormData();

      Array.from(data?.image).forEach((file) => {
        formData.append("image", file);
      });
      formData.append("thumbnail", data?.thumbnail[0]);
      formData.append("brand_id", data?.brand?.value);
      formData.append("brand", data?.brand?.label);
      formData.append("name", data?.name);
      formData.append("color", data?.color);
      formData.append("discount", data?.discount);
      formData.append("discountValue", data?.discountValue);
      formData.append(
        "gift_online",
        data?.gift_online?.value === "true" ? "true" : "false"
      );
      formData.append(
        "isHot",
        data?.isHot?.value === "true" ? "true" : "false"
      );
      
      formData.append("options", options);
      formData.append("payment", data?.payment);
      formData.append("price", data?.price);
      formData.append("sold", data?.sold);
      await productApi.createProduct(nameTable, formData);
      alert("Them thành công");
      window.location.reload();
      // console.log(res);

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(handleSubmitForm)}
        className={clsx(style.main)}
        // method="POST"
        encType="multipart/form-data"
      >
        <div className={clsx(style.form_close)}>
          <FaTimes onClick={handleClickAddUser} />
        </div>
        <h3 className={clsx(style.form_heading)}>Them {nameTable} Products</h3>
        <div className={clsx(style.form_group)}>
          <label className={clsx(style.select_heading)}>Thương hiệu</label>
          <Controller
            name="brand"
            control={methods.control}
            render={({ field }) => <Select {...field} options={resultBrand} />}
          />

          <InputField
            name="name"
            label="Tên sản phẩm"
            className={clsx(style.form_field)}
          />

          <InputField
            name="color"
            label="Màu sắc"
            className={clsx(style.form_field)}
          />
          <InputField
            name="discount"
            label="Giảm giá banner"
            className={clsx(style.form_field)}
          />
          <InputField
            name="discountValue"
            label="Số tiền giảm giá"
            typeInput="number"
            className={clsx(style.form_field)}
          />
          <label className={clsx(style.select_heading)}>Quà tặng Online</label>
          <Controller
            name="gift_online"
            control={methods.control}
            render={({ field }) => (
              <>
                <Select
                  {...field}
                  defaultValue={optionsBoolean[1]}
                  options={optionsBoolean}
                />
              </>
            )}
          />
          <label className={clsx(style.select_heading)}>Trạng thái Sale</label>

          <Controller
            name="isHot"
            control={methods.control}
            render={({ field }) => (
              <Select
                {...field}
                defaultValue={optionsBoolean[1]}
                options={optionsBoolean}
              />
            )}
          />

          <InputField
            name="price"
            label="Giá"
            typeInput="number"
            className={clsx(style.form_field)}
          />
          <label className={clsx(style.select_heading)}>Dung lượng</label>

          <Controller
            name="options"
            control={methods.control}
            render={({ field }) => (
              <Select {...field} isMulti options={optionsProduct} />
            )}
          />

          <InputField
            name="payment"
            label="Thanh toán"
            className={clsx(style.form_field)}
          />
          <InputField
            typeInput="file"
            name="thumbnail"
            label="Ảnh nền"
            className={clsx(style.form_field)}
          />
          <InputField
            typeInput="file"
            name="image"
            label="Hình ảnh"
            className={clsx(style.form_field)}
            multiple={true}
          />
        </div>

        <button className={clsx(style.form_btn)} type="submit">
          Save
        </button>
      </form>
    </FormProvider>
  );
};

export default AddModal;