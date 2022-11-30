import React from "react";

import Navbar from "./components/Navbar";
import Card from "./components/Card"
import dataArr from "./data"


export default function TravelJournal() {
    return (
        <div className="solo-proj">
            <Navbar />
            <main className="solo-main">
                {
                    dataArr.map(item => {
                        return <Card key={item.id} item={item}/>
                    })
                }
            </main>
        </div>
    )
}