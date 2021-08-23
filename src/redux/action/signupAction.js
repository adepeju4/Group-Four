import Axios from 'axios';
import baseUrl from "../../utils/BaseUrl";
import { types } from "../type/type";


export const register = (name, email, password, confirmPassword, history) => async (dispatch) => {
    dispatch({type: types.REGISTER_REQUEST});
    try {
        const {data} = await Axios.post(`${baseUrl}/api/register`, {
            name, email, password, confirmPassword
            });
          dispatch({type: types.REGISTER_SUCCESS, payload: data});
          history.push("/login");
          localStorage.setItem('userToken', JSON.stringify(data));
    } catch (error) {
        dispatch({
            type: types.REGISTER_FAIL,
            payload: error.message
        });
    }
  };
