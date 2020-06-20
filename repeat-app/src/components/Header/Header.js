import React, { useState } from "react";
import "./Header.css";
import { FormJoinCompany } from "../Form/Company/FormJoinCompany";
import { FormJoinPerson } from "../Form/Person/FormJoinPerson"


const Header = (props) => {
    return (
        <div className="header-logo" id="header">
            <h1 href="index.html" className="logo">repEAT</h1>
                { props.children }
            <div className="header-text">The app that helps you save money while reducing waste!</div>
        </div>
    );
};

const HeaderButton = () => {
    const [ visiblePersonForm , setVisiblePersonForm ] = useState(true);
    const [ visibleCompanyForm , setVisibleCompanyForm ] = useState(true);

    const handleClickPerson = () => {
        setVisiblePersonForm(!visiblePersonForm)
    };

    const handleClickCompany = () => {
        setVisibleCompanyForm(!visibleCompanyForm);
    };
  
   
    return (
        <div className="display-box">
            <div className="title-form">JOIN AS A...</div>
            <div className="images">
                <img className="arrow1" src="images/arrow1.png"/>
                <img className="arrow2" src="images/arrow1.png"/>
            </div>
            <div className="header-box">
                <button  className="header-button" onClick={ handleClickPerson }>
                    <a href="#person">{visiblePersonForm ? "PRIVATE PERSON" : <i className="fa fa-undo" aria-hidden="true"></i>}</a></button>
                <button  className="header-button" onClick={ handleClickCompany }>
                    <a href="#company">{visibleCompanyForm ? "COMPANY" : <i className="fa fa-undo" aria-hidden="true"></i>}</a></button>
            </div>
        
            <div id="person" className={visiblePersonForm ? "visible" : "" }>
                <FormJoinPerson />
            </div>
            <div id="company" className={visibleCompanyForm ? "visible" : "" }> 
                <FormJoinCompany/>
            </div>
       </div>
    );
};

export {
    Header, 
    HeaderButton
}