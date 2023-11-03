import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import GallaryContext from './contexts/GallaryContext';



ReactDOM.render(
  <GallaryContext>
    <App />
  </GallaryContext>,
  document.getElementById("root")
);
