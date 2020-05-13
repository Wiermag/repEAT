import React, { useState } from "react";
import { Map } from "../Maps/Map"
import "./Sidebar.css";

const Sidebar = () => {
    const [active, setActive] = useState(false)
    const [ visible , setVisible ] = useState(true)

    const handleClick = () => {
        setActive(!active);
        setVisible(!visible)
    }
    return (
        <section className="sidebar">
             <div className="hamburger-container">
                <button onClick={handleClick} className={active ? "hamburger active" : "hamburger" } id="hamburger"></button>
            </div>
            <div className={visible ? "visible" : "" }>
                <Map></Map>
            </div>
        </section>
    )
}
export {
    Sidebar
}