import { cartTypes } from '../type/cartTypes';

const initialState = {
    dishes: []
}

export const cartReducers = (state = initialState, action) => {
    switch (action.type){
        case cartTypes.ADD_TO_CART:
           return{
               ...state,
               dishes: state.dishes.map(dish=> dish.id === action.id ? {...dish, selected: true} : dish),

            };

        case cartTypes.REMOVE_FROM_CART: 
        return {
            ...state,
            dishes: state.dishes.map(dish => dish.id === action.id ? {...dish, selected: false} : dish),
        }

        default:
            return state
    }

    }