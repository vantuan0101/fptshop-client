import axiosClient from "./axiosClient";

const catelogiesApi = {
  getAll(params) {
    const url = `catelogies`;
    return axiosClient.get(url, { params });
  },
  getCatelogiesById(id) {
    const url = `catelogies/${id}`;
    return axiosClient.get(url);
  },
  updateCatelogiesById(id, params) {
    const url = `catelogies/${id}`;
    return axiosClient.patch(url, params);
  },
  createCatelogies(params) {
    const url = `catelogies`;
    return axiosClient.post(url, params);
  },
  deleteCatelogiesById(id) {
    const url = `catelogies/${id}`;
    return axiosClient.delete(url);
  },
};

export default catelogiesApi;
