import React from 'react';
import './Landing.css';
import { bombay, delhi, kanpur, kharappur, madras, roorkee, userFill, userOutline } from '../../assets';

const Landing = () => {
  return (
    <div className="landing-container">
      <h1>
        Get your Dream IIT <br /> With Personalized 1:1 Mentorship
      </h1>
      <p style={{ fontSize: '1.8rem', color: '#000000', lineHeight: '1rem' }}>
        1:1 personal mentorship with iitian helps you to achieve your dream IIT
      </p>

      <div className="landing-price">
        <h2>MENTORSHIP SESSION &nbsp;</h2>
        <h2>
          {' '}
          Rs 400
          <div className="stick-line" />
        </h2>
        <h2>&nbsp; Rs 200</h2>
      </div>

      <p style={{ color: '#000000', display: 'flex', gap: 10, marginTop: 3 }}>
        There's a{' '}
        <p style={{ color: '#000000', fontWeight: '500' }}>
          FREE TRIAL SESSION
        </p>{' '}
        that you can use to find your perfect match
      </p>

      <div className="container px-4 py-3 d-flex gap-3 align-items-center" style={{ backgroundColor: '#fff', marginTop: '1rem', borderRadius: '1.2rem' }}>
        <div className='d-flex align-items-center justify-content-between landing-numbers'>
          <div className='d-flex align-items-center gap-3'>
            <img src={userFill} alt="" />
            <div className='text-center'>
              <h3 >20+</h3>
              <p>Experienced Mentor</p>
            </div>
          </div>

          <div className='d-flex align-items-center gap-3'>
            <img src={userOutline} alt="" />
            <div className='text-center'>
              <h3>200+</h3>
              <p>Happy Mentee</p>
            </div>
          </div>
        </div>

        <div className='vr80' />

          <h3 className='text-center text-uppercase mentor-from' style={{color: '#000'}}>Mentor from <h3 className='d-flex justify-content-center gap-2' style={{color: '#ff691b'}}>TOP IIT <h3 style={{color: '#000'}}>like</h3></h3> </h3>

        <div className='d-flex gap-5 collges'>
          <img width={50} height={50} src={bombay} alt="" />
          <img width={50} height={50} src={madras} alt="" />
          <img width={50} height={50} src={kanpur} alt="" />
          <img width={50} height={50} src={roorkee} alt="" />
          <img width={50} height={50} src={kharappur} alt="" />
          <img width={50} height={50} src={delhi} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Landing;
