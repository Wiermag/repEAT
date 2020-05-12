import React from "react";
import { SingleBox } from "../components/Boxs/Single/SingleBox";
import { Header, HeaderButton } from "../components/Header/Header";
import { EventsCarousel } from "../components/EventsCarousel/EventsCarousel"
import { TrippleBox } from "../components/Boxs/Tripple/TrippleBox";
import "./MainBox.css";

const MainBox = () => {
    return (
        <div className="main">
            <SingleBox  video="images/eat.mp4">
                <Header text="The app that helps you save money while reducing waste!">
                    <HeaderButton/>
                </Header>           
            </SingleBox>
            <SingleBox  classReverseSingle="reverse-single"/>
            <TrippleBox bckColor="#f07b3f"
              imageURL="./images/art-cook.jpg"
                        classReverseTripple="reverse-tripple"
                        classFirstBox=""
                        classSecondBox=""
                        classThirdBox=""/>                 
            <SingleBox class="" video="images/tomato.mp4">
                <EventsCarousel/>
            </SingleBox>
            <TrippleBox bckColor="#427a5b"
                        imageURL="./images/art-cook.jpg"
                        classLeftBox="text-left"
                        classMiddleBox="img-middle"
                        classRightBox="text-right"
                        textRight ="10 million tonnes of food are thrown away in Poland each year. 
                                    With the repEAT app, save money around you while reducing waste!"/> 
        </div>
    )
}

export {
    MainBox
}