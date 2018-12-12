import React, { Fragment } from 'react'
import { compose, withState, withHandlers } from 'recompose'
import { Link } from 'react-router-dom'
import { FirebaseContext } from '../../../components/Firebase'

const formState = compose(
  withState('username', 'setUsername', ''),
  withState('password', 'setPassword', '')
);

const formHandler = compose(
  withHandlers({
    loginClick: props => () => {
      props.dispatchLogin({
        username: props.username,
        password: props.password
      })
    }
  })
);

const enhance = compose(formState, formHandler);

const Form = enhance(props => {
  return (
    <Fragment>
      <h3>Sign In Your Account</h3>
      <form>
        <div className="group material-input">
          <input
            type="text"
            required
            value={props.username}
            onChange={(e) => props.setUsername(e.target.value)}
          />
          <span className="highlight"/>
          <span className="bar"/>
          <label>Username</label>
        </div>
        <div className="group material-input">
          <input
            type="password"
            required
            value={props.password}
            onChange={(e) => props.setPassword(e.target.value)}
          />
          <span className="highlight"/>
          <span className="bar"/>
          <label>Password</label>
        </div>
      </form>
      <div className="row">
        <div className="col text-left">
          <div className="styled-checkbox">
            <input type="checkbox" name="checkbox" id="remeber"/>
            <label htmlFor="remeber">Remember me</label>
          </div>
        </div>
      </div>
      <div className="sign-btn text-center">
        <button onClick={props.loginClick} className="btn btn-lg btn-gradient-01">
          Sign in
        </button>
      </div>
      <div className="register">
        Don't have an account?
        <br/>
        <Link to={'register'}>Create an account</Link>
      </div>
      <FirebaseContext.Consumer>
        {firebase => {
          return <div>I've access to Firebase and render something..</div>;
        }}
      </FirebaseContext.Consumer>
    </Fragment>
  )
});

export default Form;
