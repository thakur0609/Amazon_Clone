import React from 'react'
import './Subtotal.css';
import CurrencyInput from 'react-currency-input-field';
import { useStateValue } from '../context/StateProvider'
import { getbasketTotal } from '../context/Reduer';

function Subtotal() {
    const [{ basket }] = useStateValue();
    return (
        <div className='subtotal'>
            <p className='subtotal_title'>
                Subtotal ({basket.length} items): <strong>$ {getbasketTotal(basket)}</strong>
            </p>
            <small className='subtotal_gift'>
                <input type='checkbox'></input>
                <span>This order contains a gift</span>
            </small>
            <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal