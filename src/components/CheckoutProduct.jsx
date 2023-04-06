import React from 'react'
import "./CheckoutProduct.css"
import { useStateValue } from '../context/StateProvider'

function CheckoutProduct({ id, title, image, price, rating }) {
    const [{basket}, dispatch] = useStateValue();
    const removeFromBasket = () =>{
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        })
    }
    return (
        <div className='checkout_product'>
            <img className='checkout_product_img' src={image} alt='image'></img>
            <div className='checkout_product_info'>
                <p className='checkout_product_title'>{title}</p>
                <p className='checkout_product_price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className='checkout_product_rating'>
                    {
                        Array(rating)
                            .fill()
                            .map((_) => (
                                <p className='rating_stars'>⭐</p>))
                    }
                </div>
                <button onClick={removeFromBasket}>Remove from basket</button>


            </div>

        </div>
    )
}

export default CheckoutProduct