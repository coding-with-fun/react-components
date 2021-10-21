import React from "react";
import "./Hamburger.scss";

const Hamburger = ({ isNavOpen, handleNavbar }) => {
    return (
        <div
            className={`hamburger_menu ${
                isNavOpen ? "hamburger_open" : "hamburger_close"
            }`}
            onClick={handleNavbar}
        >
            <div className="hamburger_line"></div>
        </div>
    );
};

export default Hamburger;
