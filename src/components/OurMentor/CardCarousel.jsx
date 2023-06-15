import React from "react";

const CardCarousel = ({ image, name, college }) => {
  return (
    <div className="card-carousel">
      <div className="cards">
        <img src={image} alt="" className="img-fluid" />
        <h1>{name}</h1>
        <p>{college}</p>
      </div>
    </div>
  );
};

export default CardCarousel;
