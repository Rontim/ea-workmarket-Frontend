import React from "react";
import { Navigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const createAccount = require("../Assets/design/createAccount.png");
  const appSearching = require("../Assets/design/searchapp.png");
  const completeProcess = require("../Assets/design/completesignup.png");
  const Line1 = require("../Assets/lines/Line 1.png");
  const Number1 = require('../Assets/lines/Group 6.png')
  const Line4=require('../Assets/lines/Line 4.png')
  return (
    <div>
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
      <div className="info-section">
        <div className="my-5">
          <h2>ARE YOU A FREELANCER?</h2>
        </div>
        <div className="info-steps">
          <div className="info-section-step-1 d-flex align-items-center justify-content-around my-4">
            <div className="account-illustration">
              <img
                src={createAccount}
                alt="creating an account visual illustration"
                height="200"
              />
              <img src={Line1} alt="line" className="line1" height='180'  />
              <img src={Number1} alt="line" className="number1" height='60'  />
              <img src={Line4} alt="line" className="line4" height='60'  />
            </div>

            <div>
              <p>Sign Up and create an account </p>
              <p>as a freelancer.</p>
            </div>
          </div>

          <div className="info-section-step-2 d-flex align-items-center justify-content-around">
            <div>
              <p>Browse the posted jobs </p>
              <p>or projects you are interested in.</p>
            </div>
            <div className="account-illustration-1">
              <img
                src={appSearching}
                alt="creating an account visual illustration"
                height="200"
              />
            </div>
          </div>
          <div className="info-section-step-3 d-flex align-items-center justify-content-around">
            <div className="account-illustration-2">
              <img
                src={completeProcess}
                alt="creating an account visual illustration"
                height="200"
              />
            </div>
            <div>
              <p>Find the job,Apply and </p>
              <p> wait for feedback.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
