import React, { Component } from 'react';

import './index.css';
export default class SessionList extends Component {
   render() {
       return (
           <div className="sessionlist">
           </div>
       );
   }
}

class SessionItem extends Component {
    render() {
        let {friend} = this.props;
        return <div>{friend}</div>
    }
}