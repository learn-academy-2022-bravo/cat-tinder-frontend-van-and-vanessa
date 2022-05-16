import React, { Component } from 'react';
import Logo from '../assets/Logo.jpg';
import {  NavItem, NavLink, Nav } from 'reactstrap'
import {Helmet} from 'react-helmet';



class Header extends Component {
    render() {
        return (
            // <>
               
               
               <>
                <>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand" href="/">Home</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item active">
                                <a class="nav-link" href="/foodindex">Select A Dish <span class="sr-only"></span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/foodnew">Create A Dish</a>
                            </li>
                        </ul>
                        {/* <form class="form-inline my-2 my-lg-0">
                            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form> */}
                    </div>
                </nav><div>
                    {/* <Nav>

                        <NavItem>
                            <NavLink
                                active
                                href="/"
                            >
                                Home
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/foodindex">
                                View All Dishes
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/foodnew">
                                Add A Dish
                            </NavLink>
                        </NavItem>
                    </Nav> */}
                </div><h2>
                    <div className="d-block mx-0">

                        <img src={Logo} height="200" />
                        <Helmet>
                            <style>{'body { background-color:#e18b22; }'}</style>
                        </Helmet>

                    </div>
                </h2></>
            </>
        );
    }
}

export default Header;
