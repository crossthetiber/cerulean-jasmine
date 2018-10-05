import React from 'react';
import { directoryBaseUrl } from '../constants/directoryBaseUrl'
const perEmployee = 'employee/json/by_netid/rfox2'
const url = encodeURI(`${directoryBaseUrl}${perEmployee}`)

class Person extends React.Component {
  constructor() {
    super();
    this.state = { person: '' };

    fetch(url, {
      mode: 'cors',
    }).then(response => response.json())
      .then(json => {this.setState({person: json[0]})})
      .catch(error => console.log(error));
  }

  showAddress() {
    alert(this.state.person.mail_addr);
  }

  render() {
    return <div>
             <ul>
              <li onClick={() => this.showAddress()}>{this.state.person.fname}</li>
              <li>{this.state.person.lname}</li>
             </ul>
          </div>;
  }
}

export default Person;
