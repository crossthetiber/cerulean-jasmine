import personReducer from './personReducer'
import orgReducer from './orgReducer'
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  people: personReducer,
  org: orgReducer
});
