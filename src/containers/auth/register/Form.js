import React, { Fragment } from 'react'
import { compose, withHandlers } from 'recompose'
import { Link } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import { withFirebase } from "../../../components/Firebase";

const createReduxForm = reduxForm({ form: 'register' });

const formHandler = compose(
  withHandlers({
    registerClick: props => ({ email, password, confirmPassword }) => {
      if (password === confirmPassword) {
        props.firebase
          .doCreateUserWithEmailAndPassword(email, password)
          .then(authUser => {
            console.log('s', authUser)
          })
          .catch(error => {
            console.log('e', error)
          });

      } else {
        alert('Password tidak sama')
      }
    }
  })
);

const enhance = compose(withFirebase, formHandler, createReduxForm);

const Form = enhance(props => {
  return (
    <Fragment>
      <h3>Create An Account</h3>
      <form className="mt-4" onSubmit={props.handleSubmit(props.registerClick)}>
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
        <div className="group material-input">
          <Field
            name="confirmPassword"
            component="input"
            type="password"
            required
          />
          <span className="highlight"/>
          <span className="bar"/>
          <label>Confirm Password</label>
        </div>
        <div className="row">
          <div className="col text-left">
            <div className="styled-checkbox">
              <input type="checkbox" name="checkbox" id="agree"/>
              <label htmlFor="agree">I Accept <span>Terms and Conditions</span></label>
            </div>
          </div>
        </div>
        <div className="sign-btn text-center">
          <button type="submit" className="btn btn-lg btn-gradient-01">
            Create an account
          </button>
        </div>
        <div className="register">
          Already have an account?
          <br/>
          <Link to={'login'}>Sign In</Link>
        </div>
      </form>
    </Fragment>
  )
});

export default Form;
