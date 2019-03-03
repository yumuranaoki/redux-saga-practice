import configureMockStore from 'redux-mock-store';
import * as actions from '../../actions/button';
import * as asyncActions from '../../sagas/button';

const mockStore = configureMockStore();

describe('action button', () => {
  it('should dispatch increment', () => {
    const expectedAction = {
      type: "INCREMENT"
    };
    expect(actions.increment()).toEqual(expectedAction);
  })

  it('should increment number', () => {
    const expectedAction = [{
      type: 'SUCCESS_INCREMENT'
    }];
    const store = mockStore({ number: 0 });
    store.dispatch(asyncActions.successIncrement())
    expect(store.getActions()).toEqual(expectedAction)
  })
})