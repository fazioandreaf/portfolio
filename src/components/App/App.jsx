import React, {useEffect} from 'react';

import {Main, Header} from './../index';
import {photoASCII} from '../../constants.js';

import './App.scss';

function App() {
  // Easter egg;
  useEffect(()=>
    console.log(photoASCII)
  , []);

  return (
    <div>
      <Header />
      <Main />
    </div>
  );
}

export default App;
