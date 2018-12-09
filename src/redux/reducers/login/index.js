import { LOGIN_SUCCESS } from "../../actions/login";
import { withLoadable } from "../app";

const initialState = {
  data: [],
  isLoading: false,
  success: false,
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
};

export const loginReducer = withLoadable({
  isLoadingAction: 'API_START',
  successAction: 'LOGIN_SUCCESS',
  errorAction: 'LOGIN_FAILURE',
})(reducer);

