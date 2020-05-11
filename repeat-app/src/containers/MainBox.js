import React from "react";
import { SingleBox } from "../components/Boxs/Single/SingleBox";
import { Header, HeaderButton } from "../components/Header/Header";
import { TrippleBox } from "../components/Boxs/Tripple/TrippleBox";
import "./MainBox.css";

const MainBox = () => {
    return (
        <div className="main">
            <SingleBox video="./static/media/eat.f4ff2b0a.mp4">
                <Header text="The app that helps you save money while reducing waste!">
                    <HeaderButton/>
                </Header>           
            </SingleBox>
            <TrippleBox textRight ="10 million tonnes of food are thrown away in Poland each year. 
                                    With the repEAT app, save money around you while reducing waste!"/>
         
        </div>
    )
}

export {
    MainBox
}