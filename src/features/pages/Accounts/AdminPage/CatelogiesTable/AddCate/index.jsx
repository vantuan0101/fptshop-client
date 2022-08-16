import clsx from "clsx";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { FaTimes } from "react-icons/fa";
import catelogiesApi from "../../../../../../api/catelogiesApi";
import InputField from "../../../../../../components/Field/InputField/InputField";

import style from "./addmodal.module.scss";
const AddModal = ({ handleClickAdd, className }) => {
  // console.log(product);
  const defaultValues = {
    name: "",
    more: "",
    imageIcon: "",
  };
  const methods = useForm({
    defaultValues,
  });

  const handleSubmitForm = async (data) => {
    console.log(data);
    try {
      const formData = new FormData();
      formData.append("name", data?.name);
      formData.append("more", data?.more);
      formData.append("imageIcon", data?.imageIcon[0]);

      await catelogiesApi.createCatelogies(formData);
      alert("Them thành công");
      window.location.reload();
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
          <FaTimes onClick={handleClickAdd} />
        </div>
        <h3 className={clsx(style.form_heading)}>Them Catelogies</h3>
        <div className={clsx(style.form_group)}>
          <InputField
            name="name"
            label="Tên catelogies"
            className={clsx(style.form_field)}
          />

          <InputField
            name="more"
            label="Chi tiết"
            className={clsx(style.form_field)}
          />
          <InputField
            name="imageIcon"
            label="imageIcon"
            typeInput="file"
           
            className={clsx(style.form_field)}
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
