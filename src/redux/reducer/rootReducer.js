import { combineReducers } from 'redux';
import { loginReducer } from './loginReducer';
import { productsReducer } from './productsReducer'

const rootReducer = combineReducers({
    userLogin: loginReducer,
    products: productsReducer
});

export default rootReducer;
