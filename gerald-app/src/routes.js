import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./pages/home";
import Instagram from "./pages/instagram"

const Routes =  () => (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/home" render={() => <Redirect to="/" />} />
      <Route exact path="/instaAuthorized" component={Instagram} />
    </Switch>
);

export default Routes;
