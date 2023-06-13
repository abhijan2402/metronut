import React from "react";
import "./Mentee.css";
import feedback from "../../assets/feedback.png";

const Mentee = () => {
  return (
    <>
      <div className="mentee-container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12" id="mentee-header">
              <h1>Mentee Says"...</h1>
            </div>

            <div className="col-12">
              <div
                id="carouselExampleControls"
                class="carousel slide"
                data-bs-ride="carousel"
              >
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <div className="cards-wrapper">
                      <div class="card" style={{ width: "18rem;" }}>
                        <img src={feedback} class="card-img-top" alt="..." />
                      </div>
                      <div class="card" style={{ width: "18rem;" }}>
                        <img src={feedback} class="card-img-top" alt="..." />
                      </div>
                      <div class="card" style={{ width: "18rem;" }}>
                        <img src={feedback} class="card-img-top" alt="..." />
                      </div>
                      <div class="card" style={{ width: "18rem;" }}>
                        <img src={feedback} class="card-img-top" alt="..." />
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div className="cards-wrapper">
                      <div class="card" style={{ width: "18rem;" }}>
                        <img src={feedback} class="card-img-top" alt="..." />
                      </div>
                      <div class="card" style={{ width: "18rem;" }}>
                        <img src={feedback} class="card-img-top" alt="..." />
                      </div>
                      <div class="card" style={{ width: "18rem;" }}>
                        <img src={feedback} class="card-img-top" alt="..." />
                      </div>
                      <div class="card" style={{ width: "18rem;" }}>
                        <img src={feedback} class="card-img-top" alt="..." />
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div className="cards-wrapper">
                      <div class="card" style={{ width: "18rem;" }}>
                        <img src={feedback} class="card-img-top" alt="..." />
                      </div>
                      <div class="card" style={{ width: "18rem;" }}>
                        <img src={feedback} class="card-img-top" alt="..." />
                      </div>
                      <div class="card" style={{ width: "18rem;" }}>
                        <img src={feedback} class="card-img-top" alt="..." />
                      </div>
                      <div class="card" style={{ width: "18rem;" }}>
                        <img src={feedback} class="card-img-top" alt="..." />
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                    id="bt2"
                  ></span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                    id="bt1"
                  ></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mentee;
