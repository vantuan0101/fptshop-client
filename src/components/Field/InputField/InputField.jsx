import { ErrorMessage } from "@hookform/error-message";
import clsx from "clsx";
import React from "react";
import { useFormContext } from "react-hook-form";

import style from "./inputField.module.scss";
const InputField = ({
  typeInput = "text",
  name,
  label,
  multiple,
  className,
}) => {
  const { register, formState: { errors } } = useFormContext();
  // console.log(errors);
  return (
    <label className={clsx(style.field)}>
      <input
        className={clsx(
          style.field__input,
          errors?.hasOwnProperty(name) && style.input__error,
          className ? className : null
        )}
        type={typeInput}
        placeholder=" "
        {...register(name)}
        multiple={multiple ? true : false}
      />
      <span className={clsx(style.field__label__wrap)}>
        <span className={clsx(style.field__label)}>{label ? label : name}</span>
      </span>
      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => <p className={clsx(style.error)}>{message}</p>}
      />
    </label>
  );
};

export default InputField;
