import React from "react";
import "./hero.css"
import photoGrid from "../../assets/photo-grid.png"

export default function Hero() {
    return (
        <div className="hero">
            <img className="hero-img" src={photoGrid} alt="hero-ing" />
            <h1 className="hero-heading">Online Experiences</h1>
            <p className="hero-text">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </div>
    )
}