import React from 'react';
import './Testimonial.css';

const Testimonial = () => {
  return (
    <div className="container mt-5 mb-5">
      <div className="testimonial-heading">
        <h1 className="text-center">Testimonials</h1>
        <h3 className="text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod temporincididunt utlabore et dolore magna aliqua. Ut enim ad
          minim veniam.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod temporincididunt utlabore et dolore magna aliqua. Ut
          enim ad minim veniam.
        </h3>
      </div>
      <div className="mt-5 pt-5">
        <div className="row">
          <div className="testimonial-btn">
            <button
              class="testimonial-btn-prev"
              type="button"
              data-bs-target="#testimonial"
              data-bs-slide="prev"
            >
              <i class="bi bi-arrow-left"></i>
            </button>

            <button
              class="testimonial-btn-next"
              type="button"
              data-bs-target="#testimonial"
              data-bs-slide="next"
            >
              <i class="bi bi-arrow-right"></i>
            </button>
          </div>
          <div className="col-12">
            <div
              id="testimonial"
              class="carousel slide"
              data-bs-ride="carousel"
            >
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div class="testimonial-card card m-auto">
                    <img
                      className="rounded-circle tesimonial-img"
                      src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                      alt=""
                    />
                    <h2 className="testimonial-name">Vinay Kushwaha</h2>
                    <p className="testimonial-desc">
                      B.tech IIT Bombay{' '}
                      
                    </p>
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="testimonial-card card m-auto">
                    <img
                      className="rounded-circle tesimonial-img"
                      src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                      alt=""
                    />
                    <h2 className="testimonial-name">Vinay Kushwaha</h2>
                    <p className="testimonial-desc">
                      B.tech IIT Bombay{' '}
                    </p>
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="testimonial-card card m-auto">
                    <img
                      className="rounded-circle tesimonial-img"
                      src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                      alt=""
                    />
                    <h2 className="testimonial-name">Vinay Kushwaha</h2>
                    <p className="testimonial-desc">
                      B.tech IIT Bombay{' '}
                     
                    </p>
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
