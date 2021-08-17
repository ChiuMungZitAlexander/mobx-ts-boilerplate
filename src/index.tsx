import * as React from 'react';
import ReactDOM from 'react-dom';

import ErrorBoundary from 'src/ErrorBoundary';

import RouteView from 'src/routes';

import { GlobalProvider } from 'src/contexts/GlobalContext';

import './index.scss';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <GlobalProvider>
        <RouteView />
      </GlobalProvider>
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
