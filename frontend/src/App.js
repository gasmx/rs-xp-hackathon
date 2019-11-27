import React from 'react';
import Routes from './routes';

import { BrowserRouter as Router } from 'react-router-dom';

import GlobalStyle from './styles/Globals';

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes />
      </Router>
    </>
  );
}


export default App;
