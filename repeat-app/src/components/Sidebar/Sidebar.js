import React, { useState } from "react";
import { Map } from "../Maps/Map"
import "./Sidebar.css";


const Sidebar = () => {
    const [ active, setActive ] = useState(false);
    const [ visible , setVisible ] = useState(true);
    const [ activeMap, setActiveMap ] = useState(false);

    const handleClick = () => {
        setActive(!active);
        setVisible(!visible)
    };

    const handleClickMap = () => {
        setActiveMap(!active);
        setVisible(!visible)
    };

    return (
        <section className="sidebar">
             
             <div className="hamburger-container">
                <button onClick={handleClick} className={active ? "hamburger active" : "hamburger" } id="hamburger"></button>
                <img onClick={handleClickMap} className={activeMap ? "map active" : "map" } src="images/google-maps.png" alt="map-google"></img>
            
            </div>
            <div className={visible ? "visible" : "" }>
                <Map/>
            </div>
        </section>
    );
};
export {
    Sidebar
};