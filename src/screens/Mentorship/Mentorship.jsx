import React from "react";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import "./Mentorship.css";
import boy1 from "../../assets/boy1.json";
import loop from "../../assets/loop.json";
import sad from "../../assets/sad.json";
import tired from "../../assets/tired.json";
import dout from "../../assets/dout.json";
import work from "../../assets/work.json";
import sales from "../../assets/sales.json";
import team from "../../assets/team.json";
import thinking from "../../assets/thinking.json";
import Courses from "../../components/Courses/Courses";
import Navbar from "../../components/navbar/Navbar";

const Mentorship = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div className="mentorContianer">
        <div className="mentorContent">
          <div className="container-fluid" id="container">
            <div className="row" id="mentorContent_heading">
              <h1>Journey of an aspriant</h1>
            </div>

            {/* First Section */}
            <div className="row justify-content-around mb-2" id="first-Section">
              <div className="col-4" id="content_1">
                <div className="tagline">
                  <p>1</p>
                  <h5>Meet Harshul</h5>
                </div>
                <p id="para">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                  <b>lorem ipsum derum so.</b> Dolor aut recusandae officiis
                  vero hic maiores voluptatum enim odit corrupti ullam{" "}
                  <b>lorem ipsum derum so.</b>
                </p>
              </div>
              <div className="col-4" id="first-SectionImage">
                <div className="first-SectionImage-tagline">
                  <p>1</p>
                  <h5>Meet Harshul</h5>
                </div>
                <Lottie animationData={boy1} />
              </div>
            </div>
            {/* Section Second */}
            <div className="row justify-content-around mb-2">
              <div className="col-4" id="content_1Image">
                <div className="content_1Imagetagline">
                  <p>2</p>
                  <h5>Loop of schools and coachings</h5>
                </div>
                <Lottie animationData={loop} />
              </div>
              <div className="col-4" id="content_1">
                <div className="tagline">
                  <p>2</p>
                  <h5>Loop of schools and coachings</h5>
                </div>
                <p id="para">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.sit
                  amet consectetur adipisicing elit. sit amet consectetur
                  adipisicing elit. <b>lorem ipsum derum so.</b> Dolor aut
                  recusandae officiis vero hic maiores voluptatum enim odit
                  corrupti ullam <b>lorem ipsum derum so.</b>
                </p>
              </div>
            </div>
            {/* Section Third */}
            <div className="row justify-content-around mb-2" id="third-Section">
              <div className="col-4" id="content_1">
                <div className="tagline">
                  <p>3</p>
                  <h5>Doubts and uncertainty</h5>
                </div>
                <p id="para">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                  <b>lorem ipsum derum so.</b> Dolor aut recusandae officiis
                  vero hic maiores voluptatum enim odit corrupti ullam{" "}
                  <b>lorem ipsum derum so.</b>
                </p>
              </div>
              <div className="col-4" id="content_1Image">
                <div className="content_1tagline">
                  <p>3</p>
                  <h5>Doubts and uncertainty</h5>
                </div>
                <Lottie animationData={tired} />
              </div>
            </div>

            {/* Section Fourth */}
            <div className="row justify-content-around mb-2">
              <div className="col-4" id="content_1Image">
                <div className="content_1tagline">
                  <p>4</p>
                  <h5>No Direction</h5>
                </div>
                <Lottie animationData={dout} />
              </div>
              <div className="col-4" id="content_1">
                <div className="tagline">
                  <p>4</p>
                  <h5>No Direction</h5>
                </div>
                <p id="para">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.sit
                  amet consectetur adipisicing elit. sit amet consectetur
                  adipisicing elit. <b>lorem ipsum derum so.</b> Dolor aut
                  recusandae officiis vero hic maiores voluptatum enim odit
                  corrupti ullam <b>lorem ipsum derum so.</b>
                </p>
              </div>
            </div>

            {/* Section 5 */}
            <div className="row justify-content-around mb-2" id="fifth-Section">
              <div className="col-4" id="content_1">
                <div className="tagline">
                  <p>5</p>
                  <h5>Self Doubts & Stressed Out</h5>
                </div>
                <p id="para">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                  <b>lorem ipsum derum so.</b> Dolor aut recusandae officiis
                  vero hic maiores voluptatum enim odit corrupti ullam{" "}
                  <b>lorem ipsum derum so.</b>
                </p>
              </div>
              <div className="col-4" id="content_1Image">
                <div className="content_1tagline">
                  <p>5</p>
                  <h5>Self Doubts & Stressed Out</h5>
                </div>
                <Lottie animationData={sad} />
              </div>
            </div>

            <div className="row justify-content-center " id="content_2">
              <div className="col-10">
                <p className="text-center">
                  <i>
                    The problems he faced were many, but was when <br /> he came
                    across his ray of hope - <span>RankersPrep</span>
                  </i>
                </p>
              </div>
              <div className="col-10" id="content2_image">
                <Lottie animationData={work} style={{ width: "400px" }} />
              </div>
              <div className="col-10" id="content2_para">
                <h5 className="text-center">THE RIGHT PATH</h5>
                <p className="text-center">
                  Lorem ipsum dolor sit amet <b>consectetur, adipisicing</b>{" "}
                  elit. Quis, <b>consectetur, adipisicing</b> laudantium
                  mollitia ad eum ducimus quasi ullam magni, laboriosam sint
                  itaque voluptates necessitatibus fuga voluptatum at quam
                  eligendi blanditiis id aspernatur. Laudantium fugiat ipsum
                  repudiandae dicta rem iure labore debitis, pariatur quisquam{" "}
                  <b>consectetur, adipisicing</b> tempora libero molestias totam
                  magni nostrum facere omnis expedita.
                </p>
              </div>
            </div>

            <div className="row justify-content-evenly" id="content_3">
              <div className="col-md-3" id="content_3-Image">
                <Lottie animationData={sales} style={{ width: "400px" }} />
              </div>
              <div className="col-md-7" id="content3_details">
                <p>
                  Just like the way projectile gets firedd up to the{" "}
                  <b>maximum range at 45 degrees.</b>
                </p>
                <p id="content3_details-para">
                  We make sure that all{" "}
                  <b style={{ backgroundColor: "rgb(255, 208, 0)" }}>
                    all your efforts get the right angle
                  </b>{" "}
                  such that the range of your results is maximum!{" "}
                </p>
                <button onClick={()=> navigate("/metronut/enroll")} id="content3_details-btn">
                  Get your mentor <i className="bi bi-arrow-right-short"></i>
                </button>
              </div>
            </div>

            <div className="row" id="content_4">
              <div className="col-12" id="content_4-heading">
                <h2>
                  This is{" "}
                  <b style={{ backgroundColor: "rgb(255, 208, 0)" }}>just</b>{" "}
                  the story of Harshul. If you also...{" "}
                </h2>
              </div>
            </div>
            <div className="col-12" id="content_4-Image">
              <Lottie animationData={thinking} style={{ width: "400px" }} />
            </div>

            <div className="row" id="content_5">
              <div className="col-12">
                <Courses />
              </div>
            </div>

            <div id="Section_6">
              <div className="row justify-content-center" id="content_6">
                <div className="col-md-10" id="content_6-Image">
                  <Lottie animationData={team} style={{ width: "350px" }} />
                </div>
                <div className="col-md-10">
                  <h4>
                    "We have hundreds of mentees that have successfully learnt
                    the art of preparing the best for JEE/NEET, all with the
                    help of right guidance."
                  </h4>
                </div>
                <div className="col-md-10" id="content6_details-btns">
                  <button id="content6_details-btn1">
                    Get your Demo <i className="bi bi-arrow-right-short"></i>
                  </button>
                  <button onClick={()=> navigate("/metronut/enroll")} id="content6_details-btn2">
                    Get your mentor <i className="bi bi-arrow-right-short"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mentorship;
