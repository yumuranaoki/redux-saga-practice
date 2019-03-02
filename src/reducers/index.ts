import { combineReducers } from 'redux';
import buttonReducer, { ButtonState } from './button';

export interface Reducer {
  buttonReducer: ButtonState,
}

const reducer = combineReducers({
  buttonReducer
});

export default reducer;
