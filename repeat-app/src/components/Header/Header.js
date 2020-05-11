import React from "react";
import "./Header.css";

const Header = (props) => {
    return (
        <div className="header-logo">
            <h1 href="index.html" className="logo">repEAT</h1>
            {props.children}
            <div className="header-text">{props.text}</div>
        </div>
    )
}
const HeaderButton = () => {
    //formularz po kliknięciu.
    return (
        <button className="header-button">Sign in</button>
    )
}
export {
    Header, 
    HeaderButton
}