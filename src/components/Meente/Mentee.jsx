import React from "react";
import "./Mentee.css";
import MenteeCard from "./MenteeCard";
import feedback from "../../assets/feedback.png";

const Mentee = () => {
  let box = document.querySelector("#menteeCard");
  // console.log(box.scrollWidth);
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
    console.log(width, box.scrollLeft);
  };

  return (
    <>
      <div className="mentee-container mt-5 mt-md-2">
        <div className="container-fluid">
          <div className="rows">
            <div className="col-12" id="mentee-header">
              <h1>Mentee Says"...</h1>
              <div className="menteecarousel-buttons">
                <button onClick={btnprevious}>
                  <i className="bi bi-arrow-left"></i>
                </button>
                <button onClick={btnnext}>
                  <i className="bi bi-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="row" id="menteeCard">
            <MenteeCard image={feedback} />
            <MenteeCard image={feedback} />
            <MenteeCard image={feedback} />
            <MenteeCard image={feedback} />
            <MenteeCard image={feedback} />
            <MenteeCard image={feedback} />
            <MenteeCard image={feedback} />
            <MenteeCard image={feedback} />
            <MenteeCard image={feedback} />
            <MenteeCard image={feedback} />
            <MenteeCard image={feedback} />
            <MenteeCard image={feedback} />
            <MenteeCard image={feedback} />
            <MenteeCard image={feedback} />
            <MenteeCard image={feedback} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Mentee;
