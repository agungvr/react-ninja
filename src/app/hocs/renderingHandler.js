import React from 'react';

export const withMaybe = (conditionalRendering) => Component => props =>
  conditionalRendering(props)
    ?
    <div style={{display: 'flex', height: '80vh', width: '100vw', justifyContent: 'center', alignItems: 'center'}}>
      <h3>
        Something went wrong.
      </h3>
    </div>
    : <Component {...props} />;

export const withEither = (conditionalRendering, EitherComponent) => Component => props =>
  conditionalRendering(props)
    ? <EitherComponent {...props} />
    : <Component {...props} />;
