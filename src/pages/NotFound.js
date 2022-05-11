import React, { Component } from 'react';
import Notfoundpic from '../assets/Notfoundpic.jpg';
class NotFound extends Component {
    render() {
        return (
            <div>
                <img src={Notfoundpic} width="200" height="200" />
            </div>
        );
    }
}

export default NotFound;
