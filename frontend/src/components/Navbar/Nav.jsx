import React from 'react'
import './Nav.css'
import '../../utility.css'
export default function Nav() {
  return (
    <div>
      <nav className="flex center poppins primary shadow">
       <div className="logo">
        <a href="" className="roboto">CodeEasy</a>
       </div>
       <div className="nav-links">
        <ul className="flex center">
          <li><a class="text-white" href="">Home</a></li>
          <li><a href="" class="text-white" >About Us</a></li>
          <li><a href="" class="text-white">Services</a></li>
          <li><a href="" class="text-white">Contact Us!</a></li>
        </ul>
       </div>
       <div className="flex center">
        <div>
         <a href="" class="success button shadow">Login</a>
        </div>
        <div>
         <a href="" class="danger button shadow ripple">Logout</a>
        </div>
       </div>
      </nav>
    </div>
  )
}