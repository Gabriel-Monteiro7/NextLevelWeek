import { Switch } from "react-router-dom";
import React from "react";
import { Route } from "react-router-dom";
import Home from "../pages/Home";
import CreatePoint from "../pages/CreatePoint";
import DetailPoints from "../pages/DetailPoints";

export default function Routes(props) {
  return (
    <Switch>
      <Route path="/" component={Home} exact>
        {props.children}
      </Route>
      <Route exact path="/createPoint" component={CreatePoint}>
        {props.children}
      </Route>
      <Route exact path="/detailPoints" component={DetailPoints}>
        {props.children}
      </Route>
    </Switch>
  );
}
