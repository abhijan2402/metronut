import React from "react";
import "./Courses.css";
import Lottie from "lottie-react";
import mentor from "../../assets/mentor.json";
import study from "../../assets/study.json";
import easyDoubt from "../../assets/easyDoubt.json";
import bundle from "../../assets/bundle.json";
import learning from "../../assets/learning.json";
import time from "../../assets/time.json";
import avaliable from "../../assets/24x7.json";
import swot from "../../assets/swot.json";

const Courses = () => {
  return (
    <>
      <div className="container5">
        <h3>
          Don't worry, <b>we are here</b> for You!
        </h3>
        <div className="courses-facuilty">
          <div className="course-card">
            <Lottie animationData={mentor} style={{ width: "60px" }} />
            <h2>Personalized Mentor</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure ut
              sed nobis voluptatem enim suscipit quae dolorum ipsam. Ex, quia.
            </p>
          </div>

          <div className="course-card">
            <Lottie animationData={study} style={{ width: "60px" }} />
            <h2>Customized Study-plan</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure ut
              sed nobis voluptatem enim suscipit quae dolorum ipsam. Ex, quia.
            </p>
          </div>

          <div className="course-card">
            <Lottie animationData={easyDoubt} style={{ width: "60px" }} />
            <h2>Easy Doubt Solving</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure ut
              sed nobis voluptatem enim suscipit quae dolorum ipsam. Ex, quia.
            </p>
          </div>

          <div className="course-card">
            <Lottie animationData={bundle} style={{ width: "60px" }} />
            <h2>Buldle Of Supportr</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure ut
              sed nobis voluptatem enim suscipit quae dolorum ipsam. Ex, quia.
            </p>
          </div>

          <div className="course-card">
            <Lottie animationData={time} style={{ width: "60px" }} />
            <h2>Time Management</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure ut
              sed nobis voluptatem enim suscipit quae dolorum ipsam. Ex, quia.
            </p>
          </div>

          <div className="course-card">
            <Lottie animationData={swot} style={{ width: "60px" }} />
            <h2>SWOT Analysis</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure ut
              sed nobis voluptatem enim suscipit quae dolorum ipsam. Ex, quia.
            </p>
          </div>

          <div className="course-card">
            <Lottie animationData={learning} style={{ width: "60px" }} />
            <h2>Holistics Learning</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure ut
              sed nobis voluptatem enim suscipit quae dolorum ipsam. Ex, quia.
            </p>
          </div>

          <div className="course-card">
            <Lottie animationData={avaliable} style={{ width: "70px" }} />
            <h2>24x7 Avalibility</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure ut
              sed nobis voluptatem enim suscipit quae dolorum ipsam. Ex, quia.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Courses;
