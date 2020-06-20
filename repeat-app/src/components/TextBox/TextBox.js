import React from "react";
import "./TextBox.css";
const TextBox = (props) => {

    return (
        <p className="text-box">
            {props.textContain}
        </p>
    )
};

export {
    TextBox
}