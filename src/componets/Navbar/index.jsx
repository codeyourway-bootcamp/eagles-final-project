import React from "react";
import logo from '/Logo/Logo.png';


export default function Navbar() {
  return (
    <nav className="transparent">
    <div className="nav-wrapper">
      <a href="" className="brand-logo">Quick Opinion</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="#">Login</a></li>
       
      </ul>
    </div>
  </nav>
        
  );
}
