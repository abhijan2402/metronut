import React, { useState } from 'react';
import './ProblemStatement.css';
import { downArrow } from '../../assets';
import { AnimatePresence, motion } from 'framer-motion';

const ProblemStatement = () => {
  const [statementToggle, setStatementToggle] = useState({
    statementOne: false,
    statementTwo: false,
    statementThree: false,
    statementFour: false,
    statementFive: false,
    statementSix: false,
    statementSeven: false,
    statementEight: false,
    statementNine: false,
  });

  const handleToggle = (statement) => {
    setStatementToggle((prevState) => ({
      ...prevState,
      [statement]: !prevState[statement],
    }));

    // Close other statements
    for (let key in statementToggle) {
      if (key !== statement) {
        setStatementToggle((prevState) => ({
          ...prevState,
          [key]: false,
        }));
      }
    }
  };

  return (
    <div className="container mt-5 pt-3 pt-md-5">
      <div className="problemStatement-heading">
        <h1>WE KNOW YOUR PROBLEM</h1>
        <p>Mentor Will Solve your All Problems</p>
      </div>

      <div className="problemStatement-content">
        <div className="problemStatement-group">
          <ProblemStatementCard
            title={'Problem Statement One (In brief)'}
            toggleFunc={() => handleToggle('statementOne')}
            toggle={statementToggle.statementOne}
          />

          <ProblemStatementCard
            title={'Problem Statement Two (In brief)'}
            toggleFunc={() => handleToggle('statementTwo')}
            toggle={statementToggle.statementTwo}
          />

          <ProblemStatementCard
            title={'Problem Statement Three (In brief)'}
            toggleFunc={() => handleToggle('statementThree')}
            toggle={statementToggle.statementThree}
          />

          <ProblemStatementCard
            title={'Problem Statement Three (In brief)'}
            toggleFunc={() => handleToggle('statementFour')}
            toggle={statementToggle.statementFour}
          />

          <ProblemStatementCard
            title={'Problem Statement Three (In brief)'}
            toggleFunc={() => handleToggle('statementFive')}
            toggle={statementToggle.statementFive}
          />

          <ProblemStatementCard
            title={'Problem Statement Three (In brief)'}
            toggleFunc={() => handleToggle('statementSix')}
            toggle={statementToggle.statementSix}
          />

          <ProblemStatementCard
            title={'Problem Statement Three (In brief)'}
            toggleFunc={() => handleToggle('statementSeven')}
            toggle={statementToggle.statementSeven}
          />

          <ProblemStatementCard
            title={'Problem Statement Three (In brief)'}
            toggleFunc={() => handleToggle('statementEight')}
            toggle={statementToggle.statementEight}
          />

          <ProblemStatementCard
            title={'Problem Statement Three (In brief)'}
            toggleFunc={() => handleToggle('statementNine')}
            toggle={statementToggle.statementNine}
          />
        </div>

        <div className="problem-img" style={{ height: 400 }}>
          <p>Image Related</p>
        </div>
      </div>
    </div>
  );
};

const ProblemStatementCard = ({ title, toggleFunc, toggle }) => {
  const variants = {
    open: { height: '110px', transition: { duration: 0.3 } },
    closed: { height: '0px', transition: { duration: 0 } },
  };

  return (
    <div className="problemStatement-item pt">
      <div>
        <p>{title}</p>

        <AnimatePresence>
          {toggle && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={variants}
              className="problem-statement-textArea-outer"
            >
              <textarea />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <button onClick={toggleFunc}>
        <img src={downArrow} alt="" /> More
      </button>
    </div>
  );
};

export default ProblemStatement;
