import { productTypes } from "../type";

const initialState = {
  data: null,
  pending: false,
  error: null,
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case productTypes.SET_PRODUCT: {
      const { data } = action;
      return { ...initialState, data };
    }
    case productTypes.SET_PENDING: {
      const { pending } = action;
      return { ...initialState, pending };
    }
    case productTypes.SET_ERROR: {
      const { error } = action;
      return { ...state, pending: false, error };
    }
    default:
      return state;
  }
};
