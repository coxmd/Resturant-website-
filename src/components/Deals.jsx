import React from 'react'
import './Styles/Deals.css'
import { banner1, banner2, banner3, banner4, beans, edikangsoup, jollofrice, egusisoup } from '../assets'
import { Link } from 'react-router-dom'

function Deals() {
    return (
        <div className='deals-container'>
        <ul className="banner-list">

            <li className="banner-item banner-lg">
                <div className="banner-card">

                    <img src={beans} width="550" height="450" loading="lazy"
                        alt="Discount For Delicious Tasty Beans!" className="deal-img" />
                    <div className="banner-item-content">
                        <p className="banner-subtitle">50% Off Now!</p>
                        <h3 className="banner-title">Discount For Delicious Tastes!</h3>
                        <p className="banner-text">Sale off 50% only this week</p>
                        <Link to="/shop"><button className="button">Order Now</button></Link>
                    </div>

                </div>
            </li>

            <li className="banner-item banner-sm">
                <div className="banner-card">

                    <img src={edikangsoup} width="550" height="465" loading="lazy" alt="Delicious Soup"
                    className="deal-img" />

                        <div className="banner-item-content">
                        <h3 className="banner-title">Delicious Soup</h3>
                        <p className="banner-text">50% off Now</p>
                        <Link to="/shop?catagory=Soups"><button className="button">Order Now</button></Link>
                    </div>
                </div>
            </li>

            <li className="banner-item banner-sm">
                <div className="banner-card">

                    <img src={jollofrice} width="550" height="465" loading="lazy" alt="American Burgers"
                    className="deal-img" />

                    <div className="banner-item-content">
                        <h3 className="banner-title">Fried Rice</h3>
                        <p className="banner-text">50% off Now</p>
                        <Link to="/shop?catagory=Cereals"><button className="button">Order Now</button></Link>
                    </div>

                </div>
            </li>

            <li className="banner-item banner-md">
                <div className="banner-card">

                <img src={egusisoup} width="550" height="220" loading="lazy" alt="Tasty Soups"
                    className="deal-img" />

                <div className="banner-item-content">
                    <h3 className="banner-title">Egusi Soup</h3>
                    <p className="banner-text">Sale off 50% only this week</p>
                    <Link to="/shop"><button className="button">Order Now</button></Link>
                </div>

                </div>
            </li>

        </ul>
        </div>
    )
}

export default Deals