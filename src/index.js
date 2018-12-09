import React, { lazy } from 'react';
import ReactDOM from 'react-dom';
import AppKernel from './app';
import * as serviceWorker from './serviceWorker';
import './assets/css/index.css';

const Root = lazy(() => import('./containers/root'));
const App = AppKernel(Root);

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.register();
