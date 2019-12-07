import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./components/home";
import Instagram from "./components/instagram";

const Routes =  ({concepts}) => (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/home" render={() => <Redirect to="/" />} />
      <Route exact path="/instaAuthorized" component={Instagram} />
      <Route path="/authorized/:token"
        component={Home}
      />
    </Switch>
);

export default Routes;
