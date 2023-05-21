import React from "react";
import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { features } from "../data/features";

export default function Home(props) {
  const [startIndex, setStartIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setStartIndex((prevStartIndex) => {
        if (prevStartIndex + 3 < features.length) {
          return prevStartIndex + 3;
        } else return 0;
      });
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="home">
      <div className="home--banner">
        <div className="home--banner--content">
          <h1>EA Workmarket: Connecting Businesses and Freelancers</h1>
          <p>
            Streamline your project management process with East Africa
            Workmarket's Platform conncecting businesses with top freelancers
          </p>
          <button>
            <NavLink to="/learn">Learn About Us</NavLink>
          </button>
          <p>
            Already have an account? <button>Log in</button>
          </p>
        </div>
      </div>
      <section id="features">
        <h2>Features and benefits</h2>
        <div className="row">
          {features.slice(startIndex, startIndex + 3).map((feature) => (
            <Feature
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

function Feature({ title, description, icon }) {
  return (
    <div className="col-md-4">
      <div className="feature-item">
        <div className="feature-icon">
          <FontAwesomeIcon icon={icon} style={{ color: "green" }} />
        </div>
        <h3 className="feature-title">{title}</h3>
        <p className="feature-description">{description}</p>
      </div>
    </div>
  );
}
