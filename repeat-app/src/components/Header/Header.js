import React from "react";
import FormJoin from "../Form/Person/FormJoinPerson"
import "./Header.css";

const Header = (props) => {
    return (
        <div className="header-logo">
            <h1 href="index.html" className="logo">repEAT</h1>
                {props.children}
            <div className="header-text">The app that helps you save money while reducing waste!</div>
        </div>
    );
};

const HeaderButton = () => {
    //formularz po kliknięciu.
    return (
        <>
            <button  className="header-button">Join as a private person</button>
            <button  className="header-button">Join as a company</button>
        </>
    );
};
export {
    Header, 
    HeaderButton
}