import { loginTypes } from "../type/loginType"

const initialState = {
    isAuthenticated: false,
    user: {},
    isLoading: false,
    error: {}
};

export const loginReducer = (state = initialState, action) => {
    switch(action.type) {
        case loginTypes.LOGIN_REQUEST:
            return { ...state, isLoading: true }
        case loginTypes.LOGIN_SUCCESS:
            return { ...state, isLoading: false, user: action.payload }
        case loginTypes.LOGIN_FAIL:
            return { ...state, isLoading: false, error: action.payload }
        case loginTypes.LOGOUT: 
            return { }
        default:
            return state
    }
}