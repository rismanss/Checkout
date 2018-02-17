import React from 'react';
// import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Home from './components/Home/index';
import showResults from './showResults';

// const FourOFour = () => <h1> Eror 404, Not found... </h1>;

const App = () => (
  // <Provider store={store}>
  //   <Switch>
  //     <Route exact path="/" component={Home} onSubmit={showResults} />
  //     <Route component={FourOFour} />
  //   </Switch>
  // </Provider>
  <Provider store={store}>
    <Home onSubmit={showResults} />
  </Provider>
);

export default App;
