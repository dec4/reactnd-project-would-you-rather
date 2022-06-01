import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reducer from './reducers'
import middleware from './middleware'
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(reducer, middleware)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
