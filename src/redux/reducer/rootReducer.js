import { combineReducers } from "redux";
import { loginReducer } from "./loginReducer";
import { productsReducer } from "./productsReducer";
import { productReducer } from "./productReducer";

const rootReducer = combineReducers({
  userLogin: loginReducer,
  products: productsReducer,
  product: productReducer,
});

export default rootReducer;
