import React from 'react';
import { motion } from 'framer-motion';
import { Provider } from 'react-redux';
import { Navbar } from './components';
import './App.scss';
import store from './redux/configureStore';

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
