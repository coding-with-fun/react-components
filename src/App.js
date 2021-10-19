import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import IndexRouter from "./routes";

const App = () => {
    return (
        <Router>
            <IndexRouter />
        </Router>
    );
};

export default App;
