import axios from "axios";
import { productsTypes, productTypes } from "../type";

export const getProducts = (data) => async (dispatch) => {
  dispatch({ type: productsTypes.SET_PENDING, pending: true });
  try {
         return axios({
           method: "get",
           url: "http://localhost:8000/dishes",
           params: data,
         }).then((res) => {
           if (res?.data?.length) {
             //TODO
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

export const getProduct = (data) => async (dispatch) => {
  // dispatch({ type: productTypes.SET_PENDING, pending: true });
  try {
    return axios({
      method: "get",
      url: "http://localhost:8000/dishes",
      params: data,
    }).then((res) => {
      if (res?.data?.[0]) {
        dispatch({ type: productTypes.SET_PRODUCT, data: res.data[0] });
      } else {
        dispatch({
          type: productTypes.SET_ERROR,
          error: `Product not found`,
        }); //TODO
      }
    });
  } catch (err) {
    dispatch({
      type: productTypes.SET_ERROR,
      error: `Product not found`,
    }); //TODO
  }
}