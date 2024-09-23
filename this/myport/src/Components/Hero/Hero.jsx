import React from 'react'
import './Hero.css'
import profile_img from '../../assets/cartoonboi.jpg'

export const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img}  height={200} className='profile-img'     alt="" />
        <h3><span>I'm Abhin Sharma</span> ,frontend Developer based in India.</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis suscipit dolores quasi.</p>
        <div className="hero-action">
            <div className="hero-connect">Connect with me</div>
            <div className="hero-resume">My RESUME</div>
        </div>
    </div>  
  )
}
