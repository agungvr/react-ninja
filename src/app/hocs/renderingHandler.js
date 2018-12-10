import React from 'react';
import { compose } from 'recompose'
import { IsEmpty } from '../../components/IsEmpty';
import { IsLoading } from '../../components/IsLoading';

export const withMaybe = (conditionalRendering) => Component => props =>
  conditionalRendering(props)
    ?
    <div style={{ display: 'flex', height: '80vh', width: '100vw', justifyContent: 'center', alignItems: 'center' }}>
      <h3>
        Something went wrong.
      </h3>
    </div>
    : <Component {...props} />;

export const withEither = (conditionalRendering, EitherComponent) => Component => props =>
  conditionalRendering(props)
    ? <EitherComponent {...props} />
    : <Component {...props} />;


const isLoadingCondition = props => props.isLoading;
const nullCondition = () => data => !data;
const isEmptyCondition = () => data => !data.length;

export const withRenderTampan = (Component, data) => compose(
  withEither(isLoadingCondition, IsLoading),
  withMaybe(nullCondition(data)),
  withEither(isEmptyCondition(data), IsEmpty)
)(Component);
