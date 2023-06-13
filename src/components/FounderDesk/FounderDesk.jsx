import React from 'react';
import './FounderDesk.css';

const FounderDesk = () => {
  return (
    <div className="container mt-5">
      <h1
        className="text-center pt-5 pb-5 founder-desk-header"
      >
        From Our{' '}
        <span >
          Founder's
        </span>{' '}
        Desk
      </h1>

      <div className="row mt-5 align-items-center">
        <div className="col-md-3 col-12 text-center">
          <img
          className='rounded-circle founder-desk-img'
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt=""
          />
          <h2 className='founder-name'>Vinay Kushwaha</h2>
          <p className='founder-desc'>B.tech IIT Bombay <a href="#" target='blank'><i class="bi bi-linkedin"></i></a></p>
        </div>

        <div className="col-md-8 col-12">
          <p className='mb-5 frounder-desk-desc'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod temporincididunt utlabore et dolore magna aliqua. Ut enim ad
            minim
          </p>
        </div>
      </div>
    </div>
  );
};

export default FounderDesk;
