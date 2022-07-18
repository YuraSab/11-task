import React from 'react';
import {useSelector} from "react-redux";
import "./header.css";

function Header() {

    const {wishList, cart, products} = useSelector(({wishList: {wishList}, cart: {cart}, products: {products}}) => ({wishList, cart, products}));


    return (
        <div className={"head"}>
            <div className={"title"}>
                My test shop
            </div>
            <div className={"baskets"}>
                <div>Wish-list: {wishList.length}</div>
                <div>Cart: {cart.length}</div>
            </div>
            {/*<h3>{products.length}</h3>*/}
        </div>
    );
}

export default Header;