import { FETCH_PEOPLE, UPDATE_PERSON } from './types';


export const updatePersonAction = (name = "JoeBob", index = 0) => {
  return {
    type: UPDATE_PERSON,
    name: name,
    index: index
  }
}

export const fetchPeopleAction = () => dispatch => {
  // console.log('calling fetch people action');
  fetch('http://localhost:3001/directory/api/employee/json/all')
    .then(response => response.json())
    .then(json => dispatch({
      type: FETCH_PEOPLE,
      payload: json
    }))
    .catch(error => console.log(error));
}
