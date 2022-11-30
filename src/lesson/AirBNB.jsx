
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card"
import dataArr from "./data"
import "./lesson.css"


export default function AirBNB() {
    return (
        <div className="lesson-proj">
            <Navbar />
            <Hero />
            <div className="main">
                {
                    dataArr.map(offer => <Card 
                        key={offer.id}
                        img={offer.coverImg}
                        rating={offer.stats.rating}
                        reviewCount={offer.stats.reviewCount}
                        title={offer.title}
                        description={offer.description}
                        location={offer.location}
                        price={offer.price}
                        openedSpots={offer.openSpots}
                        // could had passed:
                        // item={item}
                        // and reffered to it as props.item.*
                        // or use spread operator
                        // {...item}
                        // props would match the entry key
                    />)
                }
            </div>
        </div>  
    )
}