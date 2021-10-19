import React from "react";
import "./index.scss";

const Loader = () => {
    return (
        <div className="loader-container d-flex justify-content-center align-items-center">
            <div
                className="spinner-border"
                style={{
                    width: "3rem",
                    height: "3rem",
                }}
                role="status"
            >
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};

export default Loader;
