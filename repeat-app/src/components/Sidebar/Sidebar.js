import React, { useState } from "react";
import "./Sidebar.css";

const Sidebar = () => {
    const [active, setActive] = useState(false)

    const handleClick = () => {
        setActive(!active);
    }
    return (
        <section className="sidebar">
             <div className="hamburger-container">
                <button onClick={handleClick} className={active ? "hamburger active" : "hamburger" } id="hamburger"></button>
            </div>
        </section>
    )
}
export {
    Sidebar
}