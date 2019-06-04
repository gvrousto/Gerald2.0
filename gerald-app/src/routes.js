import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./pages/home";

const Routes =  () => (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/home" render={() => <Redirect to="/" />} />
    </Switch>
);

export default Routes;
