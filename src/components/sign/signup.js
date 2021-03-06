import React, { Component } from 'react';

import {connect} from 'react-redux';
import classnames from 'classnames';
import './index.css';
import {Link} from 'react-router';
import history from '../../history/history';
import {reg} from '../../data/actions/sign';
import safeRender from '../../decorators/safeRender';
import { bindActionCreators } from 'redux'

import tooltip from '../common/tooltip';

@connect(
    state => ({
        regState: state.sign.regState
    }),
    {
        reg
    }
)
@safeRender({
    active: true,
    errorHandler: function(e)  {
        //alert(e.displayName + '---' + e.method)
    }
})
export default class SignUp extends Component {
    signup = () => {
        let username = this.refs.name.value;
        let pwd = this.refs.auth.value;
        let nickname = this.refs.nickname.value;
        if (!username || !pwd) {
            return false;
        }

        let options = {
            username: username.toLowerCase(),
            password: pwd,
            nickname: nickname,
            appKey: WebIM.config.appkey,
            apiUrl: WebIM.config.apiURL
        };

        this.props.reg(options).then(() => {
            history.push('/login');
        }).catch(() => {
            //tooltip
            tooltip.show({
                content: '注册失败，名字冲突',
                type: 'error'
            })
        });
    }
    render() {
        let mainClassName = classnames({
            'sign': true,
            'signup': true
        });
        let {regState} = this.props;
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
                    <Link to="/login">登录 </Link>
                </p>
                {regState === 1 ? <Loading /> : null}
            </div>
        );
    }
}
// function mapStateToProps(state) {
//     return {
//         regState: state.sign.regState
//     }
// }
// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({reg}, dispatch)
// }
// export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
class Loading extends Component {
    render() {
        return (
            <div className="loading">
                正在加载中
            </div>
        )
    }
}
