 import React, { Component } from 'react';

import SlideBar from './slidebar';
import SessionList from './sessionlist';
import BubblePanel from './bubblepanel';


 export default class Chat extends Component {
    render() {
        return (
            <div>
                <SlideBar />
                <SessionList />
                <BubblePanel />
            </div>
        );
    }
 }