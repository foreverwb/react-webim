import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';

import './index.css';

class Tooltip extends Component {
    static defaultProps = {
        time: 3000,
        content: '',
        type: ''
    }

    state = {

    }
    componentDidMount() {

    }

    render() {
        let {type, content} = this.props;
        console.log(this.props)
        let className = classnames({
            'tooltip': true,
            [type]: type
        })

        return (
            <div className={className}>
                <div>{content}</div>
            </div>
        );
    }
}
let d;
let timer = 0;
const show = (props) => {
    if(d) {
        close();
    }
    d = document.createElement('div');
    document.body.appendChild(d);
    ReactDOM.render(<Tooltip {...props}></Tooltip>, d);
    if(timer) {
        clearTimeout(timer);
    }
    timer = setTimeout(() => {
        close();
    }, props.time || 3000);
}

const close = () => {
    if(d) {
        ReactDOM.unmountComponentAtNode(d);
        d.parentNode.removeChild(d);
        d = null;
    }
}
export default {
    show: show,
    close: close
}