import React, { lazy } from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';

const Home = lazy(() => import('./home'));
const Login = lazy(() => import('./login'));

const PageComponent = () => (
  <Switch>
    <Route exact path={'/'} component={Home}/>
    <Route exact path={'/login'} component={Login}/>
  </Switch>
);

export default PageComponent;
