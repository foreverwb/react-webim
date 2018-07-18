import React, { Component } from 'react';
import { getToken } from '../../../utils/token';

import Icon from '../../common/icon';
import Avator from '../../common/avator';
import './index.css';

export default class SlideBar extends Component {
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
                        <Icon type="chat"/>
                    </div>
                    <div className="app-item group">
                        <Icon type="chat1"/>
                    </div>
                </div>
                <div className="footer">
                    <div className="app-item setting">
                        <Icon type="setting1"/>
                    </div>
                </div>
           </div>
       );
   }
}