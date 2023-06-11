import React from 'react';
import './Landing.css';
import {motion} from 'framer-motion'

const Landing = () => {
  return (
    <div  className="landing-container">

      <motion.h1 initial={{opacity: 0,  y: '-100vh' }} animate={{opacity: 1, y: '0'}} transition={{type: 'tween', duration: 0.5}}>
        Get your Dream IIT <br /> With Personalized 1:1 Mentorship
      </motion.h1>
      <motion.p initial={{opacity: 0,  x: '500%' }} animate={{opacity: 1, x: '0'}} transition={{type: 'tween', duration: 0.5}}>
        1:1 personal mentorship with iitian helps you to achieve your dream IIT
      </motion.p>

      <motion.div initial={{x: '-500%'}} animate={{x: 0}} transition={{duration: 0.5}} className='landing-price'>
        <h2>MENTORSHIP SESSION &nbsp;</h2>
        <h2> Rs 400<div className='stick-line' /></h2>
        <h2>&nbsp; Rs 200</h2>
      </motion.div>
    </div>
  );
};

export default Landing;
