import {SET_PRODUCTS} from "../action-types";
import {useServices} from "../../services";

// export const setProducts = (payload) => ({type: SET_PRODUCTS, payload: payload});

export const setProducts = () => async (dispatch) => {

    const { productService } = useServices();

    const response = await productService.getProducts();
    const json = await response.json();

    dispatch({type: SET_PRODUCTS, payload: json})
};