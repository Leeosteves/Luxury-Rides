import { memo } from "react";
import { Car, CarProps } from "~/@types/data";
import "./styles.sass";

const Card = ({ car }: CarProps) => {
  return (
    <div className="card">
      <img src={car?.image_url} className="card-img" />
      <div className="card-info">
        <section className="card-info-name">
          <h2>{car?.make}</h2>
          <h2>{car?.model}</h2>
        </section>
        <ul className="card-info-spec">
          <span>{car?.liters}</span>
          <span>{car?.engine}</span>
          <span>{car?.fuel_type}</span>
          <span>{car?.transmission}</span>
        </ul>
        <h4>${car?.price}</h4>
        <section className="card-info-elements">
          <span>{car?.year}</span>
          <span>{car?.miliage} km</span>
        </section>
      </div>
    </div>
  );
};

export default memo(Card);
