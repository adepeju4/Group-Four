import { cartTypes } from "../type/cartTypes";
import axios from "axios";
import baseUrl from "../../utils/BaseUrl";
// import baseUrl from "../../utils/BaseUrl";

const getCartItems = (data) => {
  return {
    type: cartTypes.ADD_TO_CART,
    data: data,
    pending: false
  };
}


const deleteCartItem = () => {
  return {
    type: cartTypes.REMOVE_FROM_CART

  };
}


export const postCartItemsAsync = (id) => async() => {
  try {
    const userToken = localStorage.getItem("userToken");
    const objectToken = JSON.parse(userToken);
    const { token } = objectToken;
   
    console.log(token);
    let res = await axios.post(`https://${baseUrl}/cart/${id}`, { id }, {
      headers: {
        'Authorization': `${token}`,
      }   
  });
    console.log(res, "cart for post o")
  } catch (err) {
    console.log(err);
  }
}
export const getCartItemsAsync = (userId) => async(dispatch) => {
  try {
    
    let res = await axios.get(`https://${baseUrl}/cart/${userId}`);
    dispatch(getCartItems(res.data))
    console.log(res.data , "cart responseeeee")
  } catch (err) {
    console.log(err);
  }
}

export const deleteCartItemAsync = (dishId) => async (dispatch) => {
  const userToken = localStorage.getItem("userToken");
    const objectToken = JSON.parse(userToken);
    const { token } = objectToken;
  try {
    let res = await axios.delete(
      `http://localhost:7000/cart/${dishId}`,
      { dishId },
      {
        headers: {
          Authorization: `${token}`,
        },
      }
    );
    dispatch(deleteCartItem(res.data));
    console.log(res, "delete response")
  } catch (err) {
    console.log(err);
  }
}