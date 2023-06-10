import React from 'react';
import './Landing.css';

const Landing = () => {
  return (
    <div className="landing-container">
      <h1>
        Get your Dream IIT <br /> With Personalized 1:1 Mentorship
      </h1>
      <p>
        1:1 personal mentorship with iitian helps you to achieve your dream IIT
      </p>

      <div className='landing-price'>
        <h2>MENTORSHIP SESSION &nbsp;</h2>
        <h2> Rs 400<div className='stick-line' /></h2>
        <h2>&nbsp; Rs 200</h2>
      </div>
    </div>
  );
};

export default Landing;
