import { increment, successIncrement } from '../actions/button'
import { Reducer } from 'redux';

export interface ButtonState {
  number: number
}

const initialState: ButtonState = {
  number: 0
}

export type ButtonActions = ReturnType<typeof increment | typeof successIncrement>

const reducer: Reducer<ButtonState, ButtonActions> = (state=initialState, action) => {
  switch(action.type) {
    case "INCREMENT":
      return state;
    case "SUCCESS_INCREMENT":
    return { ...state, number: state.number + 1 };
    default:
      return state;
  }
} 

export default reducer;
