import React from "react";
import "./Enroll.css";
import Navbar from '../../components/navbar/Navbar'

const Enroll = () => {
  function togglehide() {
    // let btn = document.getElementsByClassName('btn');
    let answer = document.getElementsByClassName("ans");
    Array.from(answer).forEach((x) => {
      if (x.style.display != "none") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
      }
    })

  }

  return (
    <>
      <Navbar />
      <div className="enroll-content-container">
        <div className="enroll-maincontainer">
          <h1>Lets make this your best investment</h1>
          <p>Price are shown for Sugamya (Mentorship Only) plans.</p>
          <div className="enroll-content">
            <div className="enroll-courses">
              <div className="courses">
                <input type="checkbox" /> Personal IItian Mentor
              </div>
              <div className="courses">
                <input type="checkbox" /> Unlimited access to your mentor
              </div>
              <div className="courses">
                <input type="checkbox" /> Daily task and Plan
              </div>
              <div className="courses">
                <input type="checkbox" /> live One-to-One Analysis Session
              </div>
              <div className="courses">
                <input type="checkbox" /> Study Material and Notes
              </div>
              <div className="courses">
                <input type="checkbox" /> Revision and Backlog Stategy
              </div>
              <div className="courses">
                <input type="checkbox" /> Motivation and Support
              </div>
              <div className="courses">
                <input type="checkbox" /> Tips & Tricks to Achieve Top Rank
              </div>
            </div>
            <div className="cources-prices">
              <div className="prices">
                <div className="duration">
                  <h4>12 Months</h4> <p>SAVE 45%</p>
                </div>
                <div className="price-month">
                  <p>
                    <i class="bi bi-currency-rupee"></i>825<span>/mo</span>{" "}
                    <br />
                    <span>
                      Total <i class="bi bi-currency-rupee"></i>9,900
                    </span>
                  </p>
                  <button className="btn" type="button">
                    GO <i class="bi bi-rocket-takeoff"></i>
                  </button>
                </div>
              </div>
              <div className="prices">
                <div className="duration">
                  <h4>6 Months</h4> <p>SAVE 45%</p>
                </div>
                <div className="price-month">
                  <p>
                    <i class="bi bi-currency-rupee"></i>975<span>/mo</span>{" "}
                    <br />
                    <span>
                      Total <i class="bi bi-currency-rupee"></i>5850
                    </span>
                  </p>
                  <button className="btn" type="button">
                    GO <i class="bi bi-rocket-takeoff"></i>
                  </button>
                </div>
              </div>
              <div className="prices">
                <div className="duration">
                  <h4>3 Months</h4> <p>SAVE 45%</p>
                </div>
                <div className="price-month">
                  <p>
                    <i class="bi bi-currency-rupee"></i>1200<span>/mo</span>{" "}
                    <br />
                    <span>
                      Total <i class="bi bi-currency-rupee"></i>3600
                    </span>
                  </p>
                  <button className="btn" type="button">
                    GO <i class="bi bi-rocket-takeoff"></i>
                  </button>
                </div>
              </div>
              <div className="prices">
                <div className="duration">
                  <h4>1 Month</h4> <p></p>
                </div>
                <div className="price-month">
                  <p>
                    <i class="bi bi-currency-rupee"></i>1500<span>/mo</span>
                  </p>
                  <button className="btn" type="button">
                    GO <i class="bi bi-rocket-takeoff"></i>
                  </button>
                </div>
              </div>
              <p id="payment-time">To be paid as one time payment</p>
            </div>
          </div>
        </div>
        <div className="questions">
          <h1>Frequently asked Questions</h1>
          <div className="questions-content">
            <div class="accordion accordion-flush border" id="accordionFlushExample">
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingOne">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    I have an upcoming interview. Can I take long-term mentorship package?
                  </button>
                </h2>
                <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                  <div class="accordion-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, illum earum esse officiis vitae quidem repudiandae vel provident porro perspiciatis expedita recusandae sed? Dignissimos cumque repudiandae accusantium earum in voluptatibus.</div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingTwo">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                    Who are Preplaced mentors?
                  </button>
                </h2>
                <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                  <div class="accordion-body">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam ducimus ad fugit recusandae qui magnam nisi adipisci aspernatur quod possimus, perferendis molestias minima! Culpa odit provident eveniet debitis mollitia repellendus ipsum sit itaque commodi in velit assumenda excepturi, qui fuga illum incidunt, ipsa laboriosam tenetur. Temporibus ab suscipit et eaque.</div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingThree">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                    What are the advantages of interview prepration through mentorship?
                  </button>
                </h2>
                <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                  <div class="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, eligendi? Aperiam vel maiores, rerum earum quos exercitationem sed voluptates sunt?</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Enroll;
