import axios from "axios";
import baseUrl from "../../utils/BaseUrl";

import { productsTypes, productTypes, reviewsTypes } from "../type";

const getProducts = (data) => {
  return {
    type: productsTypes.SET_PRODUCTS,
    data: data,
    pending: true
  };
};
const getProduct = (data) => {
  return {
    type: productTypes.SET_PRODUCT,
    data: data,
    pending: true
  };
};

const createReview = (data) => {
  return {
    type: reviewsTypes.SET_REVIEW,
    data: data,
  };
};

export const getProductsAsync = () => async (dispatch) => {
  try {
    let res = await axios.get(`${baseUrl}/dishes/list`);

    console.log(res, "response");

    
    dispatch(getProducts(res.data.dishes));
  } catch (err) {
    console.log(err);
  }
};

export const getProductAsync = (id) => async (dispatch) => {
  try {
    let res = await axios.get(`${baseUrl}/dishes/${id}`);
    console.log(res, "response");

    console.log(baseUrl, "base url");
    dispatch(getProduct(res.data.data));
  } catch (err) {
    console.log(err);
  }
};

export const createReviewAsync = (data) => async (dispatch) => {
  const { dishId } = data;
  try {
    let res = await axios.post(`${baseUrl}/dishes/${dishId}/reviews`, data);
    console.log(res, "response");

    console.log(baseUrl, "base url");
    dispatch(createReview(res.data.data));
  } catch (err) {
    console.log(err.message);
  }
};
