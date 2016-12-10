import reducer from './'
import * as types from '../constants/'

describe('comments reducer', () => {
  it('should handle REQUEST_COMMENT', () => {
    expect(
      reducer({}, {
        type: types.REQUEST_COMMENT
      })
    ).toEqual({
      "comments": ["isFetching"],
      "item": {
        "completeInfo": false,
        "isFetching": true
      },
        "selectedPicture": ""
      }
    )

    expect(
      reducer(
        {},
        {
          type: types.RECEIVE_COMMENT,
          comments: [{
            "id": 184543,
          }]
        }
      )
    ).toEqual({
      "comments": [
        {"id": 184543}
      ],
      "item": {
        "completeInfo": false,
        "isFetching": true
      },
      "selectedPicture": ""
    })
  })
})

describe('items reducer', () => {
  it('should handle REQUEST_ITEM', () => {
    expect(
      reducer({}, {
        type: types.REQUEST_ITEM
      })
    ).toEqual({
      "comments": ["isFetching"],
      "item": {"completeInfo": false, "isFetching": true},
      "selectedPicture": ""
    })

    expect(
      reducer(
        {},
        {
          type: types.RECEIVE_ITEM,
          comments: [{
            "id": 184543,
          }]
        }
      )
    ).toEqual({
      "comments": ["isFetching"],
      "item": {"isFetching": false},
      "selectedPicture": ""
    })

    expect(
      reducer(
        {},
        {
          type: types.READ_MORE,
          comments: [{
            "id": 184543,
          }]
        }
      )
    ).toEqual({
      "comments": ["isFetching"],
      "item": {"completeInfo": true, "isFetching": true},
      "selectedPicture": ""
    })
  })
})
