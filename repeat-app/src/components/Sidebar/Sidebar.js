import React from "react";

const Sidebar = () => {

    const handleClick = (e) => {
        e.target.classList.toggle('active');
    }
    return (
        <section className="sidebar">
             <div className="hamburger-container">
                <button onClick={handleClick} className="hamburger" id="hamburger"></button>
            </div>
        </section>
    )
}

export {
    Sidebar
}