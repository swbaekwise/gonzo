import React from 'react';
import { Route, Link, Routes, BrowserRouter as Router } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';

import Home from './Home';
import Sub from './Sub';

const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Fukc Test
          </p>

          <Link to="/home" style={{ textDecoration: 'none', color: 'inherit' }}>메인페이지</Link>
          <Link to="/sub" style={{ textDecoration: 'none', color: 'inherit' }}>서브페이지</Link>
        </header>

        <hr className="App-hr" />

        <main>
          <Routes>
            <Route exact path="/home" element={<Home />} />
            <Route path="/sub" element={<Sub />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;