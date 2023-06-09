import React from 'react';
import './Testimonial.css';
import mentor1 from '../../assets/mentor.jpg'
import mentor2 from '../../assets/mentor.jpg'
import mentor3 from '../../assets/mentor.jpg'

const Testimonial = () => {
  return (
    <div className="container mt-5 pt-3 pt-md-5 mb-md-5 pb-5 pb-3">
      <div className="testimonial-heading">
        <h1 className="text-center">Testimonials</h1>
      </div>
      <div className="mt-5 pt-2 pt-md-5">
        <div className="row" style={{position: 'relative'}}>
          <div className="testimonial-btn">
            <button
              className="testimonial-btn-prev"
              type="button"
              data-bs-target="#testimonial"
              data-bs-slide="prev"
            >
              <i className="bi bi-arrow-left"></i>
            </button>

            <button
              className="testimonial-btn-next"
              type="button"
              data-bs-target="#testimonial"
              data-bs-slide="next"
            >
              <i className="bi bi-arrow-right"></i>
            </button>
          </div>
          <div className="col-12">
            <div
              id="testimonial"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <h3 className="text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod temporincididunt utlabore et dolore magna aliqua.
                    Ut enim ad minim veniam.Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod temporincididunt
                    utlabore et dolore magna aliqua. Ut enim ad minim veniam.
                  </h3>
                  <div className="testimonial-card card m-auto">
                    <img
                      className="rounded-circle tesimonial-img"
                      src={mentor1}
                      alt=""
                    />
                    <h2 className="testimonial-name">Vinay Kushwaha</h2>
                    <p className="testimonial-desc">B.tech IIT Bombay </p>
                  </div>
                </div>

                <div className="carousel-item">
                  <h3 className="text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod temporincididunt utlabore et dolore magna aliqua.
                    Ut enim ad minim veniam.Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod temporincididunt
                    utlabore et dolore magna aliqua. Ut enim ad minim veniam.
                  </h3>
                  <div className="testimonial-card card m-auto">
                    <img
                      className="rounded-circle tesimonial-img"
                      src={mentor2}
                      alt=""
                    />
                    <h2 className="testimonial-name">Vinay Kushwaha</h2>
                    <p className="testimonial-desc">B.tech IIT Bombay </p>
                  </div>
                </div>

                <div className="carousel-item">
                  <h3 className="text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod temporincididunt utlabore et dolore magna aliqua.
                    Ut enim ad minim veniam.Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod temporincididunt
                    utlabore et dolore magna aliqua. Ut enim ad minim veniam.
                  </h3>
                  <div className="testimonial-card card m-auto">
                    <img
                      className="rounded-circle tesimonial-img"
                      src={mentor3}
                      alt=""
                    />
                    <h2 className="testimonial-name">Vinay Kushwaha</h2>
                    <p className="testimonial-desc">B.tech IIT Bombay </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
