import React, { useState } from 'react';
import './ProblemStatement.css';
import { downArrow } from '../../assets';
import { AnimatePresence, motion } from 'framer-motion';

const ProblemStatement = () => {
  const [statementOneToggle, setStatementOneToggle] = useState(false);
  const [statementTwoToggle, setStatementTwoToggle] = useState(false);
  const [statementThreeToggle, setStatementThreeToggle] = useState(false);
  const [statementFourToggle, setStatementFourToggle] = useState(false);
  const [statementFiveToggle, setStatementFiveToggle] = useState(false);
  const [statementSixToggle, setStatementSixToggle] = useState(false);
  const [statementSevenToggle, setStatementSevenToggle] = useState(false);
  const [statementEightToggle, setStatementEightToggle] = useState(false);
  const [statementNineToggle, setStatementNineToggle] = useState(false);

  return (
    <div className="container mt-5">
      <div className="problemStatement-heading">
        <h1>WE KNOW YOUR PROBLEM</h1>
        <p>Mentor Will Solve your All Problems</p>
      </div>

      <div className="problemStatement-content">
        <div className="problemStatement-group">
          <ProblemStatementCard
            title={'Problem Statement One (In brief)'}
            toggleFunc={setStatementOneToggle}
            toggle={statementOneToggle}
          />

          <ProblemStatementCard
            title={'Problem Statement Two (In brief)'}
            toggleFunc={setStatementTwoToggle}
            toggle={statementTwoToggle}
          />

          <ProblemStatementCard
            title={'Problem Statement Three (In brief)'}
            toggleFunc={setStatementThreeToggle}
            toggle={statementThreeToggle}
          />

          <ProblemStatementCard
            title={'Problem Statement Four (In brief)'}
            toggleFunc={setStatementFourToggle}
            toggle={statementFourToggle}
          />

          <ProblemStatementCard
            title={'Problem Statement Five (In brief)'}
            toggleFunc={setStatementFiveToggle}
            toggle={statementFiveToggle}
          />

          <ProblemStatementCard
            title={'Problem Statement Six (In brief)'}
            toggleFunc={setStatementSixToggle}
            toggle={statementSixToggle}
          />

          <ProblemStatementCard
            title={'Problem Statement Seven (In brief)'}
            toggleFunc={setStatementSevenToggle}
            toggle={statementSevenToggle}
          />

          <ProblemStatementCard
            title={'Problem Statement Eight (In brief)'}
            toggleFunc={setStatementEightToggle}
            toggle={statementEightToggle}
          />

          <ProblemStatementCard
            title={'Problem Statement Nine (In brief)'}
            toggleFunc={setStatementNineToggle}
            toggle={statementNineToggle}
          />
        </div>

        <div className="problem-img" style={{height: 400}}>
          <p>Image Related </p>
        </div>
      </div>
    </div>
  );
};

const ProblemStatementCard = ({ title, toggleFunc, toggle }) => {
  const variants = {
    open: { height: '110px' },
    closed: { height: '0px' },
  };

  return (
    <div className="problemStatement-item">
      <div>
        <p>{title}</p>

        <AnimatePresence>
          {toggle && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={variants}
              transition={{ duration: 0.3, exit: { duration: 0.1 } }}
              className='problem-statement-textArea-outer'
            >
              <textarea />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <button onClick={() => toggleFunc(!toggle)}>
        <img src={downArrow} alt="" /> More
      </button>
    </div>
  );
};

export default ProblemStatement;
