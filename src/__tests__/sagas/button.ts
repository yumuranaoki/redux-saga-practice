import { take, all, put, call } from 'redux-saga/effects'
import countAPI from '../../api/count';
import * as sagas from '../../sagas/button'

describe('button sagas', () => {
  const gen = sagas.increment()
  it('should increment', () => {
    expect(gen.next().value).toEqual(take("INCREMENT"))
    expect(gen.next().value).toEqual(call([countAPI, "get"]))
    expect(gen.next().value).toEqual(put(sagas.successIncrement()))
    expect(gen.next().done).toEqual(true)
  })
})
