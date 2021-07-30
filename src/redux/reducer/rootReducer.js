import { combineReducers } from 'redux';
import { loginReducer } from './loginReducer';


const rootReducer = combineReducers({
    userLogin: loginReducer
});

export default rootReducer;
