import React from "react";
import { SectionBox } from "../components/Boxs/SectionBox";
import { Header, HeaderButton } from "../components/Header/Header";
import { TrippleBox } from "../components/Boxs/TrippleBox";
import 'bootstrap/dist/css/bootstrap.min.css';

const MainBox = () => {
    return (
        <div className="main">
            <SectionBox>
                <Header text="The app that helps you save money while reducing waste!">
                    <HeaderButton/>
                </Header>
            </SectionBox>
            <TrippleBox textRight ="10 million tonnes of food are thrown away in Poland each year. 
                                    With the repEAT app, save money around you while reducing waste!"/>
        </div>
    )
}

export {
    MainBox
}