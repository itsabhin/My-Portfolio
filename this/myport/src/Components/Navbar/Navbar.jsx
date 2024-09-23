import React from 'react'
import './Navbar.css'
import logo from '../../assets/logoportfolio.png'
export const Navbar = () => {
//<i class="ri-menu-2-fill"></i>  for menu open
  //<i class="ri-menu-3-fill"></i>  for menu close
  return (
    <div className='navbar'>

     <img src={logo}  height={60} width={55}    alt="" />
     <ul className="nav-menu">
        <li>Home</li>
        <li>About me</li>
        <li>Services</li>
        <li>POrtfolio</li>
        <li>Contact</li>
     </ul>
     <div className="nav-connect">Connect with me</div>
    </div>
  )
}
