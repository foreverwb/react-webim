import React, { Component } from 'react';
import { getToken } from '../../../utils/token';

import Icon from '../../common/icon';
import Avator from '../../common/avator';
import {showDialog} from '../../common/dialog';
import './index.css';

export default class SlideBar extends Component {
    state = {
        showPanel: false
    }
    showAddRosterPanel = () => {
        this.setState({
            showPanel: true
        })
    }
    showAddRosterPanel = () => {
        showDialog({
            content:
                <div className="input-container">
                    <input type="text" className="input" placeholder="输入名字" refs="nickname"/>
                </div>,
           
            footer:<div className="footer">
                    <button className="button" onClick = {this.addRoster}>确定</button>
                </div>,
            title: '添加好友'
        })
    }
    render() {
        let tokenUser = getToken();
        let username = tokenUser ? tokenUser.user.username : '';
        return (
            <div className="slidebar">
                <div className="profile">
                    <div className="app-item">
                        <Avator />
                    </div>
                    <div className="name">{username}</div>
                </div>
                <div className="menus">
                    <div className="app-item chat">
                        <Icon type="chat" />
                    </div>
                    <div className="app-item group">
                        <Icon type="chat1" />
                    </div>
                </div>
                <div className="footer">
                    <div className="app-item setting" onClick={this.showAddRosterPanel}>
                        <Icon type="setting1" />
                    </div>
                </div>
            </div>
        );
    }
}