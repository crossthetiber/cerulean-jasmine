import { directoryBaseUrl } from '../../constants/directoryBaseUrl'

// action types
export const PERSON = 'PERSON'
export const ORG_UNIT = 'ORG_UNIT'

const perEmployee = 'employee/json/by_netid/'

const receiveContent = (actionType, json) => {
  return {
    type: actionType,
    payload: json
  }
}

export const fetchContentType = (type, props) => {
  const url_string = `${directoryBaseUrl}${perEmployee}` + props.match.params.netid;
  const url = encodeURI(url_string)

  return dispatch => {
    return fetch(
      url, {
        mode: 'cors',
      }).then(response => {
        if (response.status >= 200 && response.status < 400) {
          return response.json()
        } else {
          throw new Error(response.statusText)
        }
      }).then(json => {
        switch(type) {
          case 'person':
          dispatch(receiveContent(PERSON, json))
          break
          case 'org':
          dispatch(receiveContent(ORG_UNIT, json))
          break
          default:
          console.log('no type for content fetch')
        }
      })
      .catch(e =>{
        console.log(e)
      })
    }
  }
