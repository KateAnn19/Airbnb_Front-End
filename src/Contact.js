import React, { useState, useEffect } from "react";
import axios from "axios";
import { axiosWithAuth } from "./utils/AxiosWithAuth";
import { Link, useHistory } from "react-router-dom";
import './style.css'


const Contact = () => {
  return (
    <>
      <body>
        <header className="contact-header">
          <h6>Landbnb</h6>
          <nav>
          <Link to="/">Home</Link>
          <Link to="/market">Overview</Link>
          <Link to="/safety">Safety</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/login">Get Started</Link>
          {/* <Link href="https://front-end-1-two.vercel.app/login">Get Started</Link> */}
        </nav>
        </header>
        <section>
          <div class="ourTeam">
            <h1>Reach Our Team</h1>
            <p class="text1">
              {" "}
              We love questions and feedback - and we're always happy to help!{" "}
              <span>Here are some ways to contact us</span>
            </p>
          </div>
          <div class="salesSup">
            <div>
              <h3>Talk to Sales</h3>
              <p class="sales">
                Chat with out sales team to dicover how our service can work
                best for you
              </p>
              <a class="number" href="tel:+13115552368">
                <i class="fa fa-phone" aria-hidden="true"></i> 564-495-5465
              </a>
            </div>
            <div>
              <h3>General Support</h3>
              <p class="sales">
                We are waiting to help you and your team - so don't hesitate to
                reach out
              </p>
              <button class="button">Contact Support</button>
            </div>
          </div>
        </section>
        <footer>
          <div class="headquarter">
            <h3>Headquarters</h3>
            <address>
              <i class="fa fa-compass" aria-hidden="true"></i>
              San Francisco, United States<br></br>
              <i class="fa fa-map-marker" aria-hidden="true"></i> 1 Warriors Way
              <br />
              <a class="email" href="mailto:contact-us@compnay.com">
                <i class="fa fa-envelope-o" aria-hidden="true"></i>
                contact-us@company.com
              </a>
              <br></br>
              <a class="number" href="tel:+13115552368">
                <i class="fa fa-phone" aria-hidden="true"></i> 564-495-5465
              </a>
            </address>
          </div>
          <div>
            <iframe
              title="mysecondframe"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44951.178250525445!2d-122.38324420230364!3d37.778325688036226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7d6793e3d8a141e3!2sChase%20Center!5e0!3m2!1sen!2sus!4v1595912897035!5m2!1sen!2sus"
              style={{
                width: "60",
                height: "650",
                frameborder: "0",
                style: "border:0",
                allowfullscreen: "",
                ariaHidden: "false",
                tabIndex: "0",
              }}
            ></iframe>
          </div>
        </footer>
      </body>
    </>
  );
};
  export default Contact;