import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>をつけると初回に2回レンダリングが走る（ローカル環境にのみ影響する）
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);

