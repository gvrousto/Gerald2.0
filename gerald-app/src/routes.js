import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./pages/home";
import Instagram from "./pages/instagram"

const Routes =  ({concepts}) => (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/home" render={() => <Redirect to="/" />} />
      <Route exact path="/instaAuthorized" component={Instagram} />
      <Route exact path="/authorized"
          render={() => <Home concepts={concepts} />}
        />
    </Switch>
);

export default Routes;
