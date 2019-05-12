import React from 'react';
import logo from "../images/new-york-times-logo.png";

const Header = () => (
    <div>
        {/* <h1>New York Times</h1> */}
        <div className="logo-wrapper">
            <img src={logo} alt="New York Times Logo"/>
        </div>
    </div>
);

export default Header;