import React, { useState, useEffect } from "react";
import axios from "axios";
import { axiosWithAuth } from "./utils/AxiosWithAuth";
import { Link, useHistory } from "react-router-dom";
import './styles/style.scss'


const HomePage = () => {
    
    return (
    <body>
    <section id="homepage-header">
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
          <h2>Find the Optimal Price for Your Airbnb</h2>
        </div>
        <div class="header-button">
        <button>Start for Free</button>
          {/* <a href="https://front-end-1-two.vercel.app/login"></a> */}
        </div>
      </div>
    </section>
    <section id="homepage-about">
      <div class="about-container">
        <div class="about-text">
          <div class="about-heading">
            <h3>
              Our Formula
            </h3>
          </div>
          <div class="about-subheading">
            <h4>
              We factor in location, amenities and property features to
              calculate the best price for your Airbnb.
            </h4>
          </div>
        </div>
        <div class="about-images">
          <div class="about-location">
            <img
              src="https://images.unsplash.com/photo-1524850011238-e3d235c7d4c9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=787&q=80"
              alt="Woman pointing on a paper map"
            />
            <div class="location"><p>Location</p></div>
          </div>
          <div class="about-time">
            <img
              src="https://images.unsplash.com/photo-1563103123-8efe739386f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
              alt="Old tv on a stand"
            />
            <div class="time"><p>Amenities</p></div>
          </div>
          <div class="about-features">
            <img
              src="https://images.unsplash.com/photo-1562010781-09d950583805?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=806&q=80"
              alt="Balcony with a view"
            />
            <div class="features-text"><p>Property Features</p></div>
          </div>
        </div>
      </div>
    </section>
    <section id="homepage-call-to-action">
      <div class="cta-text">
        <h3>Sign up now to increase your income!</h3>
        <a href="https://front-end-1-two.vercel.app/login"><button>Sign Up</button></a>
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
    );
  };
  export default HomePage;