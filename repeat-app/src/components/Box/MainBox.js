import React from "react";
import { SectionBox } from "../Box/SectionBox";
import { TrippleBox } from "../Box/TrippleBox";
import 'bootstrap/dist/css/bootstrap.min.css';

const MainBox = () => {
    return (
        <div className="main">
            <SectionBox/>
            <TrippleBox/>
        </div>
    )
}

export {
    MainBox
}