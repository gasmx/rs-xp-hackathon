import React from 'react';
import Routes from './routes';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter as Router } from 'react-router-dom';

import GlobalStyle from './styles/Globals';

import history from './services/history';

import { store, persistor } from './store';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <GlobalStyle />
        <Router history={history}>
          <Routes />
        </Router>
      </PersistGate>
    </Provider>
  );
}


export default App;
