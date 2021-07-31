import axios from "axios";
import { productsTypes } from "../type";

export const getProducts = (params) => async (dispatch) => {
  dispatch({ type: productsTypes.SET_PENDING, pending: true });
  try {
    return axios
      .get("http://localhost:8000/dishes", params)
      .then((res) => {
        if (res?.data?.length) { //TODO
            dispatch({ type: productsTypes.SET_PRODUCTS, data: res.data });
        } else {
          dispatch({
            type: productsTypes.SET_ERROR,
            error: `Couldn't fetch products`,
          }); //TODO
        }
      });
  } catch (err) {
      dispatch({ type: productsTypes.SET_ERROR, error: err.message || `Couldn't fetch products` }); //TODO
  }
};