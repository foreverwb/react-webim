import React, { Component } from 'react';
import Icon from '../icon';

import './index.css';

export default class Avator extends Component {
    render() {
        let {type, avatorUrl} = this.props;
        return <div className="avator">
                    {avatorUrl ? <img src = {avatorUrl} alt="avator"/> : <Icon type="usered" /> }
               </div>
    }
}