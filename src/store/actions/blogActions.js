import { blogService } from "@/services/blogService";

export const getBlogAction = (payload) => {
  return {
    type: "GET_BLOG",
    payload,
  };
};

export const getBlogApi = () => {
  return async (dispatch) => {
    try {
      const res = await blogService.getAllBlog();
      if (res?.data) {
        dispatch(getBlogAction(res.fullData));
      }
    } catch (error) {
      throw error;
    }
  };
};
