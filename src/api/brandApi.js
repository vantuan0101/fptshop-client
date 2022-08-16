import axiosClient from "./axiosClient";

const brandApi = {
  getAllBrand(nameBrand) {
    const url = `brands/${nameBrand}`;
    return axiosClient.get(url);
  },
  getBrandByName(nameBrand, name) {
    const url = `brands/${nameBrand}/${name}`;
    return axiosClient.get(url);
  },
  updateBrandById(nameBrand, id, params) {
    const url = `brands/${nameBrand}/${id}`;
    return axiosClient.patch(url, params);
  },
  createBrand(nameBrand, params) {
    const url = `brands/${nameBrand}`;
    return axiosClient.post(url, params);
  },
  deleteBrandById(nameBrand, id) {
    const url = `brands/${nameBrand}/${id}`;
    return axiosClient.delete(url);
  },
};
export default brandApi;