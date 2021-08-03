/* eslint-disable no-case-declarations */
            // eslint-disable-next-line no-case-declarations
import { cartTypes } from '../type/cartTypes';

export const cartReducer = (state = { cartDish: []}, action) => {
    switch (action.type){
        case cartTypes.ADD_TO_CART:
            const dish = action.payload;

            const existDish = state.cartDish.find((x) => x.product === dish.product);

            if(existDish){
                return {
                    ...state,
                    cartDish: state.cartDish.map((x) =>
                     x.product === existDish.product ? dish : x
                     ),
                };
            }else {
                return {
                    ...state, 
                    cartDish: [ ...state.cartDish, dish]
                };
            }

            case cartTypes.REMOVE_FROM_CART:
                return{
                    ...state, 
                    cartDish: state.cartDish.filter((x) => x.product !== action.payload),
                };

            default:
                return state;
    }
}