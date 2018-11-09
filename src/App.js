import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import { Provider } from 'react-redux'
import configureStore from './store';
import './App.css';
import { updateOrgAction } from './store/actions/orgActions';

import Person from './components/Person';

const store = configureStore();

console.log('In App.js');
console.log('State Part One');
console.log(store.getState());

// const updateOrgAction = {
//   type: 'updateOrg',
//    org: 'Org Two'
// };

store.dispatch(updateOrgAction());
console.log('State Part Two');
console.log(store.getState());
// store.dispatch(updatePersonAction());

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <header className="App-header">
              <h1>My App</h1>
            </header>
           <Switch>
              <Route exact path='/person/:netid' component={Person} />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
