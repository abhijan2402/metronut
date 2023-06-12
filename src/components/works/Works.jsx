import React from 'react';
import './Work.css';

const Works = () => {
  return (
    <div className="container mt-5" style={{ overflowX: 'hidden' }}>
      <h1
        className="text-center pt-5"
        style={{ fontSize: '3rem', fontWeight: '700' }}
      >
        How{' '}
        <span style={{ fontSize: '3rem', fontWeight: '700', color: '#ff6600' }}>
          MentorNut
        </span>{' '}
        MentorShip Works
      </h1>

      <div className="container work-card-group gap-4">
        <Card classname={'work-card'} />
        <Card classname={'work-card-reverse'} />
        <Card classname={'work-card'} />
        <Card classname={'work-card-reverse'} />
        <Card classname={'work-card'} />
        <Card classname={'work-card-reverse'} />
      </div>
    </div>
  );
};

const Card = ({ classname }) => (
  <div className={`${classname}`}>
    <div className="work-card-img">
      <img src="https://cdn-icons-png.flaticon.com/512/609/609046.png" alt="" />
    </div>

    <div className="work-card-box">
      <div className="work-card-details">
        <div className="work-card-details-heading">
          <p>1</p>
          <h2>Make Time for Your Kids</h2>
        </div>

        <p className="work-card-details-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </p>
      </div>
    </div>
  </div>
);

export default Works;
