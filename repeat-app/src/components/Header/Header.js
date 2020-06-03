import React, { useState } from "react";
import "./Header.css";
import { FormJoinCompany } from "../Form/Company/FormJoinCompany";
import { FormJoinPerson } from "../Form/Person/FormJoinPerson"

// const [ visible , setVisible ] = useState(true);

// const handleClick = () => {
//     setVisible(!visible)
// }

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
    const [ visiblePersonForm , setVisiblePersonForm ] = useState(true);
    const [ visibleCompanyForm , setVisibleCompanyForm ] = useState(true);

    const handleClickPerson = () => {
        setVisiblePersonForm(!visiblePersonForm)
    };

    const handleClickCompany = () => {
        setVisibleCompanyForm(!visibleCompanyForm);
    };
   
    return (
        <>
            <button  className="header-button" onClick={handleClickPerson}>{visiblePersonForm ? "Join as a private person" : <i class="fa fa-undo" aria-hidden="true"></i>}</button>
            <button  className="header-button" onClick={handleClickCompany}>{visibleCompanyForm ? "Join as a company" : <i class="fa fa-undo" aria-hidden="true"></i>}</button>
            <div className={visiblePersonForm ? "visible" : "" }>
                <FormJoinPerson/>
            </div>
            <div className={visibleCompanyForm ? "visible" : "" }> 
                <FormJoinCompany/>
            </div>
            
        </>
    );
};
export {
    Header, 
    HeaderButton
}