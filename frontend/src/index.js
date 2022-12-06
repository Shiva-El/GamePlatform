import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));  //define root (entry point) object
root.render(   //This render() method tells React which React component should be injected into that root entry point. In most React apps, this is a component called App.
  <React.StrictMode>
    <App />  {/* it's the root component of the React app. It's the main component that is rendered to the DOM */} 
  </React.StrictMode>
);

reportWebVitals();
