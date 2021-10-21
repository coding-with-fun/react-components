import React from "react";
import { Link } from "react-router-dom";

const HomeScreen = () => {
    return (
        <div>
            <h1>Welcome to My React components</h1>

            <div>
                <Link to="/loader">Loader</Link>
            </div>

            <div>
                <Link to="/navbar">Navbar</Link>
            </div>

            <div>
                <Link to="/modal">Modal</Link>
            </div>

            <div>
                <Link to="/buttons">Buttons</Link>
            </div>
        </div>
    );
};

export default HomeScreen;
