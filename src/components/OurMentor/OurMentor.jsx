import React from "react";
import "./OurMentor.css";
import CardCarousel from "./CardCarousel";
import mentor from "../../assets/mentor.jpg";
import Header from "../Header/Header";

const OurMentor = () => {

  let box = document.querySelector(".cardCarousel");
  const btnprevious = () => {
    let width = 0;
    width = width + 500;
    box.scrollLeft = box.scrollLeft - width;
  };
  const btnnext = () => {
    let width = 0;
    width = width + 500;
    box.scrollLeft = box.scrollLeft + width;
  };


  return (
    <>
      <div className="carousel container mt-5 pt-3 pt-md-5">
        <Header text1={'Our Popular'} text2={'Mentors'} />
        <div className="carousel-buttons mt-5 pt-3">
          <button onClick={btnprevious}>
            <i className="bi bi-arrow-left"></i>
          </button>
          <button onClick={btnnext}>
            <i className="bi bi-arrow-right"></i>
          </button>
        </div>
        <div className="cardCarousel">
          <CardCarousel
            image={mentor}
            name="Vinay Kushwaha"
            college="IIT Bombay"
          />
          <CardCarousel
            image={mentor}
            name="Vinay Kushwaha"
            college="IIT Bombay"
          />
          <CardCarousel
            image={mentor}
            name="Vinay Kushwaha"
            college="IIT Bombay"
          />
          <CardCarousel
            image={mentor}
            name="Vinay Kushwaha"
            college="IIT Bombay"
          />
          <CardCarousel
            image={mentor}
            name="Vinay Kushwaha"
            college="IIT Bombay"
          />
          <CardCarousel
            image={mentor}
            name="Vinay Kushwaha"
            college="IIT Bombay"
          />
          <CardCarousel
            image={mentor}
            name="Vinay Kushwaha"
            college="IIT Bombay"
          />
          <CardCarousel
            image={mentor}
            name="Vinay Kushwaha"
            college="IIT Bombay"
          />
          <CardCarousel
            image={mentor}
            name="Vinay Kushwaha"
            college="IIT Bombay"
          />
          <CardCarousel
            image={mentor}
            name="Vinay Kushwaha"
            college="IIT Bombay"
          />
        </div>
      </div>
    </>
  );
};

export default OurMentor;
