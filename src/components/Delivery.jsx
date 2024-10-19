import React, { useState, useEffect } from 'react';
import { deliverybg, deliveryboy } from '../assets'
import './Styles/Delivery.css'

function Delivery() {
    const clouds = {
        backgroundImage: `url(${deliverybg})`,
        backgroundSize: 'contain',
    }

    const [deliveryBoyMove, setDeliveryBoyMove] = useState(-80);
    const [lastScrollPos, setLastScrollPos] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const deliveryBoyElement = document.querySelector("[data-delivery-boy]");
            const deliveryBoyTopPos = deliveryBoyElement.getBoundingClientRect().top;

            if (deliveryBoyTopPos < 500 && deliveryBoyTopPos > -250) {
                const activeScrollPos = window.scrollY;

                if (lastScrollPos < activeScrollPos) {
                    setDeliveryBoyMove((prevMove) => prevMove + 1);
                } else {
                    setDeliveryBoyMove((prevMove) => prevMove - 1);
                }

                setLastScrollPos(activeScrollPos);
            }
        };

    window.addEventListener('scroll', handleScroll);

    return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollPos]);

    return (
        <div className='delivery-container'>
            <div className='delivery-content'>
                <h1>A Moments Of Delivered On <span id='span'>Right Time</span>  & Place</h1>
                <p>Partnering with top restaurants across Lagos Island, we deliver fresh, mouthwatering meals to individuals, events, corporate settings, and organizations. Whether it’s for a celebration or a casual meal, every dish is crafted with care and love—promising flavors you've never experienced before.</p>
                {/* <button className='button'>Order Now</button> */}
            </div>
            <div className='delivery-imgs' style={clouds} >
                <img data-delivery-boy style={{ transform: `translateX(${deliveryBoyMove}px)` }} src={deliveryboy} alt="not found" width="350px" />
            </div>
        </div>
    )
}

export default Delivery