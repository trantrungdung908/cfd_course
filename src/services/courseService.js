import axiosInstance from "@/utils/axiosInstance";

export const courseService = {
  getAllCourses(query = "") {
    return axiosInstance.get(`/courses${query}`);
  },
  getCourseBySlug(slug = "") {
    return axiosInstance.get(`/courses/${slug}`);
  },
};
