import {ADD_TO_WISHLIST} from "../action-types";

export const addToWishList = (product) => ({
    type: ADD_TO_WISHLIST,
    payload: product
})
