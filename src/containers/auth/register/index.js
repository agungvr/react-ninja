import React, { lazy } from 'react'
import { withRouter } from 'react-router-dom'

const LeftContent = lazy(() => import('../components/LeftContent'));
const RightContent = lazy(() => import('../components/RightContent'));
const Form = lazy(() => import('./Form'));

const Register = (props) => {
  return (
    <div className="row flex-row h-100 bg-white">
      <LeftContent/>
      <RightContent>
        <Form {...props} />
      </RightContent>
    </div>
  )
};

export default withRouter(Register);
