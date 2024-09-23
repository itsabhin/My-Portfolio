import React from 'react'
import './Foot.css'
import footlogo from '../../assets/logoportfolio.png'
import mail from '../../assets/mailicon.png'
const Foot = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={footlogo} height={100} alt="" />
                <p>I'm a frontend developer from Ghaziabad,India . I'm fresher  student completing my bachelor's degree in the year 2025. </p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={mail} alt="" />
                    <input type="email" placeholder='Enter your email' />
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>
        </div>
        <hr />
        <div className="footer-bottom">
            <p className="footer-bottom-left">@ 2024 Abhin Sharma. All rights reserved</p>
            <div className="footer-bottom-right">
                <p>Term of Services</p>
                <p>Privacy policy</p>
                <p>Connect with me</p>
            </div>
            </div>
    </div>
  )
}

export default Foot