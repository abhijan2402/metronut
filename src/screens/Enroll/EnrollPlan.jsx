import React from "react";
import Lottie from "lottie-react";
import "./EnrollPlan.css";
import effort from "../../assets/effort.json";

const EnrollPlan = ({ closePage }) => {
  return (
    <>
      <div className="container-fluid">
        <div className="enrollPlan-maincontainer">
          <div className="enrollPlan-conatiner">
            <div className="row  " id="enrollPlan-conatiner-sections">
              <div className="col-lg-3" id="enrollPlan-clo1">
                <div className="enrollPlan-image">
                  <Lottie animationData={effort} style={{ height: "200px" }} />
                </div>
                <h1>
                  Your efforts deserve this<span>.</span>
                </h1>
                <div className="social-section">
                  <i class="bi bi-whatsapp"></i>
                  <div>
                    <h5>Having toubles?</h5>
                    <p>Get in touch with us</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-7" id="enrollPlan-clo2">
                <div className="enrollPlan-clo2-heading">
                  <h1>We have created best Mentorship plans for you</h1>
                  <p>You get complete 1-on-1 Mentorshipe in both the plan.</p>
                </div>
                <div className="enrollPlan-clo2-section">
                  <div className="enrollPlan-clo2-section1">
                    <h5>
                      <i class="bi bi-star"></i> Subodh
                    </h5>
                    <p>
                      <i class="bi bi-check-circle-fill"></i>Personal IIT/AIIMS
                      Mentor
                    </p>
                    <p>
                      <i class="bi bi-check-circle-fill"></i>Regular Video Call
                      Session
                    </p>
                    <p>
                      <i class="bi bi-check-circle-fill"></i>Always connected
                      trough chat
                    </p>
                    <p>
                      <i class="bi bi-check-circle-fill"></i>Progress track and
                      task assign
                    </p>
                    <p>
                      <i class="bi bi-check-circle-fill"></i>Parents-Mentor Meet
                    </p>
                    <p>
                      <i
                        class="bi bi-check-circle-fill"
                        style={{ color: "#fbc531" }}
                      ></i>
                      Doubt solving by mentor
                    </p>
                    <p>
                      <i
                        class="bi bi-check-circle-fill"
                        style={{ color: "#fbc531" }}
                      ></i>
                      Learn the Topper's approach
                    </p>
                    <div className="enrollPlan-clo2-section1-btn">
                      <button onClick={closePage}>
                        Lets Do this <i class="bi bi-arrow-right-short"></i>
                      </button>
                    </div>
                  </div>
                  <div className="enrollPlan-clo2-section1">
                    <h5>
                      {" "}
                      <i class="bi bi-star"></i>Subodh
                    </h5>
                    <p>
                      <i class="bi bi-check-circle-fill"></i>Personal IIT/AIIMS
                      Mentor
                    </p>
                    <p>
                      <i class="bi bi-check-circle-fill"></i>Regular Video Call
                      Session
                    </p>
                    <p>
                      <i class="bi bi-check-circle-fill"></i>Always connected
                      trough chat
                    </p>
                    <p>
                      <i class="bi bi-check-circle-fill"></i>Progress track and
                      task assign
                    </p>
                    <p>
                      <i class="bi bi-check-circle-fill"></i>Parents-Mentor Meet
                    </p>
                    <p>
                      <i
                        class="bi bi-check-circle-fill"
                        style={{ color: "#fbc531" }}
                      ></i>
                      Doubt solving by mentor
                    </p>
                    <p>
                      <i
                        class="bi bi-check-circle-fill"
                        style={{ color: "#fbc531" }}
                      ></i>
                      Learn the Topper's approach
                    </p>

                    <div className="enrollPlan-clo2-section1-btn">
                      <button onClick={closePage}>
                        Lets Do this <i class="bi bi-arrow-right-short"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="questions">
            <h1>Frequently asked Questions</h1>
            <div className="questions-content">
              <div
                class="accordion accordion-flush border"
                id="accordionFlushExample"
              >
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingOne">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseOne"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                    >
                      I have an upcoming interview. Can I take long-term
                      mentorship package?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseOne"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingOne"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Labore, illum earum esse officiis vitae quidem repudiandae
                      vel provident porro perspiciatis expedita recusandae sed?
                      Dignissimos cumque repudiandae accusantium earum in
                      voluptatibus.
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingTwo">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseTwo"
                      aria-expanded="false"
                      aria-controls="flush-collapseTwo"
                    >
                      Who are Preplaced mentors?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseTwo"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingTwo"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Ipsam ducimus ad fugit recusandae qui magnam nisi adipisci
                      aspernatur quod possimus, perferendis molestias minima!
                      Culpa odit provident eveniet debitis mollitia repellendus
                      ipsum sit itaque commodi in velit assumenda excepturi, qui
                      fuga illum incidunt, ipsa laboriosam tenetur. Temporibus
                      ab suscipit et eaque.
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingThree">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseThree"
                      aria-expanded="false"
                      aria-controls="flush-collapseThree"
                    >
                      What are the advantages of interview prepration through
                      mentorship?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseThree"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingThree"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Optio, eligendi? Aperiam vel maiores, rerum earum quos
                      exercitationem sed voluptates sunt?
                    </div>
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

export default EnrollPlan;
