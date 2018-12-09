const isLoadingReducer = state => ({
  ...state,
  error: null,
  isLoading: true,
  success: false
});

const successReducer = state => ({
  ...state,
  error: null,
  isLoading: false,
  success: true
});

const errorReducer = (state, action) => ({
  ...state,
  error: action.payload.response.statusText,
  isLoading: false,
  success: false
});

const noopReducer = state => state;

// DATA FETCHING
export const withLoadable = actionTypes => {
  const actionReducerMap = {
    [actionTypes.successAction]: successReducer,
    [actionTypes.errorAction]: errorReducer,
    [actionTypes.isLoadingAction]: isLoadingReducer,
  };
  return baseReducer =>
    (state, action) => {
      const reducerFunction = actionReducerMap[action.type] || noopReducer;
      const newState = reducerFunction(state, action);
      return baseReducer(newState, action);
    };
};

// RESET STATE
export const withResetState = (resetStateActionType, initialState) =>
  baseReducer =>
    (state, action) => {
      const newState = action.type === resetStateActionType
        ? { ...initialState }
        : state;
      return baseReducer(newState, action);
    };

// HOR
export const pipeHigherOrderReducers = (...higherOrderReducers) =>
  baseReducer =>
    higherOrderReducers.reduce(
      (reducer, nextHigherOrderReducer) => nextHigherOrderReducer(reducer),
      baseReducer
    );
