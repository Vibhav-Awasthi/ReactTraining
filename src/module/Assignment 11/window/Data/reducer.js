import {
  FETCH_ERROR,
  FETCH_REQUEST,
  FETCH_SUCCESS,
} from "../../actionName";

export const initialState = {
  loading: false,
  post: [],
  error: "",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case FETCH_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_SUCCESS:
      return {
        loading: false,
        post: action.payload,
        error: "",
      };

    case FETCH_ERROR:
      return {
        loading: false,
        post: [],
        error: "Something went Wrong!",
      };

    default:
      return state;
  }
};
