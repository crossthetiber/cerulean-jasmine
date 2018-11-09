import React from 'react';
import { connect } from 'react-redux';
import { updatePersonAction, fetchPeopleAction } from '../store/actions/personActions';

class Person extends React.Component {
  constructor(props) {
    super(props);
    this.state = { person: '' };
  }

  componentWillMount = () => {
    this.props.fetchPeople();
  }

  showPerson(index) {
    this.props.onUpdatePerson('Bozo', index);
    // alert(this.props.employees[0].fname);
  }

  render() {
    console.log(this.props);

    return <div>
             <ul>
               <li onClick={() => this.showPerson(1)}>Click here</li>
               {/* <li>{this.props.persona.people[0].fname}</li> */}
             </ul>
          </div>;
  }
}

const mapStateToProps = state => ({
    employees: state.people
});

const mapActionToProps = {
      onUpdatePerson: updatePersonAction,
      fetchPeople: fetchPeopleAction
};

export default connect(mapStateToProps, mapActionToProps)(Person);
