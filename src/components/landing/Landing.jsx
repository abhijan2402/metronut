import React from 'react';
import './Landing.css';
import { bombay, delhi, kanpur, kharappur, madras, roorkee, userFill, userOutline } from '../../assets';

const Landing = () => {
  return (
    <div className="landing-container">
      <h1>
        Get your Dream IIT <br /> With Personalized 1:1 Mentorship
      </h1>
      <p className='landing-sub-header'>
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

      <p className='landing-trail'>
        There's a{' '}
        <span style={{ color: '#000000', fontWeight: '500' }}>
          FREE TRIAL SESSION
        </span>{' '}
        that you can use to find your perfect match
      </p>

      <div className='landing-rating'>
        <div className='landing-rating-imges'>
          <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="" />
          <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="" />
          <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="" />
        </div>

        <div className='landing-rating-desc'>
          <h2><i className="bi bi-star-fill"></i> 4.6/5</h2>
          <p>20+ mentor</p>
        </div>
      </div>


      <div className="container px-4 py-3 d-flex gap-3 align-items-center landing-white-bar landing-box-desktop" style={{ backgroundColor: '#fff', marginTop: '1rem', borderRadius: '1.2rem' }}>
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

         <div className='landing-vr' style={{width: 2, height: 50, backgroundColor: '#000000'}} ></div>

          <h3 className='text-center text-uppercase mentor-from' style={{color: '#000'}}>Mentor from <span className='d-flex justify-content-center gap-2' style={{color: '#ff691b'}}>TOP IIT <span style={{color: '#000'}}>like</span></span> </h3>

        <div className='d-flex gap-2 gap-md-5 collges'>
          <img width={50} height={50} src={bombay} alt="" />
          <img width={50} height={50} src={madras} alt="" />
          <img width={50} height={50} src={kanpur} alt="" />
          <img width={50} height={50} src={roorkee} alt="" />
          <img width={50} height={50} src={kharappur} alt="" />
          <img width={50} height={50} src={delhi} alt="" />
        </div> 
      </div>

      <div className="container align-items-center landing-box-mobile" >

          <h3 className='text-center text-uppercase mentor-from' style={{color: '#000'}}>Mentor from <span className='d-flex justify-content-center gap-2' style={{color: '#ff691b'}}>TOP IIT <span style={{color: '#000'}}>like</span></span> </h3>

        <div className='d-flex px-4 py-3  gap-2 gap-md-5 collges' >
          <img src={bombay} alt="" />
          <img src={madras} alt="" />
          <img src={kanpur} alt="" />
          <img src={roorkee} alt="" />
          <img src={kharappur} alt="" />
          <img src={delhi} alt="" />
        </div> 
      </div>
    </div>
  );
};

export default Landing;