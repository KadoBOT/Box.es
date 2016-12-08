import R from 'ramda'

const getJson = R.curry((x, obj) => typeof obj[x] === 'function' ? obj[x]() : obj[x])

const fetchUrl = url => fetch(url).then(getJson('json'))
const item = R.prop('item')
const fetchItem = R.composeP(item, fetchUrl)
export const getItem = () => fetchItem('https://api.box.es/api/users/47776/items/278878.json')
