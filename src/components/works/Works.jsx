import React from 'react';
import './Work.css';
import Lottie from 'lottie-react';
import target from '../../assets/target.json';
import support from '../../assets/support.json';
import planning from '../../assets/planning.json';
import updates from '../../assets/updates.json';
import strategy from '../../assets/strategy.json';
import approved from '../../assets/approved.json';
import goal from '../../assets/goal.json';
import Header from '../Header/Header'

const Works = () => {
  return (
    <div className="container mt-5 pt-3 pt-md-5" style={{ overflowX: 'hidden' }}>
      <Header text1={'How'} text2={'MentorNut'} text3={'MentorShip Works'} />

      <div className="container work-card-group gap-4 mt-5 pt-3 pt-md-5">
        <Card classname={'work-card'} sl={1} img={support} />
        <Card classname={'work-card-reverse'} sl={2} img={planning} />
        <Card classname={'work-card'} sl={3} img={updates} />
        <Card classname={'work-card-reverse'} sl={4} img={strategy} />
        <Card classname={'work-card'} sl={5} img={approved} />
        <Card classname={'work-card-reverse'} sl={6} img={goal} />
      </div>
    </div>
  );
};

const Card = ({ classname, sl, img }) => (
  <div className={`${classname}`}>
    <div className="work-card-img">
      <Lottie
        animationData={img}
        style={{ width: '100%', height: '100%' }}
      />
    </div>

    <div className="work-card-box">
      <div className="work-card-details">
        <div className="work-card-details-heading">
          <p>{sl}</p>
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
