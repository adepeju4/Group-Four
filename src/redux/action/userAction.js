import axios from "axios";
import baseUrl from "../../utils/BaseUrl";
import { loginTypes } from "../type/loginType";

export const login = (email, password, history) => async (dispatch) => {
  dispatch({ type: loginTypes.LOGIN_REQUEST });
  try {
    const { data } = await axios.post(`${baseUrl}/api/login`, {
      email,
      password,
    });
    dispatch({ type: loginTypes.LOGIN_SUCCESS, payload: data });
    history.push("/");
    localStorage.setItem("userToken", JSON.stringify(data));
  } catch (err) {
    dispatch({
      type: loginTypes.LOGIN_FAIL,
      payload: err.message,
    });
  }
};
