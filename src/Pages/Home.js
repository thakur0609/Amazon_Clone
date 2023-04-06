import React from 'react'
import banner from "../images/amazon_banner.jpg"
import './Home.css'
import Product from '../components/Product'
import img1 from "../images/product_1.webp"
import img2 from "../images/product_2.jpg"
import img3 from "../images/product_3.jpg"
import img4 from "../images/product_4.2.jpg"
import img5 from "../images/product_5.jpg"
import img6 from "../images/product_6.jpg"

function Home() {
    return (
        <div className='home'>
            <img className='home_image' src={banner} alt='amazon_banner'></img>
            <div className='home_row'>
                <Product
                    id='12345'
                    title='The Lean Startup: How Constant Innovation Creates Successful Buisness.'
                    price={99}
                    rating={5}
                    image={img1}
                />
                <Product
                    id='123456'
                    title='Fire-Boltt Ninja Call Pro Plus 1.83" Smart Watch with Bluetooth Calling.'
                    price={99}
                    rating={4}
                    image={img2}
                />
            </div>
            <div className='home_row'>
                <Product
                    id='123457'
                    title='JBL C115 True Wireless in Ear Earbuds with Mic, 21 Hours Playtime.'
                    price={99}
                    rating={3}
                    image={img3}
                />
                <Product
                    id='123458'
                    title='Strauss Adjustable Hand Grip| Adjustable Resistance (10KG - 40KG).'
                    price={99}
                    rating={4}
                    image={img4}
                />
                <Product
                    id='123459'
                    title=' Boldfit Yoga Mats For Women yoga mat for men Exercise mat for home workout'
                    price={99}
                    rating={4}
                    image={img5}
                />
            </div>
            <div className='home_row'>
                <Product
                    id='12346'
                    title='OnePlus 138 cm (55 inches) Y Series 4K Ultra HD Smart Android LED TV 55Y1S Pro (Black)'
                    price={99}
                    rating={5}
                    image={img6}
                />
            </div>

        </div>
    )
}

export default Home