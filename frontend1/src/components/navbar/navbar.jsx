import React from "react";
import "./navbar.css";
import {GiScrollUnfurled} from "react-icons/gi";

const Navbar=() =>{
    return( 
    <div>
      <nav classname="navbar navbar-expand-lg bg-body-tertiary">
        <div classname="container">
          <Link classname="navbar-brand" href="#">
            <b><GiScrollUnfurled/>&nbsp; MoonlitScroll</b>
          </Link>
          <button 
            classname="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarSupportedContent" 
            aria-controls="navbarSupportedContent" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >

          <span classname="navbar-toggler-icon"></span>
        </button>
          <div classname="collapse navbar-collapse" id="navbarSupportedContent">
          <ul classname="navbar-nav ms-auto mb-2 mb-lg-0">
          <li classname="nav-item mx=2">
            <Link classname="nav-link active" aria-current="page" href="#">
              Home
              </Link>
          </li>
          <li classname="nav-item mx=2" >
            <Link classname="nav-link active" aria-current="page" href="#">
              About Us
            </Link>
          </li>
          <li classname="nav-item mx=2" >
            <Link classname="nav-link active" aria-current="page" href="/todo">
              To Do
            </Link>
          </li>
          <li classname="nav-item mx=2" >
            <Link classname="nav-link active btn-nav" aria-current="page" href="/signin">
              Sign In
            </Link>
          </li>
          <li classname="nav-item mx=2">
            <Link classname="nav-link active btn-nav" aria-current="page" href="/signup">
              Sign Up
            </Link>
          </li>
          <li classname="nav-item mx=2">
            <Link classname="nav-link active btn-nav" aria-current="page" href="#">
              Log Out
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</div>);
};

export default Navbar;
