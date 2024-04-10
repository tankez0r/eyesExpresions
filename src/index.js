import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Dictaphone from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Dictaphone action={(a) => { console.log(a) }} waitForBackEnd={true} />
  </React.StrictMode>
);


