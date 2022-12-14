
export const defaultValuesAddModal = {
  brand: "",
  brand_id: "",
  name: "",
  color: "",
  discount: "",
  discountValue: 0,
  // gift_online: false,
  image: "",
  // isHot: false,
  options: "",
  payment: "",
  price: "",
  sold: "",
  thumbnail: "",
};
export const defaultValuesEditModal = (product) => {
  // console.log(product);


  return {
    brand: product?.brand || "",
    brand_id: product?.brand_id || "",
    name: product?.name || "",
    color: product?.color || "",
    discount: product?.discount || "",
    discountValue: product?.discountValue || "",
    image: product?.image || "",
    options: product?.options || "",
    payment: product?.payment || "",
    price: product?.price || "",
    sold: product?.sold || "",
    thumbnail: product?.thumbnail || "",
  };
};
export const optionsProduct = [
  { label: "64GB ๐", value: "64GB" },
  { label: "128GB ๐ฅญ", value: "128GB" },
  { label: "256GB ๐", value: "256GB" },
  { label: "512GB ๐", value: "512GB" },
  { label: "1TB ๐", value: "1TB" },
];
export const optionsBoolean = [
  { value: "true", label: "Cรณ" },
  { value: "false", label: "Khรดng" },
];
