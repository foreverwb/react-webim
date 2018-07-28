import React, { Component } from 'react';
import { connect } from 'react-redux';
import './index.css';

@connect(
    (state) => ({
        currentSession: state.session.current
    }),
    {

    }
)
export default class BubblePanel extends Component {
   render() {
       let { currentSession } = this.props;
       return (
           <div className="ctn-bubblepanel">
                <div className="title">
                    {currentSession ? currentSession.name : ''}
                </div>
                <div className="ctn-msglist">
                
                </div>
                <div className="ctn-msg-sender">
                        <textarea ref="msginput" placeholder="输入消息" />
                        <button className="button" onClick = {this.sendTextMessage}>发送</button>
                </div>
           </div>
       );
   }
}