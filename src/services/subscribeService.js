import axiosInstance from "@/utils/axiosInstance";

export const subscribeService = {
  postSubscribe(payload = {}) {
    return axiosInstance.post(`/subscribe`, payload, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
};
