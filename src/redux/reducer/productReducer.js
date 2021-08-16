import { productTypes, reviewsTypes } from "../type";

const initialState = {
  data: null,
  reviews: [],
  pending: false,
  error: null,
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case productTypes.SET_PRODUCT: {
      const { data } = action;
      return { ...initialState, data: data.getOneDish, reviews: data.reviews };
    }
    case productTypes.GET_FEATURED: {
      const { data } = action;
      return { ...initialState, data };
    }
    case reviewsTypes.SET_REVIEW: {
      const { data } = action;
      return { ...state, reviews: [...state.reviews, data] };
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
