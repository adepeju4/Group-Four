import { combineReducers } from 'redux';
import { loginReducer } from './loginReducer';
import { productsReducer } from './productsReducer'
import { productReducer } from './productReducer'
import { signupReducer } from './signupReducer';

const rootReducer = combineReducers({
  userRegistration: signupReducer,
  userLogin: loginReducer,
  products: productsReducer,
  product: productReducer,
});

export default rootReducer;
