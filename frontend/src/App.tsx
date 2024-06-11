import React from 'react';
import { Provider } from 'react-redux';
import { Navbar } from './components';
import { Home, Books } from './containers';
import './App.scss';
import store from './redux/configureStore';

const App: React.FC = () => {
  return (
    <div className="app">
      <Provider store={store}>
        <Navbar />
        <Home />
        <Books />
      </Provider>
    </div>
  );
};

export default App;
