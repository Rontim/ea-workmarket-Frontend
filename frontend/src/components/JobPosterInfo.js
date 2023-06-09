import React from "react";
import "./css/jobs.css";
const JobPosterInfo = () => {
  const step1image = require("../Assets/lines/Step1.png");
  return (
    <div className="container my-5">
      <div>
        <h2 className="text-center">WANT TO POST JOBS ?</h2>
      </div>

      <div className="d-flex justify-content-around my-5 p-4">
        {/*everything*/}

        <div className="juscard text-center border-4 rounded-5 d-flex flex-column justify-content-center align-items-center py-4 px-2">
          <div className="job-step1 rounded-circle text-center border-4 d-flex justify-content-center align-items-center">
            <span className="fs-2">1</span>
          </div>

          <div className="card-body d-flex flex-column">
            <h5 className="card-title py-4">Create An Account</h5>
            <p className="card-text">One Click away!</p>
            <a href="#" className="btn rounded-4 custom-button">
              Get started
            </a>
          </div>
        </div>
        <div className="juscard text-center border-4 rounded-5 d-flex flex-column justify-content-center align-items-center py-4 px-2">
          <div className="job-step1 rounded-circle text-center border-4 d-flex justify-content-center align-items-center">
            <span className="fs-2">2</span>
          </div>

          <div className="card-body d-flex flex-column">
            <h5 className="card-title py-4">Post A Job</h5>
            <p className="card-text">Trust the talent</p>
            <a href="#" className="btn rounded-4 custom-button">
              Post!
            </a>
          </div>
        </div>
        <div className="d-flex flex-column justify-content-between gap-4">
          <div className="step-wise border-4 rounded-4 d-flex flex-column justify-content-center align-items-center px-5 py-1">
            <div className="job-step1 rounded-circle text-center border-4 d-flex justify-content-center align-items-center">
              <span className="fs-2">3</span>
            </div>
            <div className="text-center">
              <span className="fs-4">
                VIEW <br />
                APPLICANTS
              </span>
            </div>
          </div>
          <div className="step-wise border-4 rounded-4 d-flex flex-column justify-content-center align-items-center px-5 py-1">
            <div className="job-step1 rounded-circle text-center border-4 d-flex justify-content-center align-items-center">
              <span className="fs-2">4</span>
            </div>
            <div className="text-center">
              <span className="fs-4">
                SEARCH <br />
                FOR TALENT
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobPosterInfo;
