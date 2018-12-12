import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import { loginReducer } from './login'

export default combineReducers({
  form: formReducer,
  login: loginReducer
});
