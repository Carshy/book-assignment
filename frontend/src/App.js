import React from 'react';
import { motion } from 'framer-motion';
import { Provider } from 'react-redux';
// import {
//   About,
//   Footer,
//   Home,
//   Projects,
//   Testimonials,
// } from './containers';
import { Navbar } from './components';
// import store from './redux/configureStore';
// import { pageVariants } from './containers/Pagevariants/Pagevariants';
import './App.scss';

const App = () => {
  
  return (
    <motion.div className="app">
      <Provider store={store}>
        <Navbar />
      </Provider>
    </motion.div>
  );
};

export default App;
