import React, { Component } from 'react';
import { connect } from 'react-redux';

import {sendTextMsg} from '../../../data/actions/message';
import './index.css';

@connect(
    (state) => ({
        currentSession: state.session.current,
        msglist: state.message.msglist
    }),
    {
        sendTextMsg
    }
)
export default class BubblePanel extends Component {
    sendMessageBtn = () => {
        let { sendTextMsg, currentSession, chatType  } = this.props;
        const msg = this.refs.msginput.value;
        sendTextMsg(currentSession.name, msg, chatType);
        this.refs.msginput.value = '';
    }

    getMsgs = () => {
        let {msglist, currentSession} = this.props;
        if (!currentSession) {
            return [];
        }
        return msglist[currentSession.name] || [];
    }

    render() {
       let { currentSession } = this.props;
       let msgs = this.getMsgs();
       return (
           <div className="ctn-bubblepanel">
                <div className="title">
                    {currentSession ? currentSession.name : ''}
                </div>
                <div className="ctn-msglist">
                    {msgs.map(msg => {
                        return <div key="msg.id">{msg.value}</div>
                    })}
                </div>
                <div className="ctn-msg-sender">
                        <textarea ref="msginput" placeholder="输入消息" />
                        <button className="button" onClick = {this.sendMessageBtn}>发送</button>
                </div>
           </div>
       );
    }
}