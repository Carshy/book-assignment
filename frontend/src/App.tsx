import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Navbar } from './components';
import { Home, Books, SearchList } from './containers';
import './App.scss';
import store from './redux/configureStore';

const App: React.FC = () => {

  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/books" element={<SearchList />} />
            <Route path="/books/:book" element={<Books />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
