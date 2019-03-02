import * as React from 'react';
import { ButtonState } from '../../reducers/button'
import { ButtonActions } from '../../actions/button'

const Button: React.FC<ButtonState & ButtonActions> = ({ number, increment }) => {
  return (
    <div>
      <button onClick={() => increment()}>button</button>
      <span>number: {number}</span>
    </div>
  )
}

export default Button;
