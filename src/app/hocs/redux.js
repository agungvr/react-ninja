import { Provider } from 'react-redux';

import { hocCreator } from '../helpers';
import configureStore from '../../redux/store';
import rootReducer from '../../redux/reducers';
import rootSaga from '../../redux/sagas';

export const { store, persistor } = configureStore(rootReducer, rootSaga);

export default hocCreator(Provider, { store });
