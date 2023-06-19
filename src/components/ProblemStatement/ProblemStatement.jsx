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

  const problemStatementData = [
    {
      id: 1,
      title: 'Problem Statement One (In brief)',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nostrum et ipsam ratione eius. Distinctio.',
      toggleFunc: () => handleToggle('statementOne'),
      toggle: statementToggle.statementOne,
    },

    {
      id: 2,
      title: 'Problem Statement Two (In brief)',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nostrum et ipsam ratione eius. Distinctio.',
      toggleFunc: () => handleToggle('statementTwo'),
      toggle: statementToggle.statementTwo,
    },

    
    {
      id: 3,
      title: 'Problem Statement Two (In brief)',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nostrum et ipsam ratione eius. Distinctio.',
      toggleFunc: () => handleToggle('statementThree'),
      toggle: statementToggle.statementThree,
    },

    {
      id: 4,
      title: 'Problem Statement Two (In brief)',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nostrum et ipsam ratione eius. Distinctio.',
      toggleFunc: () => handleToggle('statementFour'),
      toggle: statementToggle.statementFour,
    },

    {
      id: 5,
      title: 'Problem Statement Two (In brief)',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nostrum et ipsam ratione eius. Distinctio.',
      toggleFunc: () => handleToggle('statementFive'),
      toggle: statementToggle.statementFive,
    },

    {
      id: 6,
      title: 'Problem Statement Two (In brief)',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nostrum et ipsam ratione eius. Distinctio.',
      toggleFunc: () => handleToggle('statementSix'),
      toggle: statementToggle.statementSix,
    },

    {
      id: 7,
      title: 'Problem Statement Two (In brief)',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nostrum et ipsam ratione eius. Distinctio.',
      toggleFunc: () => handleToggle('statementSeven'),
      toggle: statementToggle.statementSeven,
    },

    {
      id: 8,
      title: 'Problem Statement Two (In brief)',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nostrum et ipsam ratione eius. Distinctio.',
      toggleFunc: () => handleToggle('statementEight'),
      toggle: statementToggle.statementEight,
    },

    {
      id: 9,
      title: 'Problem Statement Two (In brief)',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nostrum et ipsam ratione eius. Distinctio.',
      toggleFunc: () => handleToggle('statementNine'),
      toggle: statementToggle.statementNine,
    },

  ];

  return (
    <div className="container mt-5 pt-3 pt-md-5">
      <div className="problemStatement-heading">
        <h1>WE KNOW YOUR PROBLEM</h1>
        <p>Mentor Will Solve your All Problems</p>
      </div>

      <div className="problemStatement-content">
        <div className="problemStatement-group">
          {problemStatementData?.map((item) => (
            <ProblemStatementCard key={item.id} {...item} />
          ))}
        </div>

        <div className="problem-img" style={{ height: 400 }}>
          <p>Image Related</p>
        </div>
      </div>
    </div>
  );
};

const ProblemStatementCard = ({ title, toggleFunc, toggle, text, id }) => {
  const variants = {
    open: { height: '110px', transition: { duration: 0.3 } },
    closed: { height: '0px', transition: { duration: 0 } },
  };

  return (
    <div className="problemStatement-item pt">
      <div>
        <p>{id + '. ' + title}</p>

        <AnimatePresence>
          {toggle && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={variants}
              className="problem-statement-textArea-outer"
            >
              <textarea value={text} />
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
