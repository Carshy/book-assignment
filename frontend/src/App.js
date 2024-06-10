import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from './components';
import './App.scss';

const App = () => {
  return (
    <motion.div className="app">
      <Navbar />
    </motion.div>
  );
};

export default App;
