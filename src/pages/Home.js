import React from "react";
import "./Home.css";
import Hero from '../components/home/hero/Hero'
import JobPosterInfo from "../components/home/jobpostingInfo/JobPosterInfo";
import Explore from "../components/home/explore/Explore";
import Benefits from "../components/home/benefits/Benefits";
const Home = () => {
  const createAccount = require("../Assets/design/createAccount.png");
  const appSearching = require("../Assets/design/searchapp.png");
  const completeProcess = require("../Assets/design/completesignup.png");
  // const CircleLine1 = require("../Assets/lines/Line 1.png");
  // const Step1 = require("../Assets/lines/Step1.png");
  // const diamondLineLeft = require("../Assets/lines/Line 4.png");
  // const StraightLine2 = require("../Assets/lines/Line 2.png");
  // const Step2 = require("../Assets/lines/Step2.png");
  // const diamondLineRight = require("../Assets/lines/Line 3.png");
  // const Step3 = require("../Assets/lines/Step3.png");
  return (
    <div>
      <Hero />
      <div className="info-section m-auto">
        <div className="my-5 py-5 text-center">
          <h2>ARE YOU A FREELANCER?</h2>
        </div>
        <div className="info-steps">
          <div className="info-section-step-1 d-flex align-items-center justify-content-around my-5">
            <div className="account-illustration">
              <img
                src={createAccount}
                alt="creating an account visual illustration"
                height="200"
              />
              {/*<img src={CircleLine1} alt="line" className="circle-line1" height="180" width='80' />
              <img src={Step1} alt="line" className="step1" height="60" />
  <img src={diamondLineLeft} alt="line" className="diamond-line-left" height="60" />*/}
            </div>
            <div>
              <p>Sign Up and create an account </p>
              <p>as a freelancer.</p>
            </div>
          </div>

          <div className="info-section-step-2 d-flex align-items-center justify-content-around my-5">
            <div className="info-descriprion">
              <p>Browse the posted jobs </p>
              <p>or projects you are interested in.</p>
            </div>
            <div className="account-illustration">
              <img
                src={appSearching}
                alt="creating an account visual illustration"
                height="200"
              />
              {/*<img
                src={StraightLine2}
                alt="line"
                className="line2"
                height="170"
              />
              <img src={Step2} alt="step" className="step2" height="60" />
              <img
                src={diamondLineRight}
                alt="step"
                className="diamond-line-right"
                height="60"
                width="115"
              />*/}
            </div>
          </div>
          <div className="info-section-step-3 d-flex align-items-center justify-content-around">
            <div className="account-illustration">
              <img
                src={completeProcess}
                alt="creating an account visual illustration"
                height="200"
              />
              {/*<img
                src={StraightLine2}
                alt="line"
                className="last-straight-line"
                height="170"
              />
              <img src={Step3} alt="step" className="step3" height="60" />
              <img
                src={diamondLineLeft}
                alt="line"
                className="last-diamond-line-left"
                height="60"
                width="150"
            />*/}
            </div>
            <div>
              <p>Find the job,Apply and </p>
              <p> wait for feedback.</p>
            </div>
          </div>
        </div>
      </div>
      <JobPosterInfo />
      <Explore />
      <Benefits/>
    </div>
  );
};

export default Home;
