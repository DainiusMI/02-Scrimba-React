import React from "react";

import Navbar from "./components/Navbar";
import Card from "./components/Card"
import dataArr from "./data"
import "./travel-journal.css"

export default function TravelJournal() {
    return (
        <div className="solo-proj">
            <Navbar />
            <main className="solo-main">
                {
                    dataArr.map((item, idx) => {
                        return  <Card key={`card-${item.id}`} item={item}/>
                    })
                }
            </main>
        </div>
    )
}