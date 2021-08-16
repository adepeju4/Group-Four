import { loginTypes } from "../type/loginType";

const savedUser = JSON.parse(localStorage.getItem("userToken") || "{}");
const initialState = {
  isAuthenticated: !!savedUser?._id,
  user: {},
  isLoading: false,
  error: {},
  ...savedUser,
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case loginTypes.LOGIN_REQUEST:
      return { ...state, isLoading: true };
    case loginTypes.LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        user: action.payload,
      };
    case loginTypes.LOGIN_FAIL:
      return { ...state, isLoading: false, error: action.payload };
    case loginTypes.LOGOUT:
      return {};
    default:
      return state;
  }
};
