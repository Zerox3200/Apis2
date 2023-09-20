import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Store } from './ntr/Store.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={Store}>
        <App />
      </Provider>
    </HashRouter>
  </React.StrictMode>
);


reportWebVitals();
