import React from 'react';
import './CheckList.css';
import { ball } from '../../assets';

const CheckList = () => {
  return (
    <div className="container mt-5 pt-5">
      <div className="problemStatement-heading">
        <h1>ARE YOU DOING THIS</h1>
        <p>Daily check list...</p>
      </div>

      <div className="row mt-5 pt-5">
        <div className="col-5 mb-5">
          <h3>Making good notes Through lecture</h3>
          <p>
            Defining your high-level goals for the next 12 months is the
            foundation of your business development plan. Which 3-5
            accomplishments will determine whether or not your year has been
            successful.
          </p>
        </div>

        <div className="col-2 text-center">
          <img src={ball} width={'80%'} alt="" />
          <div className='ball-dot'></div>
        </div>

        <div className="col-5">
          <h2>Making Good Notes</h2>
        </div>

        <div className="col-5">
          <h3>Making good notes Through lecture</h3>
          <p>
            Defining your high-level goals for the next 12 months is the
            foundation of your business development plan. Which 3-5
            accomplishments will determine whether or not your year has been
            successful.
          </p>
        </div>

        <div className="col-2 text-center test">
          <img className='ball' src={ball} width={'80%'} alt="" />
          
        </div>

        <div className="col-5">
          <h2>Making Good Notes</h2>
        </div>
      </div>
    </div>
  );
};

export default CheckList;
