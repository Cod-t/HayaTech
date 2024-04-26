import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux';
import {store} from './store/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ThemeContext from "./context/ThemeContext";
import { ToastContainer } from "react-toastify";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store = {store}>
        <BrowserRouter basename='/'>
          <ThemeContext>
            <App />
            <ToastContainer/>
          </ThemeContext>
        </BrowserRouter>
      </Provider>
  </React.StrictMode>
);

reportWebVitals();
