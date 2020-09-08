import React, { useState, useEffect } from "react";
import axios from "axios";
import { axiosWithAuth } from "./utils/AxiosWithAuth";
import { Link, useHistory } from "react-router-dom";
import './styles/style.scss'


const Safety = () => {
    
      
    return (
    <div>
    <body>
    <section id="safety-header">
      <div class="logo-nav-container">
        <div class="logo">
          <i class="fas fa-search-dollar"></i>
          <h1>landbnb</h1>
        </div>
        <nav class="nav-container">
          <Link to="/">Home</Link>
          <Link to="/market">Overview</Link>
          <Link to="/safety">Safety</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/login">Get Started</Link>
          {/* <Link href="https://front-end-1-two.vercel.app/login">Get Started</Link> */}
        </nav>
      </div>
      <div class="slogan-container">
        <div class="slogan">
          <h2>Safety</h2>
        </div>
        </div>
    </section>
    <section id="homepage-about">
      <div class="about-container">
        <div class="about-text">
          <div class="about-heading">
            <h3>
              Staying Safe During COVID-19
            </h3>
          </div>
          <div class="about-subheading">
            <h4>
              We now offer safety tips to help you stay safe during this global pandemic.
            </h4>
          </div>
          <div class="safety-list"> 
            <li>Reduce potential exposure to the virus by <span>wearing a mask</span>.</li>
            <li>Share your <span>cleaning procedures</span> in your listings.</li>
            <li>Consider implementing <span>keyless entry</span> to limit face-to-face contact.</li>
          </div>
        </div>
      </div>
    </section>
    <section id="homepage-call-to-action">
      <div class="cta-text">
        <h3>Get started today!</h3>
        <Link to='/login'><button>Sign Up</button></Link>
      </div>
    </section>
    <section id="footer">
      <div class="footer-container">
        <div class="copyright">
          <p>© 2020 Landbnb, Inc. All rights reserved</p>
        </div>
        <div class="footer-container-right">
          <div class="language"><p>English</p></div>
          <div class="currency"><p>$ USD</p></div>
          <div class="social-icons">
            <a href="https://www.instagram.com/"
              ><i class="fab fa-facebook-f"></i
            ></a>
            <a href="https://www.twitter.com/"
              ><i class="fab fa-twitter"></i
            ></a>
            <a href="https://www.instagram.com/"
              ><i class="fab fa-instagram"></i
            ></a>
          </div>
        </div>
      </div>
    </section>
  </body>
</div>
    );
  };
  export default Safety;