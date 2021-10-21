import React from "react";
import { notify } from "./utils/Toast";

const Alert = () => {
    return (
        <div>
            <h1>Alert</h1>

            <button
                type="button"
                className="mx-3 btn btn-outline-success"
                onClick={() => notify({ type: "success" })}
            >
                Success
            </button>

            <button
                type="button"
                className="mx-3 btn btn-outline-danger"
                onClick={() => notify({ type: "error" })}
            >
                Error
            </button>

            <button
                type="button"
                className="mx-3 btn btn-outline-dark"
                onClick={() => notify({ type: "info" })}
            >
                Info
            </button>

            <button
                type="button"
                className="mx-3 btn btn-outline-warning"
                onClick={() => notify({ type: "warning" })}
            >
                Warning
            </button>
        </div>
    );
};

export default Alert;
