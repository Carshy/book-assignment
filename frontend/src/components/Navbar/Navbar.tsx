import React, { useState } from 'react';
// import { HiMenuAlt4, HiX } from 'react-icons/hi';
// import { motion } from 'framer-motion';
import { images } from '../../constants';
import { NavLink, useNavigate } from "react-router-dom";
import './Navbar.scss';

const Navbar = () => {

  const [navActive, setNavActive] = useState<boolean>(false);
  const navigate = useNavigate();

  return (
    <div>
      <nav className="nav__container">
        <div className="app__navbar-logo">
          <img src={images.logo} alt="App Logo" />
        </div>

        <ul className="nav__links">
          <li>
            <NavLink
              to="/"
              onClick={() => setNavActive(false)}
            >
              Home
            </NavLink>
          </li>
          {/* <li>
            <NavLink
              to="/"
              onClick={() => setNavActive(false)}
            >
              Book Resources
            </NavLink>
          </li> */}
          <li>
            <NavLink
              to="/books"
              onClick={() => setNavActive(false)}
            >
              Search for Books
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

// **************************************************************
