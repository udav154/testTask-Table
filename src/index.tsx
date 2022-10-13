import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { StoreContext } from 'storeon/react'
import { createStoreon } from 'storeon'
import { storeonParams } from './store'
import {
  darkTheme,
  Provider
} from '@adobe/react-spectrum';
import './styles/global.scss'
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const store = createStoreon(storeonParams)


root.render(
  <StoreContext.Provider value={store}>
    <Provider theme={darkTheme} UNSAFE_className={'spec_provider'}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StoreContext.Provider>
);

