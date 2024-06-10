import React, { useState } from 'react';
// import { Link } from 'react-scroll';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import './Navbar.scss';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [fix, setFix] = useState(false);

  const navScroll = () => {
    if (window.scrollY >= 300) {
      setFix(true);
    } else {
      setFix(false);
    }
  };

  window.addEventListener('scroll', navScroll);
  return (
    <div>
      <nav className={fix ? 'navbar fixed' : 'navbar'}>
        <div className="app__navbar-logo">
          <img src={images.logo} alt="App Logo" />
        </div>

        <ul className="app__navbar-links">
          {['Discover Ello', 'Parent Resources'].map((item) => (
            <li key={`link-${item}`} className="app__flex">
              <div />
              <a href={`#${item}`}>{item}</a>
            </li>
          ))}
        </ul>

        <div className="app__navbar-menu">
          <HiMenuAlt4 onClick={() => setToggle(true)} />

          {toggle && (
            <motion.div
              whileInView={{ x: [300, 0] }}
              transition={{ duration: 0.85, ease: 'easeOut' }}
            >
              <HiX onClick={() => setToggle(false)} />
              <ul>
                {['Discover Ello', 'Parent Resources'].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item}`}
                      onClick={() => setToggle(false)}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
