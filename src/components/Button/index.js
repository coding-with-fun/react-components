import React from "react";
import "./index.scss";

const Button = () => {
    return (
        <div className="button__container">
            <div className="button button_primary">Button</div>
            <div className="button button_primary_outline">Button</div>
            <div className="button button_danger">Button</div>
            <div className="button button_danger_outline">Button</div>
            <div className="button button_success">Button</div>
            <div className="button button_success_outline">Button</div>
        </div>
    );
};

export default Button;
