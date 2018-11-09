import { UPDATE_PERSON, FETCH_PEOPLE } from '../actions/types';

export default function personReducer(state = [], action) {
  // console.log('calling person reducer');
  switch (action.type) {
    case UPDATE_PERSON:
      // eslint-disable-next-line 
      return state.map((person, index) => {
       if (index === action.index) {
        return Object.assign({}, person, {
          fname: action.name
        })
       }
       return person
      })
    case FETCH_PEOPLE:
      return action.payload
    default:
      return state;
  }
}
