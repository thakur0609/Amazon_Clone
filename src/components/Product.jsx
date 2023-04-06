import React from 'react'
import "./Product.css"
import { useStateValue } from '../context/StateProvider'
function Product({ id, title, image, price, rating }) {
    const [{basket},dispatch] = useStateValue();
    const addToBasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,

            }
        });
    }

    return (
        <div className='product'>
            <div className='product_info'>
                <p className='product_para'>{title}</p>
                <p className='product_price'><small>$</small><strong>{price}</strong></p>
                <div className='product_rating'>
                    {
                        Array(rating)
                            .fill()
                            .map((_) => (
                                <p className='rating_stars'>⭐</p>))
                    }
                </div>
            </div>
            <img src={image} alt='product_image'></img>
            <div className='product_btn' onClick={ addToBasket}><button>Add to Basket</button></div>
            
        </div>
    )
}

export default Product