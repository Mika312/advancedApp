import React from "react";
import Header from "../containers/header";
import Home from "../components/home";
import Ressources from "../components/ressources";
import { Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/ressources" component={Ressources} />
      </Switch>
    </div>
  );
};

export default App;
