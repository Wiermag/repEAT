import React from "react";
import "./MainBox.css";
import { SingleBox } from "../Boxs/Single/SingleBox";
import { Header, HeaderButton } from "../../components/Header/Header";
import { TextBox } from "../../components/TextBox/TextBox"
import { EventsCarousel } from "../../components/EventsCarousel/EventsCarousel"
import { TrippleBox } from "../Boxs/Tripple/TrippleBox";
import { CommentsBox } from "../../components/CommentsForm/CommentsBox/CommentsBox"
import { Footer } from "../../components/Footer/Footer";

const MainBox = () => {
    return (
        <div className="main">
            <SingleBox  video="images/eat.mp4">
                <Header/>  
                <HeaderButton/>        
            </SingleBox>
            <SingleBox  classReverseSingle="reverse-single"
                        video = "images/plates.mp4">
                <TextBox textContain="10 million tonnes of food are thrown away in Poland each year. With the repEAT app, save money around you while reducing waste!"/>
            </SingleBox>    
            <TrippleBox bckColor="white"
                        textRight =""
                        imageURL="./images/pizza.jpg"
                        classReverseTripple="reverse-tripple"
                        classRightBox="text-right"
                      />                 
            <TrippleBox bckColor="#405943"
                        textRight ="10 million tonnes of food are thrown away in Poland each year. With the repEAT app, save money around you while reducing waste!"
                        imageURL="./images/pizza.jpg"
                        classReverseTripple="reverse-tripple"
                        classRightBox="text-right"
                      />                 
            <SingleBox video="images/tomato.mp4">
                <EventsCarousel/>
            </SingleBox>
            <CommentsBox/>
            <Footer/>
        </div>
    );
};

export {
    MainBox
};