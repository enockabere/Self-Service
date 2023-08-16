import React from 'react';
import ReactDOM from 'react-dom/client';
import './Authentication/static/css/bootstrap.min.css';
import './Authentication/static/css/fontawesome/all.min.css';
import './Authentication/static/css/index.css';
import './Authentication/static/css/components.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
