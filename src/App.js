import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Header from "./components/header/header";
import "./styles/App.css";
import {setProducts} from "./redux/action-creators";
import {ProductList} from "./components/productList";

function App() {

    const {wishList, cart, products} = useSelector(({wishList: {wishList}, cart: {cart}, products: {products}}) => ({wishList, cart, products}));

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setProducts());
    }, [dispatch]);

    return (
        <div>
            {products.length}
            <Header/>
            <ProductList products={products}/>
        </div>
    );
}

export default App;