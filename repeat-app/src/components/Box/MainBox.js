import React from "react";
import { SectionBox } from "../Box/SectionBox";
import { TrippleBox } from "./TrippleBox";

const MainBox = () => {
    return (
        <div className="main">
            <SectionBox/>
            <TrippleBox/>
            <TrippleBox/>
            <TrippleBox/>
            <SectionBox/>
        </div>
    )
}

export {
    MainBox
}