import React from 'react';
import './Footer.css'
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className='footer-content'>
            <div className='footer-content-left'>
                <img src={assets.logo} alt='logo'/>
                <p>lorem ipsum ysbg polg ploj lorem jnokm yabrss this eas that much so eadt yi indusrty level comptition in thw lorem ipsum ysbg polg ploj lorem jnokm yabrss this eas that much so eadt yi indusrty level comptition in thw</p>
                <div className='footer-social-icons'>
                    <img src={assets.facebook_icon} alt='logo'/>
                    <img src={assets.twitter_icon} alt='logo'/>
                    <img src={assets.linkedin_icon} alt='logo'/>
                </div>
            </div>
            <div className='footer-content-center'>
                <h2>YABESH RESTAURANT</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className='footer-content-right'>
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91 8946009278</li>
                    <li>contact@yabesh.com</li>
                </ul>
            </div>
        </div>
        <hr/>
        <p className='footer-copyright'>Copyright 2025 yabesh.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer