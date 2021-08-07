import { productsTypes } from "../type";

const initialState = {
  data: null,
  pending: false,
  error: null,
};

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case productsTypes.SET_PRODUCTS: {
      const { data } = action;
      return { ...initialState, data };
    }
<<<<<<< HEAD
};
=======
    case productsTypes.SET_PENDING: {
      const { pending } = action;
      return { ...initialState, pending };
    }
    case productsTypes.SET_ERROR: {
      const { error } = action;
      return { ...state, pending: false, error };
    }
    default:
      return state;
  }
};
>>>>>>> 898be4c637e9ae3396844b33a3aae93d686882a3
