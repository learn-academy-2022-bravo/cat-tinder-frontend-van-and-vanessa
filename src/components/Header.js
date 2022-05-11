import React, { Component } from 'react';
import Logo from '../assets/Logo.jpg';

class Header extends Component {
    render() {
        return (
            <div className="logo">
            <img src={Logo} width="200" height="200" />
          </div>
        );
    }
}

export default Header;
