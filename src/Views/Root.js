import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'store';
import ChampionsView from 'Views/ChampionsView';
import ChampionDetails from './ChampionDetails';
import SearchView from './SearchView';
import MainTemplate from '../Templates/MainTemplate';
import UserDetailsView from 'Views/UserDetailsView';
import LoadingPage from 'Components/Molecules/LoadingPage';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Root() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <MainTemplate>
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/champions" />} />
            <Route exact path="/search" component={SearchView} />
            <Route path="/search/:name" component={UserDetailsView} />
            <Route exact path="/champions" component={ChampionsView} />
            <Route path="/champions/:name" component={ChampionDetails} />
            <Route path="/test" component={LoadingPage} />
          </Switch>
        </MainTemplate>
      </BrowserRouter>
    </Provider>
  );
}

export default Root;
