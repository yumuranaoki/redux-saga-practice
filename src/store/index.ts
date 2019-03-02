import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import reducer from '../reducers/index';
import rootSaga from '../sagas/button';

const sagaMiddleWare = createSagaMiddleware()

const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleWare)
)

sagaMiddleWare.run(rootSaga)

export default store;
