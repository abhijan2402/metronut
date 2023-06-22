import React from "react";
import "./Session.css";

const Session = () => {
  return (
    <>
      <div className="SessionContainer rounded">
        <div className="Session-Content">
          <div className="container-fluid" id="Session-ContentWrapper">
            <div className="row">
              <h1> Personal Mentorship Session by IITian</h1>
            </div>
            <div className="row justify-content-center mt-5">
              <div className="col-md-7" id="Session-Coloumn1">
                <h2>Why should you go for a personal session?</h2>
                <div className="coloumn1-list">

                  <ul>
                    <li>
                      <span>
                        Verify your current study plan from our Expert Mentors.
                      </span>
                    </li>
                    <li>
                      <span>
                        Verify your current study plan from our Expert Mentors.
                      </span>
                    </li>
                    <li>
                      <span>
                        Verify your current study plan from our Expert Mentors.
                      </span>
                    </li>
                    <li>
                      <span>
                        Verify your current study plan from our Expert Mentors.
                      </span>
                    </li>
                    <li>
                      <span>
                        Verify your current study plan from our Expert Mentors.
                      </span>
                    </li>
                    <li>
                      <span>
                        Verify your current study plan from our Expert Mentors.
                      </span>
                    </li>
                    <li>
                      <span>
                        Verify your current study plan from our Expert Mentors.
                      </span>
                    </li>
                    <li>
                      <span>
                        Verify your current study plan from our Expert Mentors.
                      </span>
                    </li>
                  </ul>
                </div>
                <p>
                  Get an edge over your competition by fetching the maximum out
                  of you. <br />
                  More than 2000+ students have taken personal mentorship
                  sessions
                </p>
              </div>

              <div className="col-md-3" id="Session-Coloumn2">
                <h1>Rs 199/-</h1>
                <h6>Per Session</h6>
                <p>
                  <button><a style={{ color: "black" }} href="">BOOK NOW</a></button>
                </p>
                <div id="list_1">
                  <ul>
                    <li>No time limit for session.</li>
                    <li>mentor will contact you within 3 Hours</li>
                  </ul>
                </div>
                <div id="list_2">
                  <ul>
                    <li>
                      100% refund of this one time personal session if you don't
                      find the call helpful for you.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Session;
