import React, { Component } from 'react';
import Footerlogo from '../assets/Footerlogo.jpg';
class Footer extends Component {
    render() {
        return (
            <div className="d-block mx-0">
                 <img src={Footerlogo} height="200" />
            </div>
        );
    }
}

export default Footer;