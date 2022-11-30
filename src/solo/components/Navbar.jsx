import React from "react";
import logo from "../../assets/nav-logo-solo.svg"
import "./navbar.css"

export default function Navbar() {
    return (
        <nav className="navbar-solo">
            <img src={logo} alt="nav-logo"  className="nav-logo"/>
            <p className="nav-heading">my travel journal.</p>
        </nav>
    )
}