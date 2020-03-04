import React, { Fragment } from 'react';
import { PrivateLayout, PublicLayout, NotLoggedInLayout } from '@layouts';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';

import {
  Mapa,
  Login,
  Register,
  PageNotFound,
  Welcome,
  RegistrationSuccess,
  Profile,
  GameList,
  GamePage,
  FormModelConverter,
  FormModelRenderer,
  TextEditor,
  addRoute,
  viewRoute,
  Friends
} from './containers';

const privateRoutes = [
  {
    id: 'welcome',
    path: '/welcome',
    component: Welcome
  },
  {
    id: 'Mapa',
    path: '/mapa',
    component: Mapa
  },
  {
    id: 'profile',
    path: '/profile',
    component: Profile
  },
  {
    id: 'tictactoe',
    path: '/tictactoe',
    component: GameList
  },
  {
    id: 'tictactoegame',
    path: '/tictactoe/:gameId',
    component: GamePage
  },
  {
    id: 'text-editor',
    path: '/text-editor',
    component: TextEditor
  },
  {
    id: 'formmodelconverter',
    path: '/formmodel/converter',
    component: FormModelConverter
  },
  {
    id: 'formmodelrenderer',
    path: '/formmodel/renderer',
    component: FormModelRenderer
  },
  {
    id:'addRoute',
    path: '/addRoute',
    component: addRoute
  },
  {
    id:'viewRoute',
    path:'/viewRoute',
    component: viewRoute
  },
  {
    id:'friends',
    path:'/friends',
    component: Friends
  }

];

const Routes = () => (
  <Router>
    <Fragment>
      <Switch>
        <NotLoggedInLayout component={Login} path="/login" exact />
        <NotLoggedInLayout component={Register} path="/register" exact />
        <NotLoggedInLayout path="/register/success" component={RegistrationSuccess} exact />
        <PublicLayout path="/404" component={PageNotFound} exact />
        <Redirect from="/" to="/welcome" exact />
        <PrivateLayout path="/" routes={privateRoutes} />
        <Redirect to="/404" />
      </Switch>
    </Fragment>
  </Router>
);

export default Routes;
