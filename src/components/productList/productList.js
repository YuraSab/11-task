import React from 'react';
import {ProductItem} from "../productItem";
import {useDispatch, useSelector} from "react-redux";
import {addToCart, setProducts, addToWishList} from "../../redux/action-creators";


export const ProductList = (props) => {


    let {products} = props;

    const dispatch = useDispatch();

    const onAddToWishList = (product) => {
        dispatch(addToWishList(product))
    };

    const onAddToCart = (product) => {
        dispatch(addToCart(product))
    };

    const {wishList} = useSelector(({wishList: {wishList}}) => ({wishList}));

    return (
        <div>
            {
                products.map(value => {
                    return(
                        <ProductItem
                            key = {value.id}
                            product = {value}
                            onAddToWishList = {onAddToWishList}
                            onAddToCart = {onAddToCart}
                            // якщо не найде - стане false
                            isAddedToWishList = {!!wishList.find(({id}) => id === value.id)}
                        />
                    )
                })
            }
        </div>
    );
};