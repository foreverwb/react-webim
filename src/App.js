import React, { Component } from 'react';
import './App.css';
import {Provider, connect} from 'react-redux';
import store from './data/create';

import SignUp from './components/sign/signup';

class App extends Component {
  render() {
    return (
      <div className="main">
          <SignUp />
      </div>
    );
  }
}

export default class Main extends Component {
    render() {
      return (
        <Provider store = {store}>
            <div>
                <App />
            </div>
        </Provider>
      );
    }
}
