import axiosInstance from "@/utils/axiosInstance";

export const rateService = {
  getAllRates(query = "") {
    return axiosInstance.get(`/rates${query}`);
  },

  getRateBySlug(slug = "") {
    return axiosInstance.get(`/rates/${slug}`);
  },
};
