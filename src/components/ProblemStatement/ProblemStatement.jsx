import React, { useState } from 'react';
import './ProblemStatement.css';
import { downArrow } from '../../assets';
import { AnimatePresence, motion } from 'framer-motion';
const image1 =
  'https://www.potential.com/wp-content/uploads/2017/11/problem-solving.png';
const image2 =
  'https://www.indraconsulting.com/wp-content/uploads/2011/11/problem-solution-1024x775.jpg';
const image3 =
  'https://www.potential.com/wp-content/uploads/2017/11/problem-solving.png';
const image4 =
  'https://www.indraconsulting.com/wp-content/uploads/2011/11/problem-solution-1024x775.jpg';
const image5 =
  'https://www.potential.com/wp-content/uploads/2017/11/problem-solving.png';
const image6 =
  'https://www.indraconsulting.com/wp-content/uploads/2011/11/problem-solution-1024x775.jpg';
const image7 =
  'https://www.potential.com/wp-content/uploads/2017/11/problem-solving.png';
const image8 =
  'https://www.indraconsulting.com/wp-content/uploads/2011/11/problem-solution-1024x775.jpg';
  const image9 =
  'https://www.indraconsulting.com/wp-content/uploads/2011/11/problem-solution-1024x775.jpg';

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

  const [banner, setBanner] = useState(image1);

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
      toggleFunc: () => {
        handleToggle('statementOne');
        setBanner(image1);
      },
      toggle: statementToggle.statementOne,
    },

    {
      id: 2,
      title: 'Problem Statement Two (In brief)',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nostrum et ipsam ratione eius. Distinctio.',
      toggleFunc: () => {
        handleToggle('statementTwo');
        setBanner(image2);
      },
      toggle: statementToggle.statementTwo,
    },

    {
      id: 3,
      title: 'Problem Statement Two (In brief)',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nostrum et ipsam ratione eius. Distinctio.',
      toggleFunc: () => {
        handleToggle('statementThree');
        setBanner(image3);
      },
      toggle: statementToggle.statementThree,
    },

    {
      id: 4,
      title: 'Problem Statement Two (In brief)',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nostrum et ipsam ratione eius. Distinctio.',
      toggleFunc: () => {
        handleToggle('statementFour');
        setBanner(image4);
      },
      toggle: statementToggle.statementFour,
    },

    {
      id: 5,
      title: 'Problem Statement Two (In brief)',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nostrum et ipsam ratione eius. Distinctio.',
      toggleFunc: () => {
        handleToggle('statementFive');
        setBanner(image5);
      },
      toggle: statementToggle.statementFive,
    },

    {
      id: 6,
      title: 'Problem Statement Two (In brief)',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nostrum et ipsam ratione eius. Distinctio.',
      toggleFunc: () => {
        handleToggle('statementSix');
        setBanner(image6);
      },
      toggle: statementToggle.statementSix,
    },

    {
      id: 7,
      title: 'Problem Statement Two (In brief)',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nostrum et ipsam ratione eius. Distinctio.',
      toggleFunc: () => {
        handleToggle('statementSeven');
        setBanner(image7);
      },
      toggle: statementToggle.statementSeven,
    },

    {
      id: 8,
      title: 'Problem Statement Two (In brief)',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nostrum et ipsam ratione eius. Distinctio.',
      toggleFunc: () => {
        handleToggle('statementEight');
        setBanner(image8);
      },
      toggle: statementToggle.statementEight,
    },

    {
      id: 9,
      title: 'Problem Statement Two (In brief)',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nostrum et ipsam ratione eius. Distinctio.',
      toggleFunc: () => {handleToggle('statementNine'); setBanner(image9);},
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
          <img
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            src={banner}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

const ProblemStatementCard = ({
  title,
  toggleFunc,
  toggle,
  text,
  id,
  changeImg,
}) => {
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
