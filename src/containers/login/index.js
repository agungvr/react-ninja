import React, { lazy } from 'react'

const Dashboard = lazy(() => import('../dashboard'));

const Login = () => {
  return (
    <div>
      <Dashboard/>
    </div>
  )
};

export default Login;
