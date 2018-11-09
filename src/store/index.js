import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './reducers';

// const initialState = {
//   person: { name: "Jim" },
//   org: 'Org One'
// }

const middleware = [
    thunk
]

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore() {
  console.log('calling configureStore');
  return createStore(
    rootReducer,
    {},
    composeEnhancers(applyMiddleware(...middleware))
  );
}
