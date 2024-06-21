// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import { Navbar } from './components';
// import { Home, SearchList } from './containers';
// import './App.scss';
// import store from './redux/configureStore';

// const App: React.FC = () => {
//   const [loading, setLoading] = useState(true);
//   const spinner = document.getElementById('spinner');

//   if (spinner) {
//     setTimeout(() => {
//       spinner.style.display = 'none';
//       setLoading(false);
//     }, 3000);
//   }

//   return (
//     !loading && (
//       <Provider store={store}>
//         <Router>
//           <div className="App">
//             <Navbar />
//             <Routes>
//               <Route path="/" element={<Home />} />
//               <Route path="/books" element={<SearchList />} />
//             </Routes>
//           </div>
//         </Router>
//       </Provider>
//     )
//   );
// };

// export default App;

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Navbar } from './components';
import { Home, SearchList } from './containers';
import './App.scss';
import store from './redux/configureStore';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const spinner = document.getElementById('spinner');
    if (spinner) {
      setTimeout(() => {
        spinner.style.display = 'none';
        setLoading(false);
      }, 3000);
    }
  }, []);

  if (loading) {
    return null;
  }

  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/books" element={<SearchList />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
