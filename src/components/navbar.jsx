import React, { Component } from 'react';

// stateless function Component

const Navbar = ({totalCounters}) => {
    return ( 
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="/home">
                Navbar 
                <span className="badge badge pill badge-secondary">
                    {totalCounters}</span>
                </a>
            </nav>

     );
}
 
export default Navbar;

