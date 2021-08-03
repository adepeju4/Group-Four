import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from "redux-logger";
import thunk from "redux-thunk";

import { cartReducer } from './cartReducers'
import { productsReducer } from "./productsReducer";

const reducer = combineReducers({
    cart: cartReducer,
    product: productsReducer
});

const middleware = [logger, thunk];

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
    );

export default store;
