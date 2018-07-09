import React, { Component } from 'react';

import {connect} from 'react-redux';
import classnames from 'classnames';
import './index.css';

export default class SignUp extends Component {
    signup = () => {
        console.log(123)
    }
    render() {
        let mainClassName = classnames({
            'sign': true,
            'signup': true
        });
        return (
            <div className={mainClassName}>
                <h2>注册页面</h2>
                <input ref='name' 
                    name="name" 
                    className="input"
                    placeholder='输入用户名' 
                    autoFocus={true} 
                    />
                <input ref='auth' 
                    name="auth" 
                    className="input"
                    placeholder='输入密码' 
                    type='password' 
                    />
                <input ref="nickname" 
                    name="nickname" 
                    className="input"
                    placeholder='输入昵称'  
                />

                <button className="button" onClick={this.signup}>注册</button>
                <p>已有账户,
                    {/* <Link to="/login">登录 </Link> */}
                </p>
            </div>
        );
    }
}
