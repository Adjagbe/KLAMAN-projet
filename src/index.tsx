import './index.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import App from './App';
import React from 'react';
import reportWebVitals from './reportWebVitals';
import 'react-multi-carousel/lib/styles.css';
import 'react-toastify/dist/ReactToastify.css';
  const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
  );
  root.render(
    
    <React.StrictMode>
      <Router>
        <App/>
        <ToastContainer />
      </Router>
    </React.StrictMode>
  );
  reportWebVitals();