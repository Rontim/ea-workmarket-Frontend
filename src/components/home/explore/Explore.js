import React from "react";
import './explore.css'
const imgUrl = require("../../../Assets/design/Explore.png");
const Explore = () => {
  return (
    <div className="conatiner my-4">
      <div className="row row-cols-auto d-flex justify-content-center align-items-center text-center gap-0 flex-row ">
        <div className="col mx-5">
          <img src={imgUrl} alt="explore the benefits illustration" height='250px'/>
        </div>
        <div className="col text-center mx-5">
          <h3 className=" fw-bold" style={{fontSize:3.5+'rem',}}>EXPLORE THE<br/> BENEFITS</h3>
        </div>
      </div>
    </div>
  );
};

export default Explore;
