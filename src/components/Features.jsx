import React from 'react'
import { about_banner, shapered, verified, friedrice } from '../assets'
import './Styles/Features.css'

function Features() {


    return (
            <div className='feature-container'>
                <div className='container-img'>
                    <img src={friedrice} className='banner-img rounded-image' />
                    <img src={shapered} className='sale-icon' />
                </div>

                <div className='feature-info'>
                    <h1 className='feature-heading'>Hungry Eye, Banga, and Best Rice <span id='span'>in Nigeria!</span></h1>
                    <p className='feature-info-desc'>Local Favorites: Discover the authentic flavors of Nigeria with dishes like Afang, Ewedu, Efo Riro, Egusi, Ogbono, Seafood Okro, and Banga, paired with your choice of swallow—fufu, semo, poundo, starch, eba, or wheat. Enjoy classics like Jollof rice, fried rice, coconut rice, Chinese rice, village rice, Jollof pasta, and moi moi, alongside a wide array of traditional meals.</p>
                    <div className='features'>
                        <p> <img src={verified} width="15px"/> Delicious & Healthy Foods</p>
                        <p><img src={verified}width="15px"/> Fastest Food Home Delivery</p>
                    </div>
                    {/* <button className='button feature-button'>Order Now</button> */}
                </div>
            </div>
    )
}

export default Features