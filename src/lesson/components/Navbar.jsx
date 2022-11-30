import React from "react";
import "./navbar.css"

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="container">
                <i className="nav-logo fa-brands fa-airbnb"></i>
                <h3 className="nav-heading">airbnb</h3>
            </div>
        </nav>
    )
}