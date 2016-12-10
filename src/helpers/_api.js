import R from 'ramda'

const getJson = R.curry((x, obj) => typeof obj[x] === 'function' ? obj[x]() : obj[x])

//helper that calls the api and retrieves the data
const fetchUrl = url => fetch(url).then(getJson('json'))
const item = R.prop('item')
const comment = R.prop('comments')
const fetchItem = R.composeP(item, fetchUrl)
const fetchComments = R.composeP(comment, fetchUrl)

export const getItem = () => fetchItem('https://api.box.es/api/users/47776/items/278878.json')
export const getComments = () => fetchComments('https://api.box.es/api/users/47776/items/278878/comments.json?page=1')
