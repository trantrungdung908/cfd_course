const initialState = {
  blogData: {},
};

const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_BLOG":
      return {
        ...state,
        blogData: action.payload,
      };

    default:
      return state;
  }
};

export default blogReducer;
