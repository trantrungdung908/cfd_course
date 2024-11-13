import axiosInstance from "@/utils/axiosInstance";

export const orderService = {
  getOrderMyPayment(query = "") {
    return axiosInstance.get(`/orders/me${query}`);
  },

  getOrderMyCourses(query = "") {
    return axiosInstance.get(`/orders/courses/me${query}`);
  },

  postOrder(payload = {}) {
    return axiosInstance.post("/orders", payload);
  },
};
