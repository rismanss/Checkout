import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home/index";

const FourOFour = () => <h1> Eror 404, Not found... </h1>;

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route component={FourOFour} />
  </Switch>
);

export default App;
