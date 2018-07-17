import React, { Component } from 'react';
import { getToken } from '../../../utils/token';


export default class SlideBar extends Component {
   render() {
       let tokenUser = getToken();
       let username = tokenUser ? tokenUser.user.username : '';
       return (
           <div className="slideBar">
                <div className="profile">
                </div>
           </div>
       );
   }
}