import React, { Fragment } from 'react';
import { PrivateLayout, PublicLayout, NotLoggedInLayout } from '@layouts';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';

import {
  MyMapComponent,
  Login,
  Register,
  PageNotFound,
  Welcome,
  RegistrationSuccess,
  Profile,
  //GameList,
  // GamePage,
  FormModelConverter,
  FormModelRenderer,
  //TextEditor,
  addRoute,
  viewRoute,
  UploadRoute,
  Friends,
  RoutList
} from './containers';

const privateRoutes = [
  {
    id: 'welcome',
    path: '/viade_es4a/welcome',
    component: Welcome
  },
  {
    id: 'Mapa',
    path: '/viade_es4a/mapa',
    component: MyMapComponent
  },
  {
    id: 'profile',
    path: '/viade_es4a/profile',
    component: Profile
  },
  /*
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
  */
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
    id: 'addRoute',
    path: '/viade_es4a/addRoute',
    component: addRoute
  },
  {
    id: 'viewRoute',
    path: '/viade_es4a/viewRoute',
    component: viewRoute
  },
  {
    id: 'uploadRoute',
    path: '/viade_es4a/uploadRoute',
    component: UploadRoute
  },
  {
    id: 'friends',
    path: '/viade_es4a/friends',
    component: Friends
  },
  {
    id: 'routList',
    path: '/viade_es4a/routList',
    component: RoutList
  }

];

const Routes = () => (
  <Router>
    <Fragment>
      <Switch>
        <NotLoggedInLayout component={Login} path="/viade_es4a/login" exact />
        <NotLoggedInLayout component={Register} path="/viade_es4a/register" exact />
        <NotLoggedInLayout path="/viade_es4a/register/success" component={RegistrationSuccess} exact />
        <PublicLayout path="/viade_es4a/404" component={PageNotFound} exact />
        <Redirect from="/" to="/viade_es4a/welcome" exact />
        <PrivateLayout path="/viade_es4a/" routes={privateRoutes} />
        <Redirect from="/login" to="/viade_es4a/login" exact />
        <Redirect from="/viade_es4a/#" to="/viade_es4a/welcome" exact />
      </Switch>
    </Fragment>
  </Router>
);

export default Routes;
