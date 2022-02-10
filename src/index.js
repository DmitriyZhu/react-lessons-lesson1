import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const name = 'Some kind of name';
const message = 'Some kind of message';

ReactDOM.render(
  <React.StrictMode>
    <App myName={name} message={message} showRed={false} topPosition={'50px'} />
  </React.StrictMode>,
  document.getElementById('root')
);

