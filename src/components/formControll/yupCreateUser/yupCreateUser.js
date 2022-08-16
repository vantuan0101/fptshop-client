import * as yup from "yup";

export const schemaCreateUser = () =>
  yup
    .object({
      first_name: yup.string().required("Vui lòng nhập tên"),
      last_name: yup.string().required("Vui lòng nhập họ"),
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
      password: yup
        .string()
        .required("Vui lòng nhập mật khẩu")
        .min(6, "Mật khẩu quá ngắn. Tối thiểu 6 ký tự")
        .max(255),
      confirm_password: yup
        .string()
        .required("Vui lòng nhập lại mật khẩu")
        .oneOf([yup.ref("password"), null], "Mật khẩu không khớp"),
    })
    .required();
