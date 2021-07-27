import { loginTypes } from "../type/loginType"

export const loginReducer = (state = {}, action) => {
    switch(action.type) {
        case loginTypes.LOGIN_REQUEST:
            return { isLoading: true }
        case loginTypes.LOGIN_SUCCESS:
            return { isLoading: false, user: action.payload }
        case loginTypes.LOGIN_FAIL:
            return { isLoading: false, error: action.payload }
        case loginTypes.LOGOUT: 
            return { }
        default:
            return state
    }
}