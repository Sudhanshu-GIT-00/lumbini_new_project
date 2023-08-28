import React from "react";
import logo from '../Assests/lumbini-logo.jpg'

const Navbar=()=>{
return(
    <nav className="bg-white px-4 pt-4 pb-1 flex justify-between items-center">
      <div className="flex items-center">
        <a href="/">
        <img className="h-20 w-50 mr-2" src={logo} alt="Logo" />
        </a>
        
        
      </div>
      <ul className="flex space-x-8 mx-8 ">
        <li>
          <a className="hover:text-green-700" href="/">Home</a>
        </li>
        <li>
          <a className="hover:text-green-700" href="/about">About Us</a>
        </li>
        <li>
          <a className="hover:text-green-700" href="/services">Services</a>
        </li>
        <li>
          <a className="hover:text-green-700" href="/projects">Projects</a>
        </li>
        <li>
          <a className="hover:text-green-700" href="/jobs">Jobs</a>
        </li>
        <li>
          <a className="hover:text-green-700" href="/contactus">Contact us</a>
        </li>
      </ul>
    </nav>
);    

}
export default Navbar;