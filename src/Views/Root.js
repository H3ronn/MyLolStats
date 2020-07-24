import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import ChampionsView from "./ChampionsView";
import SearchView from "./SearchView";

function Root() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/search" />} />
        <Route path="/search" component={SearchView} />
        <Route path="/champions" component={ChampionsView} />
      </Switch>
    </BrowserRouter>
  );
}

export default Root;
