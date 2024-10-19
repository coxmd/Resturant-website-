import React from 'react'
import { herobg,herobannerbg, burger6 } from '../assets'
import bitterleaf from '../assets/Nigeria/bitterleafsoup.jpg'

import './Styles/Hero.css'
function Hero() {

    const containerStyle = {
        backgroundImage: `url(${herobg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '90vh',
    };
    const burgerstyle = {
        backgroundImage: `url(${herobannerbg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }
    return (
        <div className='hero-container' style={containerStyle}>
            <div className='hero-info'>
                <h6>Eat Sleep And</h6>
                <h1 className='hero-heading'>Supper delicious Food!</h1>
                <p className='hero-discription'>Hungry Eye is a cutting-edge meal delivery service that brings your favorite restaurant meals straight to your doorstep.</p>
                <button className='button'>Order Now</button>
            </div>
            <div  className='burger' style={burgerstyle}>
                <img  src={bitterleaf} width={550} className="rounded-image"/>
            </div>
        </div>
    )
}

export default Hero