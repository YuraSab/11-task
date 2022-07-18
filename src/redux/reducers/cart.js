import {ADD_TO_CART} from "../action-types";


const initialState = {
    cart: []
};


export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART: {
            const updatedCart = state.cart.filter(
                el => el.id !== action.payload.id
            );

            // if element was existing (length had changed) - we drop this element
            if (updatedCart.length === state.cart.length) {
                updatedCart.push(action.payload);
            }
            return {
                ...state,
                cart: updatedCart
            }
        }
        default: {
            return state
        }
    }
};