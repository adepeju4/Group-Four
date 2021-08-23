import { types } from "../type/type";

const initialState = {
    isAuthenticated: false,
    user: {},
    isLoading: false,
    error: {}
};

export const signupReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.REGISTER_REQUEST:
            return { ...state, isLoading: true };
        case types.REGISTER_SUCCESS:
            return { ...state, isLoading: false, isAuthenticated: true, user: action.payload };
        case types.REGISTER_FAIL:
            return { ...state, isLoading: false, error: action.payload };
        case types.AUTH_ERROR: 
            return { };
        default:
            return state;
    }
}