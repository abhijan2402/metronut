import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { logo1 } from '../../assets';
import { AnimatePresence, motion } from 'framer-motion';

const Navbar = () => {
  const { pathname } = window.location;
  const { width } = window.screen;
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    if (toggle) {
      document.body.classList.add('disable-scroll');
    } else {
      document.body.classList.remove('disable-scroll');
    }

    return () => {
      document.body.classList.remove('disable-scroll');
    };
  }, [toggle]);
  return (
    <nav className="navbar container-fluid">
      <div className="brand">
        <img src={logo1} alt="" />
      </div>

      <div
            className={`navabr-links-outer menu-large`}
          >
            <ul className="navabr-links">
              <button className="nav-close" onClick={() => setToggle(false)}>
                <i className="bi bi-x-circle-fill"></i>
              </button>
              <li>
                <Link
                  className={`${pathname === '/metronut' && 'activeLink'}`}
                  to={'/metronut'}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className={`${
                    pathname === '/metronut/enroll' && 'activeLink'
                  }`}
                  to={'/metronut/enroll'}
                >
                  Enroll
                </Link>
              </li>
              <li>
                <Link
                  className={`${
                    pathname === '/metronut/why-metorship' && 'activeLink'
                  }`}
                  to={'/metronut/why-metorship'}
                >
                  Why Mentorship
                </Link>
              </li>
              <li>
                <Link
                  className={`${
                    pathname === '/metronut/neet-metorship' && 'activeLink'
                  }`}
                  to={'/metronut/neet-metorship'}
                >
                  NEET Mentorship
                </Link>
              </li>
              <li>
                <Link
                  className={`${
                    pathname === '/metronut/career-mentorship' && 'activeLink'
                  }`}
                  to={'/metronut/career-mentorship'}
                >
                  Career Mentorship
                </Link>
              </li>
              <li>
                <Link
                  className={`${
                    pathname === '/metronut/about' && 'activeLink'
                  }`}
                  to={'/metronut/about'}
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

      <AnimatePresence>
        {toggle && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', damping: 20, stiffness: 200 }}
            className={`navabr-links-outer mobile-menu  ${
              !toggle? 'hide' : ''
            }`}
          >
            <ul className="navabr-links">
              <button className="nav-close" onClick={() => setToggle(false)}>
                <i className="bi bi-x-circle-fill"></i>
              </button>
              <li>
                <Link
                  className={`${pathname === '/metronut' && 'activeLink'}`}
                  to={'/metronut'}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className={`${
                    pathname === '/metronut/enroll' && 'activeLink'
                  }`}
                  to={'/metronut/enroll'}
                >
                  Enroll
                </Link>
              </li>
              <li>
                <Link
                  className={`${
                    pathname === '/metronut/why-metorship' && 'activeLink'
                  }`}
                  to={'/metronut/why-metorship'}
                >
                  Why Mentorship
                </Link>
              </li>
              <li>
                <Link
                  className={`${
                    pathname === '/metronut/neet-metorship' && 'activeLink'
                  }`}
                  to={'/metronut/neet-metorship'}
                >
                  NEET Mentorship
                </Link>
              </li>
              <li>
                <Link
                  className={`${
                    pathname === '/metronut/career-mentorship' && 'activeLink'
                  }`}
                  to={'/metronut/career-mentorship'}
                >
                  Career Mentorship
                </Link>
              </li>
              <li>
                <Link
                  className={`${
                    pathname === '/metronut/about' && 'activeLink'
                  }`}
                  to={'/metronut/about'}
                >
                  About Us
                </Link>
              </li>

              <button className="loginBtn nav-login" type="button">
                Log in
              </button>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <button className="loginBtn nav-login2" type="button">
        Log in
      </button>

      <div onClick={() => setToggle(true)} className="menu-bar">
        <i className="bi bi-list"></i>
      </div>
    </nav>
  );
};

export default Navbar;
