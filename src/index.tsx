import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Button from './containers/button';
import store from './store/index';

const Wrapper: React.FC<{}> = () => (
  <Provider store={store}>
    <Button />
  </Provider>
)

ReactDOM.render(
  <Wrapper />,
  document.getElementById("root")
);