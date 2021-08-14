import { cartTypes } from "../type/cartTypes";
import axios from "axios";
import baseUrl from "../../utils/BaseUrl";

export const addToCart = (_id) => async (dispatch) => {
  const { data } = await axios.get(`${baseUrl}/dishes/${_id}`);
  console.log(data, "cart");
  dispatch({
    type: cartTypes.ADD_TO_CART,
    payload: {
      id: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
    },
  });
};

export const removeFromCart = (_id) => async (dispatch) => {
  const { data } = await axios.get(`${baseUrl}/dishes/${_id}`);
  dispatch({
    type: cartTypes.REMOVE_FROM_CART,
    id: data._id,
    name: data.name,
    image: data.image,
    price: data.price,
  });
};

export const emptyCart = () => {
  console.log("There is nothing in your cart");
};
