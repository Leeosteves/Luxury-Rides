import React from "react";
import { Cars } from "~/@types/cars";

export const Carousel = ({ models }: Cars) => {
  return (
    <div id="carouselExample" className="carousel slide">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            // src={cars?.models?.sport[0]?.image_url}
            className="d-block w-100"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            // src={cars?.models?.sport[1]?.image_url}
            className="d-block w-100"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            // src={cars?.models?.sport[2]?.image_url}
            className="d-block w-100"
            alt="..."
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <i className="bi bi-rewind-fill prev-icon"></i>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <i className="bi bi-fast-forward-fill next-icon"></i>
        {/* <span className="visually-hidden">Next</span> */}
      </button>
    </div>
  );
};
