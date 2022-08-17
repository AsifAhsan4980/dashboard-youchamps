import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { store } from './store';
// scroll bar/
import 'simplebar/src/simplebar.css';

import { Amplify } from "aws-amplify";
import awsExports from "./aws-exports";


// third-party
import { Provider as ReduxProvider } from 'react-redux';

Amplify.configure({ ...awsExports, ssr: true });


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <ReduxProvider store={store}>
          <BrowserRouter basename="/">
              <App />
          </BrowserRouter>
      </ReduxProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();