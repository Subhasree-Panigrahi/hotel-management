import React from "react";
import AllItem from "../../Destinations/AllItem";
 import "../popular/Mostpouplar.css"

const DestinationHome = () => {
    return (
        <>
        <section className="popular top">
            <div className="full_container">
            <div className="heading">
                <h1>Most Popular destinations</h1>
                <div className="line"></div>
            </div>

            <div className="content">
                <AllItem />
            </div>
            </div>
        </section>
        </>
    )
}

export default DestinationHome