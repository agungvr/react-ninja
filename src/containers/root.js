import React, { Fragment, lazy } from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';

const Home = lazy(() => import('./home'));
const Login = lazy(() => import('./auth/login'));
const Register = lazy(() => import('./auth/register'));

const AuthLayout = ({ component: Component, ...rest }) => {
  return (
    <Fragment>
      <div className="container-fluid no-padding h-100">
        <Component {...rest}/>
      </div>
    </Fragment>
  );
};

const PageComponent = () => (
  <Switch>
    <AuthLayout exact path={'/'} component={Login}/>
    <AuthLayout exact path={'/login'} component={Login}/>
    <AuthLayout exact path={'/register'} component={Register}/>
    <Route exact path={'/home'} component={Home}/>
  </Switch>
);

export default PageComponent;
