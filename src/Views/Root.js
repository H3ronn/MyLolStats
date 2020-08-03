import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import ChampionsView from "./ChampionsView";
import ChampionDetails from "./ChampionDetails";
import SearchView from "./SearchView";
import MainTemplate from "../Templates/MainTemplate";
import UserDetailsView from "Views/UserDetailsView";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Root() {
  return (
    <BrowserRouter>
      <MainTemplate>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/champions" />} />
          <Route exact path="/search" component={SearchView} />
          <Route path="/search/:name" component={UserDetailsView} />
          <Route exact path="/champions" component={ChampionsView} />
          <Route path="/champions/:name" component={ChampionDetails} />
        </Switch>
      </MainTemplate>
    </BrowserRouter>
  );
}

export default Root;
