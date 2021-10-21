import React, { useState } from "react";
import Hamburger from "./components/Hamburger";
import "./index.scss";

const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const handleNavbar = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <nav className="navbar__container">
            <div className="navbar__links_container">
                <div className="navbar__logo">
                    <span>
                        <i class="bi bi-github"></i>
                    </span>
                </div>

                <div
                    className={`navbar__links ${
                        isNavOpen ? "navbar_open" : "navbar_close"
                    }`}
                >
                    <div className="navbar__link">Home</div>
                    <div className="navbar__link">About</div>
                    <div className="navbar__link">Sign In</div>
                    <div className="navbar__link">Sign Up</div>
                </div>

                <Hamburger isNavOpen={isNavOpen} handleNavbar={handleNavbar} />
            </div>
        </nav>
    );
};

export default Navbar;
