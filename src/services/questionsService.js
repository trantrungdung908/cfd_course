// services/questionService.js
import axiosInstance from "@/utils/axiosInstance";

export const questionService = {
  getQuestions(query = "") {
    return axiosInstance.get(`/questions${query}`);
  },
  getQuestionsByID(id = "") {
    return axiosInstance.get(`/questions/${id}`);
  },
};
