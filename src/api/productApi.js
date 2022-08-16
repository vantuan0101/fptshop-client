import axiosClient from "./axiosClient";

const productApi = {
  getAll(name, params) {
    const url = `products/${name}`;
    return axiosClient.get(url,  params);
  },
  //
  getProductById(name, id) {
    const url = `products/${name}/${id}`;
    return axiosClient.get(url);
  },
  updateProductById(name, id, params) {
    const url = `products/${name}/${id}`;
    return axiosClient.patch(url, params);
  },
  createProduct(name, params) {
    const url = `products/${name}`;
    return axiosClient.post(url, params);
  },
  deleteProductById(name, id) {
    const url = `products/${name}/${id}`;
    return axiosClient.delete(url);
  },

  postOrder( params) {
    const url = `products/checkout`;
    return axiosClient.post(url, params);
  },


  getSearch(params) {
    const url = "products/tim-kiem";
    return axiosClient.get(url, { params });
  },
  //   Get Product Sale
  getHotSale(params) {
    const url = "/hot-sale";
    return axiosClient.get(url, { params });
  },
  getHotProduct(pathName) {
    const url = `/products/${pathName}-hot`;
    return axiosClient.get(url);
  },
};

export default productApi;
