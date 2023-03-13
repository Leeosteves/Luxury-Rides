import React from "react";
import { CarProps } from "~/@types/data";
import "./styles.sass";

export const Carousel = ({ car }: CarProps) => {
  return (
    <div
      id="carouselExample"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/luxury-rides-c8c6e.appspot.com/o/cars%2FSport%2FLamborghini%20Aventador%20SVJ%202022.png?alt=media&token=3ef5902f-cf6e-4d2b-b6b4-37b9c1dbdabc"
            className="d-block w-100"
            // alt={car?.model}
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/luxury-rides-c8c6e.appspot.com/o/cars%2FSport%2FMercedes-Benz%20AMG%20GT%202022.png?alt=media&token=bd997ed0-ce9d-430f-975b-f122cf8600d5"
            className="d-block w-100"
            // alt={car?.model}
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/luxury-rides-c8c6e.appspot.com/o/cars%2FSport%2FR8.png?alt=media&token=c202d439-91ac-4576-aebb-37dd94f60785"
            className="d-block w-100"
            // alt={car?.model}
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
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};
