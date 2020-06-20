import React, { useState } from "react";
import { Map } from "../Maps/MapMain/Map"
import "./Sidebar.css";

const Sidebar = () => {
    const [ active, setActive ] = useState(true);
    const [ visible , setVisible ] = useState(true);
    const [ activeMap, setActiveMap ] = useState(false);

    const handleClick = () => {
        setActiveMap(!active)
        setVisible(!visible)
    };

    const handleClickMap = () => {
        setActiveMap(!active);
        setVisible(!visible)
    };

    return (
        <section className="sidebar">
             
             <div className="hamburger-container">
                <div><i onClick={ handleClick } className={"fas fa-home"}></i></div>
                <img onClick={ handleClickMap } className={activeMap ? "map active" : "map" } src="images/google-maps.png" alt="map-google"></img>
            </div>
            <div className={visible ? "visible" : "" }>
                <Map id="map"/>
            </div>
            <div className="links">
                <a><i className="fab fa-instagram"></i></a>
                <a><i className="fab fa-facebook-f"></i></a>
                <a><i className="fab fa-twitter"></i></a>
            </div>
           
        </section>
    );
};

export {
    Sidebar
};