import React from "react";
import { SingleBox } from "../Boxs/Single/SingleBox";
import { Header, HeaderButton } from "../../components/Header/Header";
import { TextBox } from "../../components/TextBox/TextBox"
import { EventsCarousel } from "../../components/EventsCarousel/EventsCarousel"
import { TrippleBox } from "../Boxs/Tripple/TrippleBox";
import "./MainBox.css";
import { FormJoin } from "../../components/Form/FormJoin";

const MainBox = () => {
    return (
        <div className="main">
            <SingleBox  video="images/eat.mp4">
                <Header>
                    <HeaderButton/>
                </Header>           
            </SingleBox>
            <SingleBox  classReverseSingle="reverse-single"
                        video = "images/plates.mp4">
                <TextBox textContain=""/>
            </SingleBox>
            <TrippleBox bckColor="#405943"
                        textRight ="10 million tonnes of food are thrown away in Poland each year. With the repEAT app, save money around you while reducing waste!"
                        imageURL="./images/pizza.jpg"
                        classReverseTripple="reverse-tripple"
                        classRightBox="text-right"
                      />                 
            <SingleBox video="images/tomato.mp4">
                <EventsCarousel/>
            </SingleBox>
            <FormJoin/>
            {/* <TrippleBox bckColor="#eeeeee"
                        classReverseTripple="reverse-tripple"
                        imageURL="./images/phone-repeat.png"
                        classLeftBox="text-left"
                        classMiddleBox="img-middle"
                        classRightBox="text-right"/>         */}
        </div>
    );
};

export {
    MainBox
};