import React, { Component } from 'react';
import Footerlogo from '../assets/Footerlogo.jpg';
class Footer extends Component {
    render() {
        return (
            <div>
                 <img src={Footerlogo} width="200" height="200" />
            </div>
        );
    }
}

export default Footer;