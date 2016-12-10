# Boxes Frontend Challenge
---
This repo is an code challenge I've made when applying for a front end position at [Boxes](https://box.es)
---
## Development
This code challenge was made using create-react-app and Redux. BEM pattern was used on the CSS, and the components structure follows the Atomic Design Pattern. Also, some funcional programming using Ramda was used.

** Ps: You can ran this project as a Template. In other words, with prefetched data, without the need to call the API. Check the instructions **

The following npm packages were used in this project:
- [React.js](https://facebook.github.io/react/)
- [Ramda](http://ramdajs.com/)
- [Redux](http://redux.js.org/)
- [create-react-app](https://github.com/facebookincubator/create-react-app)

## Instructions
### Clone repo
Clone this repository to your machine by typying this on your console:
```
git clone https://github.com/KadoBOT/Box.es
```
### Install
Inside the repository folder, install the necessary packages:
```
cd Box.es
npm install
```
### Start development server
To run the dev server:
```
npm start //no prefetched data, calls the api
npm start template //mocked data, no calls to the api
```
### Build production
Build the project for production:
```
npm run build
```
---
### Tests
#### Tests with Enzyme and Jest  
For single test: `npm test`  
Coverage test: `npm run test -- --coverage`  

---
### Todo
- Carousel / Slider animation and transition
- Functional JavaScript can be applied even better
- Comments Pagination (Couldn't find any item with paginated comments to test)
- Reducer Async Test (CORS didn't allowed me to test the Async Calls)
- Test Coverage is at 76%. Can be improved.
- Make it responsive.
