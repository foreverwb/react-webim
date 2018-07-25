import React, { Component } from 'react';

import './index.css';
export default class SessionList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            friendList: [],
            showPanel: false,
        };
    }
    componentWillMount() {
        sdk.conn.listen({
            onOpened: (message) =>  {
                this.getRosters();
            },
            onTextMessage: (message) => {
                debugger
            },
            onRoster: () => {
                this.getRosters();
            },
            onPresence: (message) => {
                this.handlePresence(message);
            }
        });
    }
    getRosters = () => {
        sdk.conn.getRoster({
            success: (rosters) => {
                rosters = rosters.filter((roster) => {
                    return roster.subscription === 'both';
                });
                this.setState({
                    friendList: rosters
                })
                console.log(rosters);
            },
            error: (e) => {

            }
        });
    }

    render() {
        let {friendList} = this.state;
        return (
            <div className="sessionlist">
                    {friendList.length ? friendList.map((friend) => {
                        return <SessionItem friend={friend} key={friend.name}/>
                    }): null}
            </div>
        );
    }
}

class SessionItem extends Component {
    render() {
        let {friend} = this.props;
        return <div className="session-item">{friend.name}</div>
    }
}