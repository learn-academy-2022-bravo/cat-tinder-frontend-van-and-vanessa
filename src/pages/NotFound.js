import React, { Component } from 'react';
import Notfoundpic from '../assets/Notfoundpic.jpg';
class NotFound extends Component {
    render() {
        return (
            <div>
                <img src={Notfoundpic} height="500" />
            </div>
        );
    }
}

export default NotFound;
