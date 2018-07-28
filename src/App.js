import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './data/create';
import { Router, Route } from 'react-router';
import history from './history/history';

import SignUp from './components/sign/signup';
import Login from './components/sign/login';
import Chat from './components/chat'
import { getToken } from './utils/token';

class App extends Component {
  
	componentWillMount() {
	  let token = getToken();
	  if (token) {
		  //不做任何处理
	  }else {
		  history.push('/login');
	  }
	  
	}
	render() {
	  return (
		<div className="main">
			{this.props.children}
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
			<Provider store={store}>
				<Router history={history}>
					<Route path="/" component={App}>
						<Route path="/signup" component={SignUp}></Route>
						<Route path="/login" component={Login}></Route>
						<Route path="/chat" component={Chat}></Route>
						<Route path="/chat/:chatType/:chatId" component = {Chat} />
					</Route>
				</Router>
			</Provider>
		);
	}
}
