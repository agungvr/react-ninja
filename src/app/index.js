import { compose } from './helpers';

import strictMode from './hocs/strictMode';
import errorBoundary from './hocs/errorBoundary';
import redux from './hocs/redux';
import reduxPersist from './hocs/reduxPersist';
import router from './hocs/router';
import suspense from './hocs/suspense';
import firebase from './hocs/firebase';

const AppKernel = compose(
    strictMode,
    errorBoundary,
    firebase,
    reduxPersist,
    redux,
    router,
    suspense,
);

export default AppKernel;
