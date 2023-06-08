import React from 'react';
import { Navigate } from "react-router-dom";
import "../components/css/Hero.css";


const Hero = () => {
  return (
    <div className="hero-section d-flex justify-content-center align-items-center flex-column p-5">
        <div className="hero-heading-text my-5">
          <h1 className="fs-1">
            EA Workmarket: Connecting Businesses and Freelancers
          </h1>
        </div>
        <div className="hero-paragraph">
          <p>
            Streamline your project management process with East Africa
            Workmarket's Platform conncecting businesses with top freelancers
          </p>
        </div>
        <button
          className="hero-button px-3 py-2 my-4"
          onClick={() => <Navigate to="/learn" />}
        >
          Learn More
        </button>
      </div>
  );
}

export default Hero;
