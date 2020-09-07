import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import './style.css'


const MarketPage = () => {
    return (
        <>
        <body>
        <header class="headerMar">
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
    <section id="marketSection">
        <div>
            <img class= "img" src="https://media.cntraveler.com/photos/5e18e330ac1cea00092e91d2/master/pass/airbnb-beach-dominican-6939168.jpeg" alt="wooden house interior"></img>
            <p class="parag"> Tinyhouse: 2 guests, 1 bed, 1 bath 
                <br></br>
                Description: Suspendisse dolor nisl, auctor ut felis eget, viverra tristique dui. Suspendisse tristique, lorem et ornare sollicitudin, est felis elementum arcu, eget rutrum dolor mi vel neque. Sed egestas finibus...
                <span>Price XXXXX</span>
            </p>
        </div>
        <div class= "reverse">
            <img class="img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQtV97zxNrWpUzPtvFxrzhWtAFVMdD592l6TA&usqp=CAU" alt="3floorhouse"></img>
            <p class="parag">Enormous house: 10 guests, 5 bed, 5 bath,2 swimming pool.
                <br></br>Description:. Suspendisse dolor nisl, auctor ut felis eget, viverra tristique dui. Suspendisse tristique, lorem et ornare sollicitudin, est felis elementum arcu, eget rutrum dolor mi vel neque. Sed egestas finibus. herasdrtdsse.
                <span>Price XXXXX</span>
            </p>
        </div>
        <div class="graph">
            <p class="paragGraph">
                With more hosts and guests using the Airbnb platform than ever before, it may become harder and harder to distinguish your listing. Pictures are worth a thousand words, as they say, but words can be important as well. An accurate, detailed description of your rental space may be the distinguishing factor for your listing! These word clouds were generated using reviews from happy guests at highly-rated Airbnb locations. The larger the word, the more frequently it appeared in those reviews (e.g. "private" and "neighborhood"). Highlighting these words in your listing's description may help you attract more guests, and drive up profits! 
            </p>
            <iframe title="myFrame" src="https://chart-studio.plotly.com/~popkdodge/58.embed" alt="Airbnb price data of SF">
            </iframe>
        </div>
    </section>
    <footer class="marFooter">
        <h6>Landbnb</h6>
        <nav class="nav-container">
          <Link to="/">Home</Link>
          <Link to="/market">Overview</Link>
          <Link to="/safety">Safety</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/login">Get Started</Link>
          {/* <Link href="https://front-end-1-two.vercel.app/login">Get Started</Link> */}
        </nav>
    </footer>
</body>
</>
    
    );
  };
  export default MarketPage;