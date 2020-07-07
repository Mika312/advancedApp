import React from "react";
import Header from "../containers/header";
import Home from "../components/home";
import Ressources from "../containers/ressources";
import { Route, Switch } from "react-router-dom";
import RequireAuthentification from "../helpers/require-authentification";
const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/ressources"
          component={RequireAuthentification(Ressources)}
        />
      </Switch>
    </div>
  );
};

export default App;
