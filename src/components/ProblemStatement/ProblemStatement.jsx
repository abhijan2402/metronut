import React from 'react';
import './ProblemStatement.css';
import { downArrow } from '../../assets';

const ProblemStatement = () => {
  return (
    <div className="problemStatement-container">
      <div className="problemStatement-heading">
        <h1>WE KNOW YOUR PROBLEM</h1>
        <p>Mentor Will Solve your All Problems</p>
      </div>

      <div className="problemStatement-content">
        <div className="problemStatement-group">
          <div className='problemStatement-item'>
            <div>
              <p>Problem Statement One (In brief)</p>
              <textarea style={{display: 'none'}} name="" id="" cols="30" rows="10"></textarea>
            </div>

            <button><img src={downArrow} alt="" /> More</button>
          </div>
        </div>

        <div className='image-upload'>
          <input type="file" />
        </div>
      </div>
    </div>
  );
};

export default ProblemStatement;
