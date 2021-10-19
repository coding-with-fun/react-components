import React from "react";
import { Link } from "react-router-dom";

const HomeScreen = () => {
    return (
        <div>
            <h1>Welcome to My React components</h1>

            <Link to="/loader">Loader</Link>
        </div>
    );
};

export default HomeScreen;
