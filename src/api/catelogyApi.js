import axiosClient from "./axiosClient";

const categoriesApi = {
  getAll(params) {
    const url = "catelogies";
    return axiosClient.get(url, { params });
  },
};

export default categoriesApi;
