import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Provider, connect} from 'react-redux';
import store from './data/create';

class App extends Component {
  render() {
    return (
      <div className="App">
          123
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
