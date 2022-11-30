
import React from "react";
import dataArr from "../data"
//import avatar from "../../assets/katie-zaferes.png"
import "./card.css"

//import img from "../../../public/images"


export default function Card(props) {

    return (
        <div className="card">
            {!props.openedSpots ? 
                <div className="badge">SOLD OUT</div> :
                props.location === "Online" ? 
                    <div className="badge">ONLINE</div> : 
                    null
                } 
            {}
            <img className="card-avatar" src={`../../../public/images/${props.img}`} alt={`img-${props.id}`} />
            <div className="info-row">
                <i className="fa-sharp fa-solid fa-star"></i>
                <p className="rating">{props.rating}</p>
                <p className="voters">({props.reviewCount})</p>
                <p className="location">{` ${props.location}`}</p>
            </div>
            <p className="card-title">{props.title}</p>
            <p className="cost"><strong>from ${props.price}</strong> / person</p>
        </div>
    )
}




