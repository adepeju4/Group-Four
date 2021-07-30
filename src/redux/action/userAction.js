import axios from 'axios';
import { loginTypes } from "../type/loginType";

export const login = (email, password) => async (dispatch) => {
    dispatch({type: loginTypes.LOGIN_REQUEST});
    try {
        const {data} = await axios.post('/api/login', {email, password})
        dispatch({type: loginTypes.LOGIN_SUCCESS, payload: data})
        localStorage.setItem('userToken', JSON.stringify(data));
    } catch (err) {
        dispatch({
            type: loginTypes.LOGIN_FAIL,
            payload: err.message
        });
    }
};