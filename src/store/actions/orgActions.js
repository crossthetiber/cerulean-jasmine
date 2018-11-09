import { UPDATE_ORG } from './types';

export const updateOrgAction = (name = 'ShinyOrg') => {
  console.log('calling org action');
  // console.log(typeof(name));
  let newname = name + " jimmy johns 42"
  return {
    type: UPDATE_ORG,
    org: newname,
    firstname: name
  }
}