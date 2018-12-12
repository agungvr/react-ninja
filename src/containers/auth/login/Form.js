import React, { Fragment } from 'react'
import { compose, withHandlers } from 'recompose'
import { Link } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import { withFirebase } from "../../../components/firebase";

const createReduxForm = reduxForm({ form: 'login' });

const formHandler = compose(
  withHandlers({
    loginClick: props => ({ email, password }) => {
      props.firebase
        .doSignInWithEmailAndPassword(email, password)
        .then((res) => {
          props.history.push('home')
        })
        .catch(error => {
          alert(error.message)
        });

    }
  })
);

const enhance = compose(withFirebase, formHandler, createReduxForm);

const Form = enhance(props => {
  return (
    <Fragment>
      <h3>Sign In Your Account</h3>
      <form className="mt-4" onSubmit={props.handleSubmit(props.loginClick)}>
        <div className="group material-input">
          <Field
            name="email"
            component="input"
            type="text"
            required
          />
          <span className="highlight"/>
          <span className="bar"/>
          <label>Email</label>
        </div>
        <div className="group material-input">
          <Field
            name="password"
            component="input"
            type="password"
            required
          />
          <span className="highlight"/>
          <span className="bar"/>
          <label>Password</label>
        </div>
        <div className="row">
          <div className="col text-left">
            <div className="styled-checkbox">
              <input type="checkbox" name="checkbox" id="remeber"/>
              <label htmlFor="remeber">Remember me</label>
            </div>
          </div>
        </div>
        <div className="sign-btn text-center">
          <button type="submit" className="btn btn-lg btn-gradient-01">
            Sign in
          </button>
        </div>
        <div className="register">
          Don't have an account?
          <br/>
          <Link to={'register'}>Create an account</Link>
        </div>
      </form>
    </Fragment>
  )
});

export default Form;
