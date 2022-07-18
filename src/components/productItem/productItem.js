export const ProductItem = ({
                                product
                                , product: {id, title, price, category}
                                ,onAddToWishList
                                ,onAddToCart,
                                isAddedToWishList
}) => {


    return (
        <div>
            <h5>{id}</h5>
            <h5>{title}</h5>
            <h5>{price}</h5>
            <h5>{category}</h5>
            <button style={{background: isAddedToWishList ? "red" : "green"}} onClick={() => onAddToWishList(product)}>{isAddedToWishList ? "remove from wishList" : "add to wish-list"}</button>
            <button onClick={() => onAddToCart(product)}>add to cart</button>
            <hr/>
        </div>
    )
}