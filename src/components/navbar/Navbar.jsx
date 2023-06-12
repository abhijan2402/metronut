import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { logo1 } from '../../assets'

const Navbar = () => {
  return (
    <nav className="navbar container-fluid">
      <div className="brand">
        <img
          src={logo1}
          alt=""
        />
      </div>

      <ul className='navabr-links'>
        <li>
          <Link className='activeLink' to={'/metronut'}>Home</Link>
        </li>
        <li>
          <Link to={'/metronut/Enroll'}>Enroll</Link>
        </li>
        <li>
          <Link to={'/metronut/why-metorship'}>Why Mentorship</Link>
        </li>
        <li>
          <Link to={'/metronut/neet-mentorship'}>NEET Mentorship</Link>
        </li>
        <li>
          <Link to={'/metronut/career-mentorship'}>Career Mentorship</Link>
        </li>
        <li>
          <Link to={'/metronut/About'}>About Us</Link>
        </li>
      </ul>

      <button className='loginBtn' type="button">Log in</button>
    </nav>
  );
};

export default Navbar;
