import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Home from './components/Home/index';
import showResults from './showResults';

const App = () => (
  <Provider store={store}>
    <Home onSubmit={showResults} />
  </Provider>
);

export default App;
