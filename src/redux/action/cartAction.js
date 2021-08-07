import {cartTypes} from '../type/cartTypes';
import axios from 'axios';

export const addToCart = (id, qty ) => async (dispatch, getState) => {
    const url = 'http://localhost:8000/';
    const { data } = await axios.get(`${url}dishes`);

    dispatch ({
        type: cartTypes.ADD_TO_CART,
        payload: {
            product: data.dish.id,
            name: data.dish.name,
            image: data.dish.image,
            price: data.dish.price,
            countInStock: data.dish.countInStock,
            qty
        },
    });
    localStorage.setItem('cart', JSON.stringify(getState().cart.cartDish));
}

export const removeFromCart =  (id) => ( dispatch, getState ) => {
    dispatch({
        type: cartTypes.REMOVE_FROM_CART,
        payload: id
    });
    localStorage.setItem('cart', JSON.stringify(getState().cart.cartDish));
}