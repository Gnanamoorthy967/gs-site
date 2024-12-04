import React from "react";
import "./Footer.css";
import logo from '../Assets/logo.png'
import { NavLink } from "react-router-dom";
import Login from "./Header/login/login";
import Signup from './Header/buttons/signup/signup';





const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid py-1">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <nav className="shift">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <NavLink className="navbar-brand fw-bold mx-5" to="/"> <img src={logo} alt="Logo" /></NavLink>
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page"
                  to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/product"> Product</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about"> About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact"> Contact</NavLink>
              </li>


            </ul></nav>
    {/* <nav class="shift">
    <ul>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/product">product</NavLink></li>
      <li><NavLink to="/about"> about</NavLink></li>
      <li><NavLink to="/contact">contact</NavLink></li>
     
    </ul>
  </nav> */}
      
            <Login />
            <Signup />
           
          </div>

        </div>
      </nav>
    </>
  );
};

export default Header;
