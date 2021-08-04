import Axios from 'axios';
import { types } from "../type/type";


export const register = (values) => async (dispatch) => {
    dispatch({type: types.REGISTER_REQUEST});
    try {
        const {data} = await Axios.post('/api/register', {
            values,
          })
          dispatch({type: types.REGISTER_SUCCESS, payload: data})
          localStorage.setItem('userToken', JSON.stringify(data));
    } catch (error) {
        dispatch({
            type: types.REGISTER_FAIL,
            payload: error.message
        });
    }
    
  };
