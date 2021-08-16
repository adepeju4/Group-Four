
import { combineReducers } from "redux";
import { loginReducer } from "./loginReducer";
import { productsReducer } from "./productsReducer";
import { productReducer } from "./productReducer";
import { signupReducer } from './signupReducer';
import { cartReducers } from "./cartReducers";

const rootReducer = combineReducers({
  userRegistration: signupReducer,
  userLogin: loginReducer,
  products: productsReducer,
  product: productReducer,
  cart: cartReducers,
});

export default rootReducer;
