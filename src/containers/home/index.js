import React from 'react'
import { withRouter } from 'react-router-dom';
import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { loginRequest } from "../../redux/actions/login";
import { Container } from "./container";

const withConnect = connect(
  state => ({
    isLoading: state.login.isLoading,
    product: state.login.data,
  }),
  { loginRequest },
);

const withLifecycle = lifecycle({
  componentDidMount() {
    this.props.loginRequest();
  },
});

const Home = props => (<Container {...props}/>);

export default compose(
  withRouter, withConnect, withLifecycle
)(Home);

