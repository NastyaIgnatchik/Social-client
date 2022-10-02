import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './routes/Router';
import { Global, Fontf } from './style';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Global />
    <Fontf />
    <Router />
  </>
);
