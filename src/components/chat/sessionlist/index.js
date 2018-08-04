import React, { Component } from 'react';

import Avator from '../../common/avator';
import { showDialog, closeDialog } from '../../common/dialog';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { setCurrentSession, getRosters } from '../../../data/actions/session';
import eventEmitter from '../../../utils/event';
import shallowequal from 'shallowequal';

import './index.css';

@connect(
    (state) => ({
        rosters: state.session.rosters
    }),
    {
        getRosters
    }
)
export default class SessionList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showPanel: false,
            // subscribeMessage: null,
        };
    }
    componentWillMount() {
        // sdk.conn.listen({
        //     onOpened: (message) =>  {
        //         this.props.getRosters();
        //     },
        //     onTextMessage: (message) => {
        //         debugger
        //     },
        //     onRoster: () => {
        //         this.props.getRosters();
        //     },
        //     onPresence: (message) => {
        //         this.handlePresence(message);
        //     }
        // });
        eventEmitter.on('presence', this.handlePresence);
    }

    handlePresence = (message) => {
        if(message.type === 'subscribe') {
            this.setState({
                subscribeMessage: message
            });
            this.showPresenceDialog(); 
        }
    }

    showPresenceDialog = () => {
        const {subscribeMessage} = this.state;
        showDialog({
            title: '好友申请',
            content: <div>
                        <div>{subscribeMessage.from}邀请你加为好友</div>
                        <div>留言: {subscribeMessage.status}</div>
                     </div>,
            footer: <div>
                        <button className="button reject" onClick={this.reject}>拒绝</button>
                        <button className="button accept" onClick={this.agree}>同意</button>
                    </div>
        })
    }

    agree = () => {
        let message = this.state.subscribeMessage;
        sdk.conn.subscribed({
            to: message.from,
            message : '[resp:true]'
        });
        sdk.conn.subscribe({//需要反向添加对方好友
            to: message.from,
            message : '[resp:true]'
        });
        closeDialog();
    }
    reject = () => {
        let message = this.state.subscribeMessage;
        
        sdk.conn.unsubscribed({
            to: message.from,
            message : 'rejectAddFriend'
        });
        closeDialog();
    }

    render() {
        let {rosters: friendList, chatId} = this.props;
        return (
            <div className="sessionlist">
                    {friendList.length ? friendList.map((friend) => {
                        let isSelected = friend.name === chatId;
                        return <SessionItem friend={friend} key={friend.name} isSelected={isSelected}/>
                    }): null}
            </div>
        );
    }
}
@connect(
    (state) => ({

    }),
    {
        setCurrentSession
    }
)
class SessionItem extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return !shallowequal(nextProps.friend, this.props.friend) || nextProps.isSelected !== this.props.isSelected; 
    }

    itemClick = () => {
        let { setCurrentSession, friend } = this.props;
        setCurrentSession(friend);
    }

    render() {
        let {friend, isSelected} = this.props;
        let url = `chat/single/${friend.name}`;
        return <div className={isSelected ? "session-item-outer selected" : "session-item-outer"}>
                <Link to = {url} className="session-item" onClick={this.itemClick}>
                    <div className="ctn-avator">
                        <Avator />
                    </div>
                    <div className="session-inner">
                        <div className="name">{friend.name}</div>
                        <div className="msg-preview">
                            {friend.message ? friend.message.value : null}
                        </div>
                    </div>
                </Link>
                    
               </div>
    }
}