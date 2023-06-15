import React from "react";
import "./OurMentor.css";

import mentor from "../../assets/mentor.jpg";
import Header from "../Header/Header";

const OurMentor = () => {
  return (
    <>
      <div className="popularMentor-container">
        <div className="container" id="popularMentor-header">
            <Header text1={'Our Popular'} text2={'Mentor'} />
          

          <div className="col-12" id="popularMentor-btns">
            <button className="popularMentorbtn1">
              <i class="bi bi-arrow-left"></i>
            </button>
            <button className="popularMentorbtn2">
              <i class="bi bi-arrow-right"></i>
            </button>
          </div>

          <div className="col-12" id="popularMentorImages">
            <div class="row row-cols-1 row-cols-md-3 g-4">
              <div class="col" id="popularMentor-Images">
                <div class="card" id="popularMentor-Images-card">
                  <img src={mentor} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title text-center">Vinay Kushwaha</h5>
                    <p class="card-text text-center">
                      IIT Bombay
                    </p>
                  </div>
                </div>
              </div>


              <div class="col" id="popularMentor-Images">
                <div class="card" id="popularMentor-Images-card">
                  <img src={mentor} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title text-center">Vinay Kushwaha</h5>
                    <p class="card-text text-center">
                      IIT Bombay
                    </p>
                  </div>
                </div>
              </div>
             
              <div class="col" id="popularMentor-Images">
                <div class="card" id="popularMentor-Images-card">
                  <img src={mentor} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title text-center">Vinay Kushwaha</h5>
                    <p class="card-text text-center">
                      IIT Bombay
                    </p>
                  </div>
                </div>
              </div>

              <div class="col" id="popularMentor-Images">
                <div class="card" id="popularMentor-Images-card">
                  <img src={mentor} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title text-center">Vinay Kushwaha</h5>
                    <p class="card-text text-center">
                      IIT Bombay
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default OurMentor;
