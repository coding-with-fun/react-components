import React from "react";
import Hamburger from "./components/Hamburger";
import "./index.scss";

const Navbar = () => {
    return (
        <nav className="navbar__container">
            <div className="navbar__links_container">
                <div className="navbar__logo">
                    <span>
                        <i class="bi bi-github"></i>
                    </span>
                </div>

                <div className="navbar__links">
                    <div className="navbar__link">Home</div>
                    <div className="navbar__link">About</div>
                    <div className="navbar__link">Sign In</div>
                    <div className="navbar__link">Sign Up</div>
                </div>

                <Hamburger />
            </div>
        </nav>
    );
};

export default Navbar;
