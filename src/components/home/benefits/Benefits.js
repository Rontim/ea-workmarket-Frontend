import React from "react";
import BenefitsCard from "../../common/benefitscard/beneitsCard";
import { benefits } from "../../../data/features";

const Benefits = () => {
  return (
    <div className="container">
      <hr className="horizontal-line" />
      <div>
        <BenefitsCard items={benefits} />
      </div>
      <hr className="horizontal-line" />
    </div>
  );
};

export default Benefits;
