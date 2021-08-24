import { cartTypes } from "../type/cartTypes";

const initialState = {
  dishes: [],
  pending: false
};

export const cartReducers = (state = initialState, action) => {
  switch (action.type) {
    case cartTypes.ADD_TO_CART: {
      const { data } = action;
      return { ...initialState, data };
    }
    case cartTypes.SET_PENDING: {
      const { pending } = action;
      return { ...initialState, pending };
    }
    default:
      return state;
  }
}
