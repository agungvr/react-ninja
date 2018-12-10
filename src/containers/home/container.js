import React, { Fragment, lazy } from 'react';

const ListProduct = lazy(() => import('./components/ListProduct'));
const Container = props => {
  return (
    <Fragment>
      <ListProduct {...props}/>
    </Fragment>
  )
};

export default Container;
