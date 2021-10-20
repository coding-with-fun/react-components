import React, { useState } from "react";
import "./Hamburger.scss";

const Hamburger = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    return (
        <div
            className={`hamburger_menu ${
                isNavOpen ? "hamburger_open" : "hamburger_close"
            }`}
            onClick={() => setIsNavOpen(!isNavOpen)}
        >
            <div className="hamburger_line"></div>
        </div>
    );
};

export default Hamburger;
