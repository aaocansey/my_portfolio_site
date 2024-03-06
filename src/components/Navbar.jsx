import React from "react";
import Logo from '../assets/company_logo.png'

function Navbar() {
    return (  
        <div className="navbar">
            <div className="navbar-brand">
                <img src={Logo} width={"100px"}/>
            </div>
            <div className="navLinks">
                <a>HOME</a>
                <a>ABOUT ME</a>
                <a>SKILLS</a>
                <a>PORTFOLIO</a>
                <a>SERVICES</a>
                <a>CONTACT</a>
            </div>
        </div>
    );
}

export default Navbar;