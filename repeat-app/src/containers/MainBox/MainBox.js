import React from "react";
import "./MainBox.css";
import { SingleBox } from "../Boxs/Single/SingleBox";
import { Header, HeaderButton } from "../../components/Header/Header";
import { TextBox } from "../../components/TextBox/TextBox"
import { EventsCarousel } from "../../components/EventsCarousel/EventsCarousel"
import { TrippleBox } from "../Boxs/Tripple/TrippleBox";
import { CommentsBox } from "../../components/CommentsForm/CommentsBox/CommentsBox"


const MainBox = () => {
    return (
        <div className="main">
            <SingleBox  video="images/eat.mp4">
                <Header/>       
            </SingleBox>
            <HeaderButton/>         
            <SingleBox  classReverseSingle="reverse-single"
                        video = "images/plates.mp4">
                <TextBox textContain="10 million tonnes of food are thrown away in Poland each year. With the repEAT app, save money around you while reducing waste!"/>
            </SingleBox>    
                             
            <TrippleBox bckColor="#405943"
                        textLeft ="repEAT is an application that fights against food waste by offering traders (people, restaurants, cafes, bakeries, supermarkets, etc.) 
                                    to sell the daily food surplus at a lower price."
                        textRight=" It is a win-win-win solution where consumers eat at reduced prices, traders receive additional income and where the environment wins!"
                        imageURL="./images/pizza.jpg"
                        classReverseTripple="reverse-tripple"
                        classRightBox="text-right"
                        classLeftBox="text-left"
                      />                 
            <SingleBox video="images/tomato.mp4">
                <EventsCarousel/>
            </SingleBox>
            <CommentsBox/>
        </div>
    );
};

export {
    MainBox
};