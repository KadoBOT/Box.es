// import configureMockStore from 'redux-mock-store'
// import thunk from 'redux-thunk'
// import nock from 'nock'
// import R from 'ramda'

import * as actions from './index'
import * as types from '../constants/index'

// const middlewares = [ thunk ]
// const mockStore = configureMockStore(middlewares)
// const getJson = R.curry((x, obj) => typeof obj[x] === 'function' ? obj[x]() : obj[x])

describe('actions', () => {
  it('should create an action to show more text', () => {
    const expectedAction = {type: types.READ_MORE}
    expect(actions.readMore()).toEqual(expectedAction)
  })

  it('should create an action to select a picture', () => {
    const selectedPicture = 'colossus.jpg'
    const expectedAction = {
      type: types.SELECT_PICTURE,
      selectedPicture
    }
    expect(actions.selectPicture(selectedPicture)).toEqual(expectedAction)
  })

  it('should create an action to receive the item', () => {
    const item = { name: 'Colossus' }
    const expectedAction = {
      type: types.RECEIVE_ITEM,
      item
    }
    expect(actions.receivedItem(item)).toEqual(expectedAction)
  })

  it('should create an action to request the item', () => {
    const expectedAction = { type: types.REQUEST_ITEM }
    expect(actions.requestItem()).toEqual(expectedAction)
  })
})

/******************************
Couldn't test because of CORS *
 ******************************/

// describe('async actions', () => {
//   afterEach(() => {
//     nock.cleanAll()
//   })
//
//   it('creates RECEIVE_ITEM when fetching items has been done', () => {
//     nock('https://api.box.es/api/users/47776/items/278878.json')
//       .get('/items')
//       .reply(200, getJson('json'))
//
//     const expectedActions = [
//       { type: types.REQUEST_ITEM },
//       { type: types.RECEIVE_ITEM, body: { items: [] } }
//     ]
//     const store = mockStore({ items: [] })
//
//     return store.dispatch(actions.fetchItem())
//       .then(() => { // return of async actions
//         expect(store.getActions()).toEqual(expectedActions)
//       })
//   })
// })
