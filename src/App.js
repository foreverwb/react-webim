import React, { Component } from 'react';
import './App.css';
import {Provider} from 'react-redux';
import store from './data/create';
import {Router, Route} from 'react-router';
import history from './history/history';

import SignUp from './components/sign/signup';
import Login from './components/sign/login';

class App extends Component {
  render() {
    return (
      <div className="main">
          <SignUp/>
          {/* {this.props.children} */}
      </div>
    );
  }
}

/**
 * 
 *  #hash
 *  /
 *  /login -> 登录页面
 *  /signup -> 注册页面
 *  /chat -> 聊天页面
 *  /chat/single/:uid -> 单聊
 *  /chat/group/:uid -> 群聊
 */
export default class Main extends Component {
    render() {
      return (
        <Provider store = {store}>
            <Router history = {history}>
                <Route path="/" component={App}></Route>
                <Route path="/signup" component={SignUp}></Route>
                <Route path="/login" component={Login}></Route>
            </Router>
        </Provider>
      );
    }
}
