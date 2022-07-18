import cart from "./cart";
import wishList from "./wishList";
import products from "./products";
import {combineReducers} from "redux";


export const reducers = combineReducers({
    cart: cart,
    wishList: wishList,
    products: products,
})