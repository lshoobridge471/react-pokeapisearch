import React from 'react';
import ReactDOM from 'react-dom';
import './app.scss';
import MainContainer from './sections/main-container/main-container';
export const URL_POKEAPI = 'http://localhost:8000';

ReactDOM.render(
  <React.StrictMode>
    <MainContainer apiUrl={URL_POKEAPI} />
  </React.StrictMode>,
  document.getElementById('root')
);