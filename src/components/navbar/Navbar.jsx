import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { logo1 } from '../../assets'

const Navbar = () => {
  const {pathname} = window.location
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
          <Link className={`${pathname === '/metronut' && 'activeLink'}`} to={'/metronut'}>Home</Link>
        </li>
        <li>
          <Link className={`${pathname === '/enroll' && 'activeLink'}`} to={'/enroll'}>Enroll</Link>
        </li>
        <li>
          <Link className={`${pathname === '/why-metorship' && 'activeLink'}`} to={'/why-metorship'}>Why Mentorship</Link>
        </li>
        <li>
          <Link className={`${pathname === '/neet-mentorship' && 'activeLink'}`} to={'/neet-mentorship'}>NEET Mentorship</Link>
        </li>
        <li>
          <Link className={`${pathname === '/career-mentorship' && 'activeLink'}`} to={'/career-mentorship'}>Career Mentorship</Link>
        </li>
        <li>
          <Link className={`${pathname === '/about-us' && 'activeLink'}`} to={'/about-us'}>About Us</Link>
        </li>
      </ul>

      <button className='loginBtn' type="button">Log in</button>
    </nav>
  );
};

export default Navbar;
