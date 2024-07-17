import React from 'react'
import { BsGooglePlay } from 'react-icons/bs'
import { LuConstruction } from 'react-icons/lu'
import { MdBoy, MdConstruction } from 'react-icons/md'
import { deliveryboy, footer } from '../assets'
import './Styles/Footer.css'
import { FaFacebookSquare, FaInstagram, FaPinterest, FaTwitter } from 'react-icons/fa'
function Footer() {
    return (
        <div>
            <div className='footer'>

                <div className='footer-list list-1'>
                    <h2  className="logo">DineEase.</h2>
                    <p>Financial experts support or help you to to find out which way you can raise your funds more.</p>
                    <div className='icons'>
                        <h2><FaFacebookSquare /></h2>
                        <h2><FaInstagram /></h2>
                        <h2><FaTwitter /></h2>
                        <h2><FaPinterest /></h2>
                    </div>
                </div>

               <div className="footer-list">
          <h2>Contact Info</h2>
          <p style={{display :"flex", justifyContent:"inline"}}>
            <img
              src="https://img.freepik.com/premium-vector/whatsapp-icon-concept_23-2147897840.jpg"
             style={{height: "22px", }}
              alt=""
            />
            <a href="https://wa.me/+923189056206"> +92 3189056206</a>
          </p>
          <p> <a href="mailto:iambilalahmedraza@gmail.com">iambilalahmedraza@gmail.com</a></p>
          <p>Talagang Road Chakwal Punjab Pakistan</p>
        </div>

                <div className='footer-list'>
                    <h2>Opening Hours</h2>
                    <p>Monday-Friday: 08:00-22:00</p>
                    <p>Tuesday 4PM: Till Mid Night</p>
                    <p>Saturday: 10:00-16:00</p>
                </div>

                <div className='footer-list'>
                    <h2>Branches </h2>
                    <p>Monday-Friday: 08:00-22:00</p>
                    <p>Tuesday 4PM: Till Mid Night</p>
                    <p>Saturday: 10:00-16:00</p>
                </div>

            </div>
                <div className='footer-imgs'>
                    <img className='img-1' src={footer} />
                    <div className='footer-line'></div>
                </div>

                
        </div>
    )
}

export default Footer
