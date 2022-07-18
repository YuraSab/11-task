import {ADD_TO_WISHLIST} from "../action-types";


const initialState = {
    wishList: []
};


export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_WISHLIST: {

            const updatedWishList = state.wishList.filter(
                el => el.id !== action.payload.id
            );

            // if element was existing (length had changed) - we drop this element
            if (updatedWishList.length === state.wishList.length) {
                updatedWishList.push(action.payload);
                // wishList: [...state.wishList, action.payload]
            }
            return {
                ...state,
                wishList: updatedWishList
            }
        }
        default: {
            return state;
        }
    }
};