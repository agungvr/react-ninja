import React from 'react';
import { compose } from 'redux';

const wrapper = (WrapperComponent, wrapperProps = {}, Component) => () => (
    <WrapperComponent {...wrapperProps}>
        <Component />
    </WrapperComponent>
);

const hocCreator = (WrapperComponent, wrapperProps, Component) => {
  if (!WrapperComponent) {
      throw new Error('WrapperComponent should be set!');
  }

  return Component
      ? wrapper(WrapperComponent, wrapperProps, Component)
      : Cmp => {
          if (!Cmp) {
              throw new Error('Component should be set!');
          }

          return wrapper(WrapperComponent, wrapperProps, Cmp);
      }
};

export {
    hocCreator,
    compose,
};
