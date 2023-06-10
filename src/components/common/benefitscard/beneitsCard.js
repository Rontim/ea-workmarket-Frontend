import React from "react";
import "./benefits.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

const BenefitsCard = ({ items }) => {
  // Calculate the number of slides based on the number of items
  const numSlides = Math.ceil(items.length / 3);

  // Split the items into chunks of 3 for each slide
  const slides = Array.from({ length: numSlides }, (_, index) =>
    items.slice(index * 3, (index + 1) * 3)
  );

  return (
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner p-3">
        {slides.map((slide, index) => (
          <div
            className={`carousel-item ${index === 0 ? "active" : ""}`}
            key={index}
          >
            <div className="row">
              {slide.map((item, itemIndex) => (
                <div
                  className="col-sm-4 d-flex justify-content-around p-5 gap-0"
                  key={itemIndex}
                >
                  <div className="bg-transparent custom-card p-4 rounded-4 text-center">
                    <div className="d-flex justify-content-center align-items-center m-2">
                      <img
                        src={item.imgUrl}
                        className="card-img-top"
                        alt={item.title}
                        height="100px"
                        width="100px"
                      />
                    </div>
                    <div className="card-body">
                      <h5 className="card-title my-4">{item.title}</h5>
                      <p className="card-text">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default BenefitsCard;
