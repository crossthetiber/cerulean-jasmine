import { UPDATE_ORG } from '../actions/types';

const initialState = 'first-state';

export default function orgReducer(state = initialState, action) {
  console.log('calling org reducer');
  // console.log(typeof(action.org));
  // console.log(action.org);
  console.log('ORG STATE VALUE:');
  console.log(state);
  console.log('ORG STATE TYPE: ' + typeof(state));
  switch (action.type) {
    case UPDATE_ORG:
      console.log('UPDATING ORG');
      // return Object.assign({}, state, action.org)
      return action.org;
    default:
      console.log('DEFAULT ORG');
      // return Object.assign({}, state)
      return state;
  }
}
