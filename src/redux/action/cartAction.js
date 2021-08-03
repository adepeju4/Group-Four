import {cartTypes} from '../type';
import axios from 'axios';

export const addToCart = (id, qty ) => async (dispatch, getState) => {
    const { data } = await axios.get(`/dish/${id}`);

    dispatch ({
        type: cartTypes.ADD_TO_CART,
        payload: {
            product: data.dish.id,
            name: data.dish.name,
            image: data.dish.image,
            price: data.dish.price,
            size: data.dish.size,
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