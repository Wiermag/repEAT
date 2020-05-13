import React from "react";
import FormJoin from "../Form/FormJoin"
import "./Header.css";

const Header = (props) => {
    return (
        <div className="header-logo">
            <h1 href="index.html" className="logo">repEAT</h1>
                {props.children}
            <div className="header-text">The app that helps you save money while reducing waste!</div>
        </div>
    )
}

const HeaderButton = () => {
    //formularz po kliknięciu.
    return (
        <button onClick={} className="header-button">Join</button>
        
    )
}
export {
    Header, 
    HeaderButton
}