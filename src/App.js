import React, { useEffect } from 'react';
import { WDOT, WDOTInitialization } from "dop-website-sdk";
import { Route, Link, Routes, BrowserRouter as Router } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';

import Home from './Home';
import Sub from './Sub';

const App = () => {
  useEffect(() => {
    WDOTInitialization.setConfig({
      serviceNumber: 20162,
      dotAccessToken: "ISwlTBthYy0mmwyYD/pbX0iZMv/G2HgAkWNpH7UWPa6AxDhvJmFC7zlnfo3amSOr+VdLvHzaT75Uv6qGCMf30g==",
      combackUserLimitDays: 14,
      dotEndPoint: "The endpoint of data receiving",
      adClkEndPoint: "The endpoint of data receiving",
      includeUrl: "Regular expression of analysis websites",
      excludeUrl: "",
      referrerExpire: 7
    });
    WDOTInitialization.init();
    console.log('App.js', WDOT);
  }, []);

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Link
            to="/"
            style={{ textDecoration: 'none', color: 'black', fontSize: '50px', fontWeight: 'bolder' }}
          >
            テスト ウェブ
          </Link>
          <img src={logo} className="App-logo" alt="logo" />

          <br />
          <hr />
          <Link
            to="/sub"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >go subpage!
          </Link>
          <br />
        </header>

        <hr className="App-hr" />

        <main>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/sub" element={<Sub />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;