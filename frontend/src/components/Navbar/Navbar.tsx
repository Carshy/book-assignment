import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import { NavLink, useNavigate } from "react-router-dom";
import './Navbar.scss';

const Navbar = () => {
  const navigate = useNavigate();

  const [toggle, setToggle] = useState(false);
  const [fix, setFix] = useState(false);

  const navScroll = () => {
    if (window.scrollY >= 60) {
      setFix(true);
    } else {
      setFix(false);
    }
  };

  window.addEventListener('scroll', navScroll);

  return (
    <div>
      <nav className={fix ? 'nav__container fixed' : 'nav__container'}>
        <div className="app__navbar-logo">
          <img src={images.logo} alt="App Logo" />
        </div>

        <ul className="app__navbar-links">
          <li>
            <NavLink
              to="/"
              onClick={() => setNavActive(false)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/books"
              onClick={() => setNavActive(false)}
            >
              Search for Books
            </NavLink>
          </li>
        </ul>
        
        <div className="app__navbar-menu">
          <HiMenuAlt4 onClick={() => setToggle(true)} />
          
          {toggle && (
            <motion.div
              className="toggle-menu"
              whileInView={{ x: [300, 0] }}
              transition={{ duration: 0.85, ease: 'easeOut' }}
            >
              <HiX onClick={() => setToggle(false)} />
              <ul className="nav__links">
                <li>
                  <NavLink
                    to="/"
                    onClick={() => setToggle(false)}
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/books"
                    onClick={() => setToggle(false)}
                  >
                    Search for Books
                  </NavLink>
                </li>
              </ul>
            </motion.div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

// **************************************************************
