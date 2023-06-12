import React from 'react';
import './CheckList.css';
import { check1, check2, check3, check4 } from '../../assets';

const CheckList = () => {
  return (
    <div className="container mt-5 pt-5">
      <div className="problemStatement-heading">
        <h1>ARE YOU DOING THIS</h1>
        <p>Daily check list...</p>
      </div>

      <div className="row mt-5 pt-5">
        <div className="col-5 check-list-para">
          <h3>Making good notes Through lecture</h3>
          <p>
            Defining your high-level goals for the next 12 months is the
            foundation of your business development plan. Which 3-5
            accomplishments will determine whether or not your year has been
            successful.
          </p>
        </div>

        <div className="col-2 text-center check-list-icon-box">
          <div className="check-list-icon">
            <img src={check1} alt="" />
          </div>
          <div className="dot"></div>
        </div>

        <div className="col-5 check-list-header">
          <h2>Making Good Notes</h2>
        </div>

        <div
          className="col-5 check-list-header"
          style={{ justifyContent: 'flex-end' }}
        >
          <h2>Daily Revision</h2>
        </div>

        <div className="col-2 text-center check-list-icon-box">
          <div className="check-list-icon">
            <img src={check2} alt="" />
          </div>
          <div className="dot"></div>
        </div>

        <div
          className="col-5 check-list-para"
          style={{ background: 'linear-gradient(90deg, #f5cbc4, #f9d5c0)' }}
        >
          <h3>Making good notes Through lecture</h3>
          <p>
            Focused business development allows you to qualify and score
            prospects in order to prioritize limited sales and marketing
            resources. The right target markets and buyer profiles.
          </p>
        </div>

        <div
          className="col-5 check-list-para"
          style={{ background: 'linear-gradient(90deg, #f5cbc4, #f9d5c0)' }}
        >
          <h3>Making good notes Through lecture</h3>
          <p>
            The next step is to determine which channels will generate leads for
            each market segment. A modern business development plan must be.
          </p>
        </div>

        <div className="col-2 text-center check-list-icon-box">
          <div className="check-list-icon">
            <img src={check3} alt="" />
          </div>
          <div className="dot"></div>
        </div>

        <div className="col-5 check-list-header">
          <h2>Question Practice</h2>
        </div>

        <div
          className="col-5 check-list-header"
          style={{ justifyContent: 'flex-end' }}
        >
          <h2>Prorep Test Analysis</h2>
        </div>

        <div className="col-2 text-center check-list-icon-box">
          <div className="check-list-icon">
            <img src={check4} alt="" />
          </div>
        </div>
        <div
          className="col-5 check-list-para"
          style={{ background: 'linear-gradient(90deg, #f5cbc4, #f9d5c0)' }}
        >
          <h3>Making good notes Through lecture</h3>
          <p>
            Data-driven business development allows managers to stay on top of
            KPI performance throughout the quarter, eliminating surprises at the
            end. In addition, it provides timely market feedback on the
            effectiveness.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CheckList;
