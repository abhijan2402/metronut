import React from "react";
import "./OurMentor.css";
import CardCarousel from "./CardCarousel";
import mentor from "../../assets/mentor.jpg";

const OurMentor = () => {

  let box = document.querySelector(".cardCarousel");
  console.log(box);
  const btnprevious = () => {
    let width = 0;
    width = width + 500;
    box.scrollLeft = box.scrollLeft - width;
    console.log(width);
  };
  const btnnext = () => {
    let width = 0;
    width = width + 500;
    box.scrollLeft = box.scrollLeft + width;
    console.log(width);
  };


  return (
    <>
      <div className="carousel">
        <div className="heading">
          <h1>
            Our Popular <span>Mentors</span>{" "}
          </h1>
        </div>
        <div className="carousel-buttons">
          <button onClick={btnprevious}>
            <i class="bi bi-arrow-left"></i>
          </button>
          <button onClick={btnnext}>
            <i class="bi bi-arrow-right"></i>
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
