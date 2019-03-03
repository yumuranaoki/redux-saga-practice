import { Reducer } from 'redux';
import { increment } from '../actions/button'
import * as asyncActions from '../sagas/button';

export interface ButtonState {
  number: number
}

const initialState: ButtonState = {
  number: 0
}

export type ButtonActions = ReturnType<typeof increment | typeof asyncActions.successIncrement | typeof asyncActions.failIncrement>

const reducer: Reducer<ButtonState, ButtonActions> = (state=initialState, action) => {
  switch(action.type) {
    case "SUCCESS_INCREMENT":
      return { ...state, number: state.number + 1 };
    case "FAIL_INCREMENT":
      return state;
    default:
      return state;
  }
} 

export default reducer;
