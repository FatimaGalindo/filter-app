import React from 'react';
import './App.css';
import Routes from './routes'
import {GlobalStyle} from './style/Global.style'


function App() {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Routes/>
    </>
  );
}

export default App;
