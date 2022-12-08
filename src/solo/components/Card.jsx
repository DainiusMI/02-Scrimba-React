import React from "react";
import "./card.css"

export default function Card(props) {
    return (
        <div className="solo-card" key={props.item.id}>
            <div className="card-img" 
                style={{
                    backgroundImage: `url(${props.item.imageUrl})`
                }}
            />
            <section className="content">
                <div className="card-header">
                    <i className="fa-solid fa-location-dot" />
                    <div className="card-location">{props.item.location}</div>
                    <a href={props.item.googleMapsUrl} className="maps-link">View on Google Maps</a>
                </div>
                <h1 className="solo-card-title">{props.item.title}</h1>
                <p className="card-date">{props.item.startDate} - {props.item.endDate}</p>
                <p className="card-description">{props.item.description}</p>
            </section>
        </div>
    )
}