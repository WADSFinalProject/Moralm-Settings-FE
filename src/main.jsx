import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Settings from './Settings';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Settings />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
