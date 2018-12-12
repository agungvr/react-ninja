import React, { Fragment, lazy } from 'react';
import {
  Switch
} from 'react-router-dom';

const Header = lazy(() => import('../components/common/header'));
const Sidebar = lazy(() => import('../components/common/sidebar'));

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

const AdminLayout = ({ component: Component, ...rest }) => {
  return (
    <Fragment>
      <div className="page bg-2 rounded-widget">
        <Header/>
        <div className="page-content d-flex align-items-stretch">
          <Sidebar {...rest}/>
        </div>
      </div>
    </Fragment>
  );
};

const PageComponent = () => (
  <Switch>
    <AuthLayout exact path={'/'} component={Login}/>
    <AuthLayout exact path={'/login'} component={Login}/>
    <AuthLayout exact path={'/register'} component={Register}/>
    <AdminLayout exact path={'/home'} component={Home}/>
  </Switch>
);

export default PageComponent;
