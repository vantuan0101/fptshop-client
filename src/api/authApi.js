import axiosClient from "./axiosClient";
const authApi = {
    login(params) {
        const url = "users/login";
        return axiosClient.post(url, params);
    },
    register(params) {
        const url = "users/register";
        return axiosClient.post(url, params);
    },
    logout() {
        const url = "users/logout";
        return axiosClient.post(url);
      },

}
export default authApi;