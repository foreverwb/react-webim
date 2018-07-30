import React, { Component } from 'react';
import { getToken } from '../../../utils/token';

import Icon from '../../common/icon';
import Avator from '../../common/avator';
import {showDialog, closeDialog} from '../../common/dialog';
import './index.css';

export default class SlideBar extends Component {
    state = {
        showPanel: false
    }

    showAddRosterPanel = () => {

        showDialog({
            content:
                <div className="input-container">
                    <input ref={nickname => this.nickname = nickname} name="nickname" className="input" placeholder='输入昵称'/>
                </div>,
           
            footer:<div className="footer">
                    <button className="button" onClick = {this.addRoster}>确定</button>
                </div>,
            title: '添加好友'
        })
    }

    addRoster = () => {

        let value = this.nickname.value;
        if(value === undefined) {
            return;
        }
        sdk.conn.subscribe({
            to: value,
            message: '加个好友呗!'   
        });
        closeDialog();
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